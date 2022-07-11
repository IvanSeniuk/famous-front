import { useSelector, useDispatch } from 'react-redux'
import {
    plusItem,
    removeItem,
    minusItem,
} from '../../redux/slices/cart/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { sendOrderPoster } from '../../redux/slices/poster/orderSlice/OrderSlice'

const Checkout = () => {
    const { items, totalPrice, totalCount } = useSelector((state) => state.cart)

    const [order, setOrder] = useState({
        spot_id: 1,
        phone: '',
        service_mode: 3,
        products: items.map((item) => ({
            product_id: item.product_id,
            count: item.count,
            modification: item.modifications
                ? item.modifications.map((addition) => ({
                      m: addition.dish_modification_id,
                      a: addition.count,
                  }))
                : null,
        })),
    })

    console.log(order, setOrder)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (items.length === 0) {
            navigate('/')
        }
    })

    const onClickMinus = (item, indexCart) => {
        const itemMinus = {
            product_id: item.product_id,
            indexCart: indexCart,
        }
        dispatch(minusItem(itemMinus))
    }
    const onClickPlus = (item, indexCart) => {
        const itemPlus = {
            product_id: item.product_id,
            indexCart: indexCart,
        }
        dispatch(plusItem(itemPlus))
    }
    const onClickRemove = (item, indexCart) => {
        const itemRemove = {
            product_id: item.product_id,
            indexCart: indexCart,
        }
        dispatch(removeItem(itemRemove))
    }

    const handleSendOrder = async (e) => {
        e.preventDefault()

        dispatch(sendOrderPoster(order))
    }
    return (
        <>
            <div className="m-breadcrumbs">
                <div className="container">
                    <nav className="m-breadcrumbs-list">
                        <Link to="/">Головна</Link>
                        Оформлення замовлення
                    </nav>
                </div>
            </div>
            <section className="o-ordering">
                <form className="container" onSubmit={handleSendOrder}>
                    <div className="m-section-top">
                        <div className="a-section-title">
                            <h1>Оформлення замовлення</h1>
                        </div>
                    </div>
                    <div className="row m-ordering-row flex-column-reverse flex-md-row justify-content-md-between pb-md-4 pb-xl-5">
                        <div className="col-12 col-md-6 m-ordering-left">
                            <div className="m-ordering-item personal">
                                <div className="m-ordering-item__title">
                                    <h3>Контактні данні</h3>
                                </div>
                                <div className="data-list">
                                    <div className="input data-list__item">
                                        <label>
                                            <input type="text" />
                                            <span className="label">Ім’я</span>
                                        </label>
                                    </div>
                                    <div className="input data-list__item">
                                        <label>
                                            <input type="text" />
                                            <span className="label">
                                                Прізвище
                                            </span>
                                        </label>
                                    </div>
                                    <div className="input data-list__item">
                                        <label>
                                            <input
                                                type="text"
                                                value={order.phone}
                                                className={`${
                                                    order.phone.length > 0
                                                        ? 'filled phone'
                                                        : 'phone'
                                                }`}
                                                onChange={(e) =>
                                                    setOrder({
                                                        ...order,
                                                        phone: e.target.value,
                                                    })
                                                }
                                            />
                                            <span className="label">
                                                Номер телефону
                                            </span>
                                        </label>
                                    </div>
                                    <div className="input data-list__item">
                                        <label>
                                            <input type="email" />
                                            <span className="label">Email</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="m-ordering-item">
                                <div className="m-ordering-item__title">
                                    <h3>Спосіб доставки</h3>
                                </div>
                                <div className="m-product-card__options delivery">
                                    <ul>
                                        <li className="active">Самовивіз</li>
                                        <li>Доставка</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="delivery-methods">
                                <div className="m-ordering-item active">
                                    <div className="data-list">
                                        <div className="m-ordering-item__title">
                                            <h3>Адреси закладів</h3>
                                        </div>
                                        <div className="data-list__item radio-btn">
                                            <label className="me-sm-2 delivery-btn">
                                                <input
                                                    type="radio"
                                                    name="delivery"
                                                    checked
                                                />
                                                <span></span>
                                                <p className="a-text">
                                                    Вулиця 1256
                                                </p>
                                            </label>
                                        </div>
                                        <div className="data-list__item radio-btn">
                                            <label className="me-sm-2 delivery-btn">
                                                <input
                                                    type="radio"
                                                    name="delivery"
                                                />
                                                <span></span>
                                                <p className="a-text">
                                                    Вулиця 695215
                                                </p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-ordering-item">
                                    <div className="data-list row">
                                        <div className="m-ordering-item__title">
                                            <h3>Адреса</h3>
                                        </div>
                                        <div className="input data-list__item">
                                            <label>
                                                <input type="text" />
                                                <span className="label">
                                                    Населений пункт
                                                </span>
                                            </label>
                                        </div>
                                        <div className="input data-list__item col-md-6">
                                            <label>
                                                <input type="text" />
                                                <span className="label">
                                                    Вулиця
                                                </span>
                                            </label>
                                        </div>
                                        <div className="input data-list__item col-md-3">
                                            <label>
                                                <input type="text" />
                                                <span className="label">
                                                    Будинок
                                                </span>
                                            </label>
                                        </div>
                                        <div className="input data-list__item col-md-3">
                                            <label>
                                                <input type="text" />
                                                <span className="label">
                                                    Квартира
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-ordering-item payment-delivery">
                                <div className="m-ordering-item__title">
                                    <h3>Спосіб оплати</h3>
                                </div>
                                <div className="m-product-card__options">
                                    <ul>
                                        <li className="active">
                                            При отриманні
                                        </li>
                                        <li>На карту</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="m-ordering-item">
                                <div className="m-ordering-item__title">
                                    <h3>Коментар</h3>
                                </div>
                                <div className="textarea">
                                    <label>
                                        <textarea></textarea>
                                        <span className="label">
                                            Коментар до замовлення
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="m-payment">
                                <div className="m-cart-bottom">
                                    <div className="item sum">
                                        <div className="label">
                                            <span className="count">12 </span>
                                            Товарів
                                        </div>
                                        <div className="value">1 462грн</div>
                                    </div>
                                    <div className="item discount">
                                        <div className="label">Знижка</div>
                                        <div className="value">-54грн</div>
                                    </div>
                                    <div className="item total">
                                        <div className="label">
                                            Сума замовлення
                                        </div>
                                        <div className="value">11 500грн</div>
                                    </div>
                                    <a
                                        href="javascript:;"
                                        className="a-btn e--gold modal-payment-open"
                                    >
                                        Оформити замовлення
                                    </a>
                                </div>
                            </div>
                            {/*<div className="checkbox">
					<label>
						<input type="checkbox" />
						<span></span>
						Не телефонувати для підтвердження замовлення
					</label>
				</div>*/}
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 m-ordering-right pb-4 pb-md-0">
                            <div className="m-ordering-right__inner">
                                <div className="m-ordering-cart">
                                    <div className="m-ordering-item__title">
                                        <h3>Замовлення</h3>
                                    </div>
                                    <div className="m-ordering-cart__list">
                                        {items.map((item, indexCart) => (
                                            <div
                                                className="m-cart-item"
                                                key={item.product_id}
                                            >
                                                <div
                                                    className="delete-cart-item"
                                                    onClick={() =>
                                                        onClickRemove(
                                                            item,
                                                            indexCart
                                                        )
                                                    }
                                                >
                                                    <svg
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.0575 9.00002L14.7825 4.28252C14.9237 4.14129 15.003 3.94974 15.003 3.75002C15.003 3.55029 14.9237 3.35874 14.7825 3.21752C14.6412 3.07629 14.4497 2.99695 14.25 2.99695C14.0502 2.99695 13.8587 3.07629 13.7175 3.21752L8.99995 7.94252L4.28245 3.21752C4.14123 3.07629 3.94968 2.99695 3.74995 2.99695C3.55023 2.99695 3.35868 3.07629 3.21745 3.21752C3.07623 3.35874 2.99689 3.55029 2.99689 3.75002C2.99689 3.94974 3.07623 4.14129 3.21745 4.28252L7.94245 9.00002L3.21745 13.7175C3.14716 13.7872 3.09136 13.8702 3.05329 13.9616C3.01521 14.053 2.99561 14.151 2.99561 14.25C2.99561 14.349 3.01521 14.4471 3.05329 14.5384C3.09136 14.6298 3.14716 14.7128 3.21745 14.7825C3.28718 14.8528 3.37013 14.9086 3.46152 14.9467C3.55292 14.9848 3.65095 15.0044 3.74995 15.0044C3.84896 15.0044 3.94699 14.9848 4.03839 14.9467C4.12978 14.9086 4.21273 14.8528 4.28245 14.7825L8.99995 10.0575L13.7175 14.7825C13.7872 14.8528 13.8701 14.9086 13.9615 14.9467C14.0529 14.9848 14.1509 15.0044 14.25 15.0044C14.349 15.0044 14.447 14.9848 14.5384 14.9467C14.6298 14.9086 14.7127 14.8528 14.7825 14.7825C14.8527 14.7128 14.9085 14.6298 14.9466 14.5384C14.9847 14.4471 15.0043 14.349 15.0043 14.25C15.0043 14.151 14.9847 14.053 14.9466 13.9616C14.9085 13.8702 14.8527 13.7872 14.7825 13.7175L10.0575 9.00002Z"
                                                            fill="#878787"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="m-cart-item__inner">
                                                    <div className="m-cart-item__img">
                                                        <div className="img">
                                                            <img
                                                                src={
                                                                    process.env
                                                                        .REACT_APP_POSTER_API_URL +
                                                                    item.image
                                                                }
                                                                alt={
                                                                    item.product_name
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item__desc">
                                                        <div className="m-cart-item__title">
                                                            {item.product_name}
                                                        </div>
                                                        {item.side ||
                                                        item.size ? (
                                                            <div className="weight">
                                                                {item.side
                                                                    ? `${item.side.name} `
                                                                    : ''}{' '}
                                                                {item.size
                                                                    ? `${item.size.name}`
                                                                    : ''}
                                                            </div>
                                                        ) : (
                                                            ''
                                                        )}

                                                        {item.additions &&
                                                        item.additions.length >
                                                            0 ? (
                                                            <div className="weight">
                                                                {item.additions.map(
                                                                    (
                                                                        itemAdd
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                itemAdd.dish_modification_id
                                                                            }
                                                                        >
                                                                            +
                                                                            {
                                                                                itemAdd.name
                                                                            }
                                                                            {itemAdd.count >
                                                                            1
                                                                                ? `(${itemAdd.count}x) `
                                                                                : ' '}
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                        ) : (
                                                            ''
                                                        )}
                                                        <div className="weight">
                                                            {item.weight} гр.
                                                        </div>

                                                        <div className="a-product-card__price">
                                                            <div className="price">
                                                                {/*<span className="price-sale">
                                                                    108 &#8372;
                                                                </span>
                                                                <span className="price-old">
                                                                    324 &#8372;
                                                                </span>*/}
                                                                {item.price} грн
                                                            </div>
                                                        </div>
                                                        <div className="quantity e--border">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    onClickMinus(
                                                                        item,
                                                                        indexCart
                                                                    )
                                                                }
                                                            >
                                                                -
                                                            </button>
                                                            {/*<input type="text" value={count} onChange={count} />*/}
                                                            <span
                                                                style={{
                                                                    width: '38px',
                                                                    textAlign:
                                                                        'center',
                                                                }}
                                                            >
                                                                {item.count}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    onClickPlus(
                                                                        item,
                                                                        indexCart
                                                                    )
                                                                }
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="m-payment">
                                    <div className="m-cart-bottom">
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
                                                        return 'товар'
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
                                                        return 'товари'
                                                    } else {
                                                        return 'товарів'
                                                    }
                                                })()}
                                            </div>
                                            <div className="value">
                                                {totalPrice} грн
                                            </div>
                                        </div>
                                        <div className="item discount">
                                            <div
                                                className="label"
                                                //onClick={() => {
                                                //    setOrder({
                                                //        ...order,
                                                //        products: items.map(
                                                //            (item) => [
                                                //                ...item,
                                                //                modification.push(
                                                //                    {
                                                //                        m: 1,
                                                //                        a: 2,
                                                //                    }
                                                //                ),
                                                //            ]
                                                //        ),
                                                //    })
                                                //    console.log(order, setOrder)
                                                //}}
                                            >
                                                Знижка
                                            </div>
                                            <div className="value">-54грн</div>
                                        </div>
                                        <div className="item total">
                                            <div className="label">
                                                Сума замовлення
                                            </div>
                                            <div className="value">
                                                {totalPrice} грн
                                            </div>
                                        </div>
                                        <button
                                            //onClick={() => {
                                            //    setOrder({
                                            //        ...order,
                                            //        products: items.map(
                                            //            (item) => ({
                                            //                ...item.modification,
                                            //                modification: [
                                            //                    ...item.modification,
                                            //                    { m: 1, a: 2 },
                                            //                ],
                                            //            })
                                            //        ),
                                            //    })
                                            //    console.log(order, setOrder)
                                            //}}
                                            className="a-btn e--gold modal-payment-open"
                                        >
                                            Оформити замовлення
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Checkout
