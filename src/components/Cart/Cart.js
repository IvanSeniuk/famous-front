import CartItem from './CartItem'
import CartEmpty from './CartEmpty/CartEmpty'
import AdditionCartItem from './AdditionCartItem/AdditionCartItem'
//import ProductsObj from '../../ProductsArray/ProductsObj.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from '../../http/axios'

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'
// swiper core styles
import 'swiper/swiper.min.css'
// modules styles
import 'swiper/components/navigation/navigation.min.css'
import { toggleCart } from '../../redux/slices/ui/uiSlice'
import { addAppliances, addPromocode } from '../../redux/slices/cart/cartSlice'

SwiperCore.use([Navigation])

const Cart = () => {
    const { items, totalPrice, totalCount, promocode } = useSelector(
        (state) => state.cart
    )
    const categories = useSelector((state) => state.categoriesPoster.items)
    const { cartVisible } = useSelector((state) => state.ui)
    const products = useSelector((state) => state.productsPoster)
    const dispatch = useDispatch()

    const [promocodeChange, setPromocodeChange] = useState('')
    const checkPromo = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`api/promocode/${promocodeChange}`)
            if (response.data === null) {
                setPromocodeChange('Не правильний промокод')
                setTimeout(() => {
                    setPromocodeChange('')
                }, 2000)
            } else {
                dispatch(
                    addPromocode({
                        promo: response.data.title,
                        percent: response.data.promo,
                        promocodeVerify: true,
                    })
                )
            }
            console.log(response)
        } catch (err) {
            return err.response.data
        }
    }

    const [appliances, setApplances] = useState({
        personCount: 1,
        chopsticksStandartCount: 1,
        chopsticksTrainingCount: 0,
    })
    const onClickPlusPerson = () => {
        setApplances({ ...appliances, personCount: appliances.personCount + 1 })
    }
    const onClickMinusPerson = () => {
        setApplances({ ...appliances, personCount: appliances.personCount - 1 })
    }
    const onClickPlusChopsticksStandart = () => {
        setApplances({
            ...appliances,
            chopsticksStandartCount: appliances.chopsticksStandartCount + 1,
        })
    }
    const onClickMinusChopsticksStandart = () => {
        setApplances({
            ...appliances,
            chopsticksStandartCount: appliances.chopsticksStandartCount + 1,
        })
    }
    const onClickPlusChopsticksTraining = () => {
        setApplances({
            ...appliances,
            chopsticksTrainingCount: appliances.chopsticksTrainingCount + 1,
        })
    }
    const onClickMinusChopsticksTraining = () => {
        setApplances({
            ...appliances,
            chopsticksTrainingCount: appliances.chopsticksTrainingCount + 1,
        })
    }
    const findSushiAddition = categories
        .filter(
            (obj) =>
                obj.category_id === '2' ||
                obj.parent_category === '2' ||
                obj.category_id === '3' ||
                obj.parent_category === '3'
        )
        .map((item) => item.category_id)
    const chopsticks = items.find((item) =>
        findSushiAddition.find((p) => item.menu_category_id === p)
    )
    useEffect(() => {
        chopsticks
            ? dispatch(addAppliances(appliances))
            : dispatch(addAppliances(null))
    }, [appliances, chopsticks, dispatch])

    useEffect(() => {
        let cartBottomFixed = document.querySelector('.m-cart-bottom__fixed')
        let cartScroll = document.querySelector('.m-cart-scroll')
        let cartContent = document.querySelector('.m-cart-content')
        let cart = document.querySelector('.o-cart')
        let cartTop = document.querySelector('.m-cart-top')
        let cartBottom = document.querySelector('.o-cart .m-cart-bottom')
        if (
            cartContent &&
            cartBottomFixed &&
            cartScroll &&
            cart &&
            cartTop &&
            cartBottom
        ) {
            if (cartContent.clientHeight < cartScroll.clientHeight) {
                cartBottomFixed.classList.remove('fixed')
            }
            cartScroll.addEventListener('scroll', () => {
                var scroll = cartScroll.scrollTop + cart.clientHeight
                if (
                    scroll >
                    cartContent.clientHeight +
                        cartTop.clientHeight -
                        cartBottom.clientHeight +
                        cartBottom.clientHeight / 2 +
                        60
                ) {
                    cartBottomFixed.classList.remove('fixed')
                } else {
                    cartBottomFixed.classList.add('fixed')
                }
            })
        }
    })
    return (
        <>
            <div className={`o-cart ${cartVisible ? 'active' : ''}`}>
                {items.length > 0 ? (
                    <>
                        <div className="m-cart-top">
                            <div className="m-cart-title">
                                <div className="title">
                                    Корзина{' '}
                                    <span className="count">
                                        ({totalCount})
                                    </span>
                                </div>
                            </div>
                            <button
                                className="a-btn-close cart-close"
                                onClick={() => {
                                    dispatch(toggleCart())
                                }}
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
                        <div className="m-cart-scroll">
                            <div className="m-cart-content">
                                <div className="m-cart-list">
                                    {items.map((item, i) => (
                                        <CartItem
                                            key={i}
                                            count={item.count}
                                            image={item.image}
                                            indexCart={i}
                                            product_id={item.product_id}
                                            weight={item.weight}
                                            product_name={item.product_name}
                                            price={item.price}
                                            size={item.size}
                                            side={item.side}
                                            additions={item.additions}
                                        />
                                    ))}
                                </div>
                                <div className="m-additions">
                                    <h3 className="m-additions-title">
                                        Ви забули напої
                                    </h3>
                                    <Swiper
                                        className="m-additions-slider swiper"
                                        style={{ overflow: 'visible' }}
                                        speed={400}
                                        spaceBetween={16}
                                        slidesPerView={2.3}
                                        navigation={{
                                            nextEl: '.m-additions-next',
                                            prevEl: '.m-additions-prev',
                                        }}
                                        breakpoints={{
                                            768: {
                                                spaceBetween: 22,
                                                slidesPerView: 2.4,
                                            },
                                        }}
                                        modules={[Navigation]}
                                    >
                                        {products.items
                                            ?.filter(
                                                (item) =>
                                                    item.category_name ===
                                                    'Напої'
                                            )
                                            .map((drink) => (
                                                <SwiperSlide
                                                    className="swiper-slide m-additions-item"
                                                    key={drink.product_id}
                                                >
                                                    <AdditionCartItem
                                                        product_id={
                                                            drink.product_id
                                                        }
                                                        menu_category_id={
                                                            drink.menu_category_id
                                                        }
                                                        image={
                                                            drink.photo_origin
                                                        }
                                                        product_name={
                                                            drink.product_name
                                                        }
                                                        weight={drink.out}
                                                        price={
                                                            drink.price['1'] /
                                                            100
                                                        }
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        <div className="m-additions-prev">
                                            <svg
                                                width="58"
                                                height="58"
                                                viewBox="0 0 58 58"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="58"
                                                    height="58"
                                                    rx="29"
                                                    fill="url(#paint0_linear_2_5256)"
                                                />
                                                <g clipPath="url(#clip0_2_5256)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M84.0625 29.5C84.0625 29.2431 83.9604 28.9967 83.7788 28.815C83.5971 28.6333 83.3507 28.5313 83.0938 28.5313L20.2448 28.5313L26.3421 22.4359C26.4322 22.3458 26.5037 22.2389 26.5524 22.1212C26.6011 22.0035 26.6262 21.8774 26.6262 21.75C26.6262 21.6226 26.6011 21.4965 26.5524 21.3788C26.5037 21.2611 26.4322 21.1542 26.3421 21.0641C26.2521 20.9741 26.1451 20.9026 26.0275 20.8539C25.9098 20.8051 25.7836 20.78 25.6563 20.78C25.5289 20.78 25.4027 20.8051 25.2851 20.8539C25.1674 20.9026 25.0605 20.9741 24.9704 21.0641L17.2204 28.8141C17.1302 28.9041 17.0586 29.011 17.0098 29.1287C16.9609 29.2464 16.9358 29.3726 16.9358 29.5C16.9358 29.6274 16.9609 29.7536 17.0098 29.8713C17.0586 29.989 17.1302 30.0959 17.2204 30.1859L24.9704 37.9359C25.0605 38.026 25.1674 38.0974 25.2851 38.1461C25.4027 38.1949 25.5289 38.22 25.6563 38.22C25.7836 38.22 25.9098 38.1949 26.0275 38.1461C26.1451 38.0974 26.2521 38.026 26.3421 37.9359C26.4322 37.8458 26.5037 37.7389 26.5524 37.6212C26.6011 37.5035 26.6262 37.3774 26.6262 37.25C26.6262 37.1226 26.6011 36.9965 26.5524 36.8788C26.5037 36.7611 26.4322 36.6542 26.3421 36.5641L20.2448 30.4688L83.0938 30.4688C83.3507 30.4688 83.5971 30.3667 83.7788 30.185C83.9604 30.0033 84.0625 29.7569 84.0625 29.5Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_2_5256"
                                                        x1="-82.4797"
                                                        y1="31.3455"
                                                        x2="74.2446"
                                                        y2="115.284"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#AF7912" />
                                                        <stop
                                                            offset="0.0193"
                                                            stopColor="#AD7712"
                                                        />
                                                        <stop
                                                            offset="0.1826"
                                                            stopColor="#A26914"
                                                        />
                                                        <stop
                                                            offset="0.3236"
                                                            stopColor="#9E6414"
                                                        />
                                                        <stop
                                                            offset="0.389"
                                                            stopColor="#A36C19"
                                                        />
                                                        <stop
                                                            offset="0.4886"
                                                            stopColor="#B28126"
                                                        />
                                                        <stop
                                                            offset="0.6092"
                                                            stopColor="#C9A33B"
                                                        />
                                                        <stop
                                                            offset="0.707"
                                                            stopColor="#E0C44F"
                                                        />
                                                        <stop
                                                            offset="0.8"
                                                            stopColor="#DEC14D"
                                                        />
                                                        <stop
                                                            offset="0.8661"
                                                            stopColor="#D8B847"
                                                        />
                                                        <stop
                                                            offset="0.924"
                                                            stopColor="#CEA83C"
                                                        />
                                                        <stop
                                                            offset="0.9768"
                                                            stopColor="#BF922D"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stopColor="#B78624"
                                                        />
                                                    </linearGradient>
                                                    <clipPath id="clip0_2_5256">
                                                        <rect
                                                            width="27"
                                                            height="31"
                                                            fill="white"
                                                            transform="translate(15 14)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="m-additions-next">
                                            <svg
                                                width="58"
                                                height="58"
                                                viewBox="0 0 58 58"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    x="58"
                                                    y="58"
                                                    width="58"
                                                    height="58"
                                                    rx="29"
                                                    transform="rotate(180 58 58)"
                                                    fill="url(#paint0_linear_2_5201)"
                                                />
                                                <g clipPath="url(#clip0_2_5201)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M-26.0625 28.5C-26.0625 28.7569 -25.9604 29.0033 -25.7788 29.185C-25.5971 29.3667 -25.3507 29.4688 -25.0938 29.4688L37.7552 29.4687L31.6579 35.5641C31.5678 35.6542 31.4963 35.7611 31.4476 35.8788C31.3989 35.9965 31.3738 36.1226 31.3738 36.25C31.3738 36.3774 31.3989 36.5035 31.4476 36.6212C31.4963 36.7389 31.5678 36.8458 31.6579 36.9359C31.7479 37.0259 31.8549 37.0974 31.9725 37.1461C32.0902 37.1949 32.2164 37.22 32.3437 37.22C32.4711 37.22 32.5973 37.1949 32.7149 37.1461C32.8326 37.0974 32.9395 37.0259 33.0296 36.9359L40.7796 29.1859C40.8698 29.0959 40.9414 28.989 40.9902 28.8713C41.0391 28.7536 41.0642 28.6274 41.0642 28.5C41.0642 28.3726 41.0391 28.2464 40.9902 28.1287C40.9414 28.011 40.8698 27.9041 40.7796 27.8141L33.0296 20.0641C32.9395 19.974 32.8326 19.9026 32.7149 19.8539C32.5973 19.8051 32.4711 19.78 32.3437 19.78C32.2164 19.78 32.0902 19.8051 31.9725 19.8539C31.8549 19.9026 31.7479 19.974 31.6579 20.0641C31.5678 20.1542 31.4963 20.2611 31.4476 20.3788C31.3989 20.4965 31.3738 20.6226 31.3738 20.75C31.3738 20.8774 31.3989 21.0035 31.4476 21.1212C31.4963 21.2389 31.5678 21.3458 31.6579 21.4359L37.7552 27.5312L-25.0938 27.5313C-25.3507 27.5313 -25.5971 27.6333 -25.7788 27.815C-25.9604 27.9967 -26.0625 28.2431 -26.0625 28.5Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_2_5201"
                                                        x1="-24.4797"
                                                        y1="89.3455"
                                                        x2="132.245"
                                                        y2="173.284"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#AF7912" />
                                                        <stop
                                                            offset="0.0193"
                                                            stopColor="#AD7712"
                                                        />
                                                        <stop
                                                            offset="0.1826"
                                                            stopColor="#A26914"
                                                        />
                                                        <stop
                                                            offset="0.3236"
                                                            stopColor="#9E6414"
                                                        />
                                                        <stop
                                                            offset="0.389"
                                                            stopColor="#A36C19"
                                                        />
                                                        <stop
                                                            offset="0.4886"
                                                            stopColor="#B28126"
                                                        />
                                                        <stop
                                                            offset="0.6092"
                                                            stopColor="#C9A33B"
                                                        />
                                                        <stop
                                                            offset="0.707"
                                                            stopColor="#E0C44F"
                                                        />
                                                        <stop
                                                            offset="0.8"
                                                            stopColor="#DEC14D"
                                                        />
                                                        <stop
                                                            offset="0.8661"
                                                            stopColor="#D8B847"
                                                        />
                                                        <stop
                                                            offset="0.924"
                                                            stopColor="#CEA83C"
                                                        />
                                                        <stop
                                                            offset="0.9768"
                                                            stopColor="#BF922D"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stopColor="#B78624"
                                                        />
                                                    </linearGradient>
                                                    <clipPath id="clip0_2_5201">
                                                        <rect
                                                            width="27"
                                                            height="31"
                                                            fill="white"
                                                            transform="translate(43 44) rotate(180)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </Swiper>
                                    {chopsticks ? (
                                        <div className="m-additions-bottom">
                                            <div className="item">
                                                <div className="label">
                                                    Кількість осіб
                                                </div>
                                                <div className="value">
                                                    <div className="quantity e--border">
                                                        {appliances.personCount <
                                                        1 ? (
                                                            <button disabled>
                                                                +
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={
                                                                    onClickMinusPerson
                                                                }
                                                            >
                                                                -
                                                            </button>
                                                        )}
                                                        {/*<input type="text" value={count} onChange={count} />*/}
                                                        <span
                                                            style={{
                                                                width: '38px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {
                                                                appliances.personCount
                                                            }
                                                        </span>
                                                        <button
                                                            onClick={
                                                                onClickPlusPerson
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="label">
                                                    Палички звичайні
                                                </div>
                                                <div className="value">
                                                    <div className="quantity e--border">
                                                        {appliances.chopsticksStandartCount <
                                                        1 ? (
                                                            <button disabled>
                                                                +
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={
                                                                    onClickMinusChopsticksStandart
                                                                }
                                                            >
                                                                -
                                                            </button>
                                                        )}
                                                        {/*<input type="text" value={count} onChange={count} />*/}
                                                        <span
                                                            style={{
                                                                width: '38px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {
                                                                appliances.chopsticksStandartCount
                                                            }
                                                        </span>
                                                        <button
                                                            onClick={
                                                                onClickPlusChopsticksStandart
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="label">
                                                    Палички навчальні
                                                </div>
                                                <div className="value">
                                                    <div className="quantity e--border">
                                                        {appliances.chopsticksTrainingCount <
                                                        1 ? (
                                                            <button disabled>
                                                                +
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={
                                                                    onClickMinusChopsticksTraining
                                                                }
                                                            >
                                                                -
                                                            </button>
                                                        )}
                                                        {/*<input type="text" value={count} onChange={count} />*/}
                                                        <span
                                                            style={{
                                                                width: '38px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {
                                                                appliances.chopsticksTrainingCount
                                                            }
                                                        </span>
                                                        <button
                                                            onClick={
                                                                onClickPlusChopsticksTraining
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {/*{items.find((obj) =>
                       obj.productType === ('sushi' || 'sets') ? (
                           <div className="m-additions-bottom">
                               <div className="item">
                                   <div className="label">
                                       Кількість осіб
                                   </div>
                                   <div className="value">
                                       <div className="quantity e--border">
                                           <button>-</button>
                                           <input type="text" value="1" />
                                           <button>+</button>
                                       </div>
                                   </div>
                               </div>
                               <div className="item">
                                   <div className="label">
                                       Палички звичайні
                                   </div>
                                   <div className="value">
                                       <div className="quantity e--border">
                                           <button>-</button>
                                           <input type="text" value="1" />
                                           <button>+</button>
                                       </div>
                                   </div>
                               </div>
                               <div className="item">
                                   <div className="label">
                                       Палички навчальні
                                   </div>
                                   <div className="value">
                                       <div className="quantity e--border">
                                           <button>-</button>
                                           <input type="text" value="1" />
                                           <button>+</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       ) : (
                           ''
                       )
                   )}*/}
                                </div>
                                <div className="m-cart-bottom">
                                    <div className="m-cart-bottom__fixed fixed">
                                        <div className="value">
                                            {totalPrice} грн
                                        </div>

                                        <Link
                                            onClick={() => {
                                                dispatch(toggleCart())
                                            }}
                                            to="/checkout"
                                            className="a-btn e--gold"
                                        >
                                            Оформити замовлення
                                        </Link>
                                    </div>
                                    <form
                                        className="promocode"
                                        onSubmit={checkPromo}
                                    >
                                        {promocode.promocodeVerify ? (
                                            <input
                                                className="promo"
                                                type="text"
                                                value={`Знижка ${promocode.percent}%`}
                                                placeholder="Промокод"
                                                readOnly
                                            />
                                        ) : (
                                            <input
                                                className="promo"
                                                type="text"
                                                value={promocodeChange}
                                                placeholder="Промокод"
                                                onChange={(e) =>
                                                    setPromocodeChange(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        )}

                                        {promocodeChange === '' ||
                                        promocode.promocodeVerify ? (
                                            <button
                                                disabled
                                                className="promocode-link"
                                            >
                                                Застосувати
                                            </button>
                                        ) : (
                                            <button className="promocode-link">
                                                Застосувати
                                            </button>
                                        )}
                                    </form>
                                    <div className="item sum">
                                        <div className="label">
                                            <span className="count">
                                                {totalCount}{' '}
                                            </span>
                                            {(() => {
                                                if (
                                                    totalCount ===
                                                    (1 ||
                                                        21 ||
                                                        31 ||
                                                        41 ||
                                                        51 ||
                                                        61 ||
                                                        71 ||
                                                        81 ||
                                                        91 ||
                                                        101 ||
                                                        121)
                                                ) {
                                                    return 'Товар'
                                                } else if (
                                                    totalCount ===
                                                    (2 ||
                                                        3 ||
                                                        4 ||
                                                        22 ||
                                                        23 ||
                                                        24 ||
                                                        32 ||
                                                        33 ||
                                                        34 ||
                                                        42 ||
                                                        43 ||
                                                        44)
                                                ) {
                                                    return 'Товари'
                                                } else {
                                                    return 'Товарів'
                                                }
                                            })()}
                                            {/*{if (totalCount === 1|| 21||31||41||51||61||71||81||91||101||121){'Товар'} else if(totalCount===2||3||4||22|23||24||32||33||34||42||43||44) {'Товар'} else{'Товарів'}}*/}
                                        </div>
                                        <div className="value">
                                            {totalPrice} грн
                                        </div>
                                    </div>
                                    {promocode.promocodeVerify && (
                                        <div className="item discount">
                                            <div className="label">Знижка</div>
                                            <div className="value">
                                                -{' '}
                                                {Math.round(
                                                    (totalPrice *
                                                        promocode.percent) /
                                                        100
                                                )}{' '}
                                                грн
                                            </div>
                                        </div>
                                    )}

                                    <div className="item total">
                                        <div className="label">
                                            Сума замовлення
                                        </div>

                                        {promocode.percent &&
                                        promocode.promocodeVerify ? (
                                            <div className="value">
                                                {Math.round(
                                                    totalPrice -
                                                        (totalPrice *
                                                            promocode.percent) /
                                                            100
                                                )}{' '}
                                                грн
                                            </div>
                                        ) : (
                                            <div className="value">
                                                {totalPrice} грн
                                            </div>
                                        )}
                                    </div>
                                    <Link
                                        onClick={() => {
                                            dispatch(toggleCart())
                                        }}
                                        to="/checkout"
                                        className="a-btn e--gold"
                                    >
                                        Оформити замовлення
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <CartEmpty />
                )}
            </div>
            <div
                className={`overlay ${cartVisible ? 'active' : ''}`}
                onClick={() => {
                    dispatch(toggleCart())
                }}
            ></div>
        </>
    )
}

export default Cart
