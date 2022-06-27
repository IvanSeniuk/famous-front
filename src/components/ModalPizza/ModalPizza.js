import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { addItemPizza } from '../../redux/slices/cart/cartSlice'

const ModalPizza = ({
    additions,
    id,
    name,
    price,
    weight,
    config,
    img,
    composition,
    productType,
}) => {
    useEffect(() => {
        const modalPizza = document.querySelector('.m-modal-pizza__card')
        document.querySelector('body').classList.add('hidden')

        var scrollModalPizza = 0
        var hightModalPizza = 0
        modalPizza.addEventListener('scroll', () => {
            scrollModalPizza =
                document.querySelector('.m-modal-pizza__card').scrollTop +
                document.querySelector('.m-modal-pizza__card').clientHeight
        })

        modalPizza.addEventListener('touchstart', function (e) {
            var swipe = e.targetTouches,
                start = swipe[0].pageY,
                distance = 0

            this.addEventListener('touchmove', function (e) {
                var contact = e.targetTouches,
                    end = contact[0].pageY
                distance = end - start
                hightModalPizza = document.querySelector(
                    '.m-modal-pizza__card'
                ).clientHeight
                if (scrollModalPizza <= hightModalPizza && distance > 15) {
                    //console.log(distance)
                    //console.log(hightModalPizza)
                    var opacityOverlay = 1 - distance / hightModalPizza
                    // console.log(opacityOverlay)
                    document.querySelector(
                        '.m-modal-pizza .modal-overlay'
                    ).style.opacity = `${opacityOverlay}`
                    document.querySelector(
                        '.m-modal-pizza__card'
                    ).style.transform = `translateY(${distance}px)`
                    document.querySelector(
                        '.m-modal-pizza__card'
                    ).style.transitionDuration = `0ms`
                    document.querySelector(
                        '.m-modal-pizza__bottom'
                    ).style.transitionDuration = `0ms`
                }
                //if (distance < -10) {
                //    // up
                //    console.log('up')
                //}
                //if (distance > 10)
                //	// down
                //	console.log("down ", distance);
            })
            this.addEventListener('touchend', function () {
                if (distance > hightModalPizza / 2.5) {
                    document.querySelector(
                        '.m-modal-pizza__card'
                    ).style.transform = `translateY(101%)`
                    document.querySelector(
                        '.m-modal-pizza__card'
                    ).style.transitionDuration = ``
                    document.querySelector(
                        '.m-modal-pizza__bottom'
                    ).style.transitionDuration = ``
                    document.querySelector(
                        '.m-modal-pizza__card'
                    ).style.opacity = `.1`

                    document.querySelector(
                        '.m-modal-pizza__bottom'
                    ).style.opacity = `.1`
                    document.querySelector(
                        '.m-modal-pizza .modal-overlay'
                    ).style.opacity = `0`
                    document.querySelector(
                        '.m-modal-pizza .modal-overlay'
                    ).style.pointerEvents = `none`
                    document.querySelector('body').classList.remove('hidden')
                    document.querySelector(
                        '.m-modal-pizza__bottom'
                    ).style.transform = `translateY(101%)`
                    setTimeout(() => {
                        handleDeleteParams()
                    }, 450)
                } else {
                    document.querySelector(
                        '.m-modal-pizza__card'
                    ).style.transform = `translateY(0px)`
                    document.querySelector(
                        '.m-modal-pizza__card'
                    ).style.transitionDuration = ``
                }
            })
            //this.removeEventListener('touchmove'),
            //    this.removeEventListener('touchend')
        })
    })

    const [activeType, setActiveType] = useState(0)
    const [activeSide, setActiveSide] = useState(0)
    const [count, setCount] = useState(1)
    const decrementCount = () => {
        if (count > 1) setCount(count - 1)
    }
    const incrementCount = () => {
        setCount(count + 1)
    }
    //const [activeCheckbox, setActiveCheckbox] = useState([])
    //const handleCheck = (event, index) => {
    //    const _checked = [...activeCheckbox]
    //    _checked[index] = event.target.checked
    //    setActiveCheckbox(_checked)
    //}
    const checkComposition = composition
        ? composition.join(', ').trim()
        : composition
    const [countAdd, setCountAdd] = useState(additions)
    console.log(countAdd)
    const incrementCountAdd = (title) => {
        setCountAdd(
            countAdd.map((item) =>
                item.title === title ? { ...item, count: item.count + 1 } : item
            )
        )
    }
    const decrementCountAdd = (title) => {
        setCountAdd(
            countAdd.map((item) =>
                item.title === title ? { ...item, count: item.count - 1 } : item
            )
        )
    }
    const checkCountAdd = (title) => {
        setCountAdd(
            countAdd.map((item) =>
                item.title === title ? { ...item, check: !item.check } : item
            )
        )
    }

    //console.log(itemPizza)
    //const addedCount = cartItem ? cartItem.count : 0
    //const addedCount = 1

    //let location = useLocation()
    //console.log(countAdd.filter((item) => item.check === true))
    let [searchParams, setSearchParams] = useSearchParams()
    const handleDeleteParams = () => {
        setSearchParams([])
    }
    //const params = searchParams.get('product') || ''
    //console.log(setSearchParams)
    //et searchParams = new URLSearchParams(location.search)
    //searchParams.delete('product')
    console.log(searchParams)
    const dispatch = useDispatch()
    countAdd.filter((item) => item.check === true)
    //const adds =
    //    config.sidePrice[activeSide] +
    //    config.sizePrice[activeType] +
    //    countAdd
    //        .filter((item) => item.check === true)
    //        .reduce(function (sum, item) {
    //            return sum + item.price * item.count
    //        }, 0)
    const onClickAdd = () => {
        const adds =
            config.sidePrice[activeSide] +
            config.sizePrice[activeType] +
            countAdd
                .filter((item) => item.check === true)
                .reduce(function (sum, item) {
                    return sum + item.price * item.count
                }, 0)
        const addsWeight =
            weight * config.sideWeight[activeSide] +
            weight * config.sizeWeight[activeType] +
            countAdd
                .filter((item) => item.check === true)
                .reduce(function (sum, item) {
                    return sum + item.weight * item.count
                }, 0)
        const item = {
            id: id,
            name: name,
            weight: addsWeight,
            weightSide: config.sideWeight[activeSide],
            weightSize: config.sideWeight[activeType],
            priceSide: config.sidePrice[activeSide],
            priceSize: config.sizePrice[activeType],
            additions: countAdd.filter((item) => item.check === true),
            price: price + adds,
            image: img,
            productType: productType,
            size: config.size[activeType],
            side: config.sides[activeSide],
            count: count,
        }

        dispatch(addItemPizza(item))
        handleDeleteParams()
        console.log(item)
    }
    return (
        <>
            <div className="m-modal-pizza">
                <div
                    className={`modal-overlay`}
                    onClick={handleDeleteParams}
                ></div>
                <div className={`m-modal-pizza__card `}>
                    <div className="m-modal-pizza__inner">
                        <div className="close-wrapper">
                            <button
                                onClick={handleDeleteParams}
                                className="a-btn-close modal-pizza-close"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.0686 1.31451L1.31452 14.0685M1.31452 1.31451L14.0686 14.0685L1.31452 1.31451Z"
                                        stroke="#F2F2F2"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="top">
                            <div className="img">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className="content">
                            <div className="head-content">
                                <div className="name">{name}</div>
                                <div className="weight">
                                    {Math.round(
                                        weight * config.sideWeight[activeSide] +
                                            weight *
                                                config.sizeWeight[activeType] +
                                            countAdd
                                                .filter(
                                                    (item) =>
                                                        item.check === true
                                                )
                                                .reduce(function (sum, item) {
                                                    return (
                                                        sum +
                                                        item.weight * item.count
                                                    )
                                                }, 0)
                                    )}
                                    {''} г.
                                </div>
                            </div>

                            <div className="price">
                                {price +
                                    config.sidePrice[activeSide] +
                                    config.sizePrice[activeType]}{' '}
                                грн
                            </div>
                            <div className="desc">{checkComposition}</div>
                            <div className="title">Додадки</div>
                            <div className="items">
                                {countAdd.map(
                                    (
                                        { title, weight, price, count, check },
                                        i
                                    ) => (
                                        <div
                                            className="item"
                                            key={`${title}_${i}`}
                                        >
                                            <div className="item-top">
                                                {check}
                                                <div className="checkbox">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name={title}
                                                            checked={check}
                                                            //onChange={(
                                                            //    event
                                                            //) => {
                                                            //    handleCheck(
                                                            //        event,
                                                            //        i
                                                            //    )
                                                            //}}
                                                            onClick={() => {
                                                                checkCountAdd(
                                                                    title
                                                                )
                                                            }}
                                                            id=""
                                                        />
                                                        <span></span>
                                                        <p>
                                                            {title}

                                                            {count > 0 &&
                                                                `(${
                                                                    weight *
                                                                    count
                                                                }г.)`}
                                                        </p>
                                                    </label>
                                                </div>
                                                {count > 0 && (
                                                    <div className="item-price">
                                                        +{price * count} грн.
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className={`item-bottom ${
                                                    check ? 'show' : ''
                                                }`}
                                            >
                                                <div className="quantity e--border">
                                                    <button
                                                        onClick={() => {
                                                            decrementCountAdd(
                                                                title
                                                            )
                                                        }}
                                                        disabled={count <= 1}
                                                    >
                                                        -
                                                    </button>
                                                    {/*<input
                                                    type="text"
                                                    value={
                                                        activeCheckbox[i]
                                                            ? (countAdd[i] = 1)
                                                            : (countAdd[i] =
                                                                  undefined)
                                                    }
                                                    onChange={() => {
                                                        const value =
                                                            countAdd[i]
                                                        setCountAdd(value)
                                                    }}
                                                />*/}
                                                    <span
                                                        style={{
                                                            width: '38px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        {count}
                                                    </span>
                                                    <button
                                                        onClick={() => {
                                                            incrementCountAdd(
                                                                title
                                                            )
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="title">Обрати бортик</div>
                            <div className="sides m-product-card__options">
                                <ul>
                                    {config.sides.map((side, i) => (
                                        <li
                                            onClick={() => {
                                                setActiveSide(i)
                                            }}
                                            key={i}
                                            className={`${
                                                activeSide === i ? 'active' : ''
                                            }`}
                                        >
                                            <span className="inner">
                                                {side}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="title"></div>
                            <div className="title">Обрати розмір</div>
                            <div className="sizes m-product-card__options">
                                <ul>
                                    {config.size.map((size, i) => (
                                        <li
                                            onClick={() => {
                                                {
                                                    setActiveType(i)
                                                }
                                            }}
                                            key={i}
                                            className={
                                                activeType === i ? 'active' : ''
                                            }
                                        >
                                            <span className="inner">
                                                {size} см.
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-modal-pizza__bottom">
                    <div className="quantity e--border">
                        <button onClick={decrementCount}>-</button>
                        {/*<input
                            type="text"
                            value={count}
                            onChange={(event) => {
                                const value = Number(event.target.value)
                                setCount(value)
                            }}
                        />*/}
                        <span style={{ width: '38px', textAlign: 'center' }}>
                            {count}
                        </span>
                        <button onClick={incrementCount}>+</button>
                    </div>
                    <button
                        className="a-btn e--gold cart-add"
                        onClick={onClickAdd}
                    >
                        Додати{' '}
                        {(price +
                            config.sidePrice[activeSide] +
                            config.sizePrice[activeType] +
                            countAdd
                                .filter((item) => item.check === true)
                                .reduce(function (sum, item) {
                                    return sum + item.price * item.count
                                }, 0)) *
                            count}{' '}
                        грн
                    </button>
                </div>
            </div>
        </>
    )
}

ModalPizza.propTypes = {
    modalPizzaVisible: PropTypes.bool,
    additions: PropTypes.object,
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number,
    config: PropTypes.object,
    composition: PropTypes.array,
    img: PropTypes.string,
    productType: PropTypes.string,
}

export default ModalPizza
