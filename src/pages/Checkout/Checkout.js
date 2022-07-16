import { useSelector, useDispatch } from 'react-redux'
import {
    plusItem,
    removeItem,
    minusItem,
    removeCart,
    addPromocode,
} from '../../redux/slices/cart/cartSlice'
import axios from '../../http/axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { sendOrderPoster } from '../../redux/slices/poster/orderSlice/OrderSlice'
import ReactTextareaAutosize from 'react-textarea-autosize'

const Checkout = () => {
    const { items, totalPrice, totalCount, appliances, promocode } =
        useSelector((state) => state.cart)
    const [orderComment, setOrderComment] = useState('')
    const orderPoster = useSelector((state) => state.orderPosterSlice)
    const [sendOrder, setSendOrder] = useState(false)
    const [modalPaymentVisible, setModalPaymentVisible] = useState(false)
    const [activeClass, setActiveClass] = useState(false)
    const [requiredField, setRequiredField] = useState(false)
    const [showRequiredField, setShowRequiredField] = useState(false)
    const [activeDelivery, setActiveDelivery] = useState(2)
    const [activePayment, setActivePayment] = useState('При отриманні')
    const [address, setAddress] = useState({
        city: '',
        street: '',
        house: '',
        apartment: '',
    })

    const [order, setOrder] = useState({
        spot_id: 1,
        phone: '',
        first_name: '',
        last_name: '',
        email: '',
        service_mode: activeDelivery,
        address: 'Самовивіз',
        //payment: [{ type: 1, sum: 100, currency: 'UAH' }],
        comment: `Оплата: При отриманні - - - | - - | - - ${
            appliances != null
                ? `К-сть персон: ${appliances.personCount}; 
                К-сть звичайних палочок: ${appliances.chopsticksStandartCount}; 
                К-сть навчальних палочок: ${appliances.chopsticksTrainingCount} - - - | - - | - - `
                : ''
        } ${
            promocode.promocodeVerify
                ? `Промокод на знижку:  ${
                      promocode.promo
                  }  - | - - | -  Сума знижки: ${Math.round(
                      (totalPrice * promocode.percent) / 100
                  )} грн `
                : ''
        }`,
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
    useEffect(() => {
        if (order.first_name != '' && order.phone != '') {
            setRequiredField(true)
            setShowRequiredField(false)
        } else {
            setRequiredField(false)
        }
    }, [order.first_name, order.phone])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (items.length === 0) {
            navigate('/')
            setSendOrder(false)
        }
    }, [setSendOrder, items, navigate])

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
    //useEffect(() => {
    //    if (totalCount === 0) {
    //        dispatch(removeOrder())
    //    }
    //})
    const handleSendOrder = async (e) => {
        setSendOrder(true)
        e.preventDefault()
        dispatch(sendOrderPoster(order))

        //if (orderPoster.statusPoster === 'succes') {
        //    setSendOrder(true)
        //} else {
        //    setSendOrder(false)
        //}
    }

    useEffect(() => {
        if (orderPoster.statusPoster === 'succes' && sendOrder === true) {
            dispatch(removeCart())
            if (promocode.promocodeVerify === true) {
                const f = async () => {
                    try {
                        const response = await axios.put(
                            `api/promocode/${promocode.promo}`
                        )
                        return response
                    } catch (err) {
                        return err.response.data
                    }
                }
                const result = f()
                if (result) {
                    dispatch(addPromocode({}))
                }
            }
        }
    }, [
        dispatch,
        navigate,
        orderPoster.statusPoster,
        sendOrder,
        promocode.promo,
        promocode.promocodeVerify,
    ])

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
                                            <input
                                                type="text"
                                                value={order.first_name}
                                                required
                                                className={`${
                                                    order.first_name.length > 0
                                                        ? 'filled'
                                                        : ''
                                                }`}
                                                onChange={(e) =>
                                                    setOrder({
                                                        ...order,
                                                        first_name:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <span className="label">Ім’я</span>
                                        </label>
                                    </div>
                                    <div className="input data-list__item">
                                        <label>
                                            <input
                                                type="text"
                                                value={order.last_name}
                                                minLength={2}
                                                className={`${
                                                    order.last_name.length > 0
                                                        ? 'filled'
                                                        : ''
                                                }`}
                                                onChange={(e) =>
                                                    setOrder({
                                                        ...order,
                                                        last_name:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            <span className="label">
                                                Прізвище
                                            </span>
                                        </label>
                                    </div>
                                    <div className="input data-list__item">
                                        <label>
                                            <NumberFormat
                                                format="+## (###) ### ## ##"
                                                type="tel"
                                                mask="_"
                                                required
                                                placeholder="+38 (099) 999 99 99"
                                                value={order.phone}
                                                //className={`${
                                                //    order.phone.length > 0
                                                //        ? 'filled phone'
                                                //        : 'phone'
                                                //}`}
                                                className="filled phone"
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
                                        {orderPoster.error.error === 37 && (
                                            <p
                                                style={{
                                                    marginTop: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    color: '#f84e4e',
                                                }}
                                            >
                                                Перевірте правильність введеного
                                                номера
                                            </p>
                                        )}
                                    </div>
                                    <div className="input data-list__item">
                                        <label>
                                            <input
                                                type="email"
                                                value={order.email}
                                                className={`${
                                                    order.email.length > 0
                                                        ? 'filled'
                                                        : ''
                                                }`}
                                                onChange={(e) =>
                                                    setOrder({
                                                        ...order,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
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
                                        <li
                                            className={
                                                activeDelivery === 2
                                                    ? 'active'
                                                    : ''
                                            }
                                            onClick={() => {
                                                setActiveDelivery(2)
                                                setOrder({
                                                    ...order,
                                                    address: 'Самовивіз',
                                                })
                                            }}
                                        >
                                            Самовивіз
                                        </li>
                                        <li
                                            className={
                                                activeDelivery === 3
                                                    ? 'active'
                                                    : ''
                                            }
                                            onClick={() => {
                                                setActiveDelivery(3)
                                                setOrder({
                                                    ...order,
                                                    address: `Місто: ${address.city}, Вулиця: ${address.street}, Будинок: ${address.house}, Квартира: ${address.apartment}`,
                                                })
                                            }}
                                        >
                                            Доставка
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="delivery-methods">
                                {activeDelivery === 2 && (
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
                                            {/*<div className="data-list__item radio-btn">
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
                                        </div>*/}
                                        </div>
                                    </div>
                                )}

                                {activeDelivery === 3 && (
                                    <div className="m-ordering-item active">
                                        <div className="data-list row">
                                            <div className="m-ordering-item__title">
                                                <h3>Адреса</h3>
                                            </div>
                                            <div className="input data-list__item">
                                                <label>
                                                    <input
                                                        type="text"
                                                        value={address.city}
                                                        className={`${
                                                            address.city != ''
                                                                ? 'filled'
                                                                : ''
                                                        }`}
                                                        onChange={(e) => {
                                                            setAddress({
                                                                ...address,
                                                                city: e.target
                                                                    .value,
                                                            })
                                                            setOrder({
                                                                ...order,
                                                                address: `Місто: ${address.city}, Вулиця: ${address.street}, Будинок: ${address.house}, Квартира: ${address.apartment}`,
                                                            })
                                                        }}
                                                    />
                                                    <span className="label">
                                                        Населений пункт
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="input data-list__item col-md-6">
                                                <label>
                                                    <input
                                                        type="text"
                                                        value={address.street}
                                                        className={`${
                                                            address.street
                                                                .length > 0
                                                                ? 'filled'
                                                                : ''
                                                        }`}
                                                        onChange={(e) => {
                                                            setAddress({
                                                                ...address,
                                                                street: e.target
                                                                    .value,
                                                            })
                                                            //setOrder({
                                                            //    ...order,
                                                            //})
                                                        }}
                                                    />
                                                    <span className="label">
                                                        Вулиця
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="input data-list__item col-md-3">
                                                <label>
                                                    <input
                                                        type="text"
                                                        value={address.house}
                                                        className={`${
                                                            address.house
                                                                .length > 0
                                                                ? 'filled'
                                                                : ''
                                                        }`}
                                                        onChange={(e) => {
                                                            setAddress({
                                                                ...address,
                                                                house: e.target
                                                                    .value,
                                                            })
                                                            setOrder({
                                                                ...order,
                                                                address: `Місто: ${address.city}, Вулиця: ${address.street}, Будинок: ${address.house}, Квартира: ${address.apartment}`,
                                                            })
                                                        }}
                                                    />
                                                    <span className="label">
                                                        Будинок
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="input data-list__item col-md-3">
                                                <label>
                                                    <input
                                                        type="text"
                                                        value={
                                                            address.apartment
                                                        }
                                                        className={`${
                                                            address.apartment
                                                                .length > 0
                                                                ? 'filled'
                                                                : ''
                                                        }`}
                                                        onChange={(e) => {
                                                            setAddress({
                                                                ...address,
                                                                apartment:
                                                                    e.target
                                                                        .value,
                                                            })
                                                            setOrder({
                                                                ...order,
                                                                address: `Місто: ${address.city}, Вулиця: ${address.street}, Будинок: ${address.house}, Квартира: ${address.apartment}`,
                                                            })
                                                        }}
                                                    />
                                                    <span className="label">
                                                        Квартира
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="m-ordering-item payment-delivery">
                                <div className="m-ordering-item__title">
                                    <h3>Спосіб оплати</h3>
                                </div>
                                <div className="m-product-card__options">
                                    <ul>
                                        <li
                                            className={
                                                activePayment ===
                                                'При отриманні'
                                                    ? 'active'
                                                    : ''
                                            }
                                            onClick={() => {
                                                setActivePayment(
                                                    'При отриманні'
                                                )
                                                setOrder({
                                                    ...order,
                                                    comment: `${
                                                        orderComment != ''
                                                            ? `Коментар до замовлення: ${orderComment} - - - | - - | - - `
                                                            : ''
                                                    }  Оплата: При отриманні - - - | - - | - -  ${
                                                        appliances != null
                                                            ? `К-сть персон: ${appliances.personCount}; 
                                                            К-сть звичайних палочок: ${appliances.chopsticksStandartCount}; 
                                                            К-сть навчальних палочок: ${appliances.chopsticksTrainingCount} - - - | - - | - - `
                                                            : ''
                                                    } ${
                                                        promocode.promocodeVerify
                                                            ? `Промокод на знижку:  ${
                                                                  promocode.promo
                                                              }  - | - - | -  Сума знижки: ${Math.round(
                                                                  (totalPrice *
                                                                      promocode.percent) /
                                                                      100
                                                              )} грн `
                                                            : ''
                                                    }  `,
                                                })
                                            }}
                                        >
                                            При отриманні
                                        </li>
                                        <li
                                            className={
                                                activePayment === 'На карту'
                                                    ? 'active'
                                                    : ''
                                            }
                                            onClick={() => {
                                                setActivePayment('На карту')
                                                setOrder({
                                                    ...order,
                                                    comment: `${
                                                        orderComment != ''
                                                            ? `Коментар до замовлення: ${orderComment} - - - | - - | - - `
                                                            : ''
                                                    }  Оплата: При отриманні - - - | - - | - -  ${
                                                        appliances != null
                                                            ? `К-сть персон: ${appliances.personCount}; 
                                                            К-сть звичайних палочок: ${appliances.chopsticksStandartCount}; 
                                                            К-сть навчальних палочок: ${appliances.chopsticksTrainingCount} - - - | - - | - - `
                                                            : ''
                                                    } ${
                                                        promocode.promocodeVerify
                                                            ? `Промокод на знижку:  ${
                                                                  promocode.promo
                                                              }  - | - - | -  Сума знижки: ${Math.round(
                                                                  (totalPrice *
                                                                      promocode.percent) /
                                                                      100
                                                              )} грн `
                                                            : ''
                                                    }  `,
                                                })
                                            }}
                                        >
                                            На карту
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="m-ordering-item">
                                <div className="m-ordering-item__title">
                                    <h3>Коментар</h3>
                                </div>
                                <div className="textarea">
                                    <label>
                                        <ReactTextareaAutosize
                                            value={orderComment}
                                            className={`${
                                                orderComment != ''
                                                    ? 'filled'
                                                    : ''
                                            }`}
                                            onChange={(e) => {
                                                setOrderComment(e.target.value)
                                                setOrder({
                                                    ...order,
                                                    comment: `${
                                                        orderComment != ''
                                                            ? `Коментар до замовлення: ${orderComment} - - - | - - | - - `
                                                            : ''
                                                    }  Оплата: При отриманні - - - | - - | - -  ${
                                                        appliances != null
                                                            ? `К-сть персон: ${appliances.personCount}; 
                                                            К-сть звичайних палочок: ${appliances.chopsticksStandartCount}; 
                                                            К-сть навчальних палочок: ${appliances.chopsticksTrainingCount} - - - | - - | - - `
                                                            : ''
                                                    } ${
                                                        promocode.promocodeVerify
                                                            ? `Промокод на знижку:  ${
                                                                  promocode.promo
                                                              }  - | - - | -  Сума знижки: ${Math.round(
                                                                  (totalPrice *
                                                                      promocode.percent) /
                                                                      100
                                                              )} грн `
                                                            : ''
                                                    }  `,
                                                })
                                            }}
                                        ></ReactTextareaAutosize>
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
                                    {activePayment === 'На карту' ? (
                                        <button
                                            type="button"
                                            className="a-btn e--gold modal-payment-open"
                                            onClick={() => {
                                                if (!requiredField) {
                                                    setShowRequiredField(true)
                                                } else {
                                                    setModalPaymentVisible(
                                                        true
                                                    ),
                                                        setTimeout(() => {
                                                            setActiveClass(true)
                                                        }, 100)
                                                }
                                            }}
                                        >
                                            Оформити замовлення
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="a-btn e--gold modal-payment-open"
                                        >
                                            Оформити замовлення
                                        </button>
                                    )}
                                    {showRequiredField ? (
                                        <p
                                            style={{
                                                fontSize: '.875rem',
                                                marginTop: '.625rem',
                                                color: '#f84e4e',
                                            }}
                                        >
                                            Не заповнено поле Ім&apos;я або
                                            Номер телефону
                                        </p>
                                    ) : (
                                        ''
                                    )}
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
                                                    style={{
                                                        opacity: '0',
                                                        pointerEvent: 'none',
                                                    }}
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
                                                            {item.weight >
                                                                0 && (
                                                                <span>
                                                                    {Math.round(
                                                                        item.weight
                                                                    )}{' '}
                                                                    гр.
                                                                </span>
                                                            )}
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
                                        {promocode.promocodeVerify && (
                                            <div className="item discount">
                                                <div className="label">
                                                    Знижка
                                                </div>
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
                                        {activePayment === 'На карту' ? (
                                            <button
                                                type="button"
                                                className="a-btn e--gold modal-payment-open"
                                                onClick={() => {
                                                    if (!requiredField) {
                                                        setShowRequiredField(
                                                            true
                                                        )
                                                    } else {
                                                        setModalPaymentVisible(
                                                            true
                                                        ),
                                                            setTimeout(() => {
                                                                setActiveClass(
                                                                    true
                                                                )
                                                            }, 100)
                                                    }
                                                }}
                                            >
                                                Оформити замовлення
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="a-btn e--gold modal-payment-open"
                                            >
                                                Оформити замовлення
                                            </button>
                                        )}
                                        {showRequiredField ? (
                                            <p
                                                style={{
                                                    fontSize: '.875rem',
                                                    marginTop: '.625rem',
                                                    color: '#f84e4e',
                                                }}
                                            >
                                                Не заповнено поле Ім&apos;я або
                                                Номер телефону
                                            </p>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*{modalPaymentVisible && <div>Модальне </div>}*/}
                    {modalPaymentVisible && (
                        <>
                            <div
                                className={
                                    activeClass
                                        ? 'm-modal-payment m-modal active'
                                        : 'm-modal-payment m-modal'
                                }
                            >
                                <div className="m-modal-top">
                                    <h2 className="m-modal-title">
                                        Оплатіть замовлення
                                    </h2>
                                    <div
                                        className="close-modal close-modal-btn"
                                        onClick={() => {
                                            setActiveClass(false)
                                            setTimeout(() => {
                                                setModalPaymentVisible(false)
                                            }, 550)
                                        }}
                                    ></div>
                                </div>
                                <div className="m-modal-scroll">
                                    <div className="m-modal-content">
                                        <div className="swiper m-payment-slider">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide m-payment-card">
                                                    <div className="m-payment-card__inner">
                                                        <img
                                                            src="../img/46.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="card-number">
                                                        456456456345
                                                    </div>
                                                </div>
                                                <div className="swiper-slide m-payment-card">
                                                    <div className="m-payment-card__inner">
                                                        <img
                                                            src="../img/universalnaya_karta.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="card-number">
                                                        1234568547965235
                                                    </div>
                                                </div>
                                                <div className="swiper-slide m-payment-card">
                                                    <div className="m-payment-card__inner">
                                                        <img
                                                            src="../img/46.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="card-number">
                                                        4564564564564
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="a-slider-pagination"></div>
                                        </div>
                                        <div className="bottom pe-3 ps-3">
                                            <div className="m-cart-bottom pe-4 ps-4">
                                                <div className="m-payment-card-number">
                                                    <input
                                                        type="text"
                                                        id="card-number"
                                                        className="card-number"
                                                        value="2221123446802089"
                                                        readOnly
                                                    />
                                                    <div className="copy-card-number icon">
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 25 25"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M21.5 9.12188C21.4896 9.03002 21.4695 8.93952 21.44 8.85188V8.76188C21.3919 8.65906 21.3278 8.56455 21.25 8.48188L15.25 2.48188C15.1673 2.4041 15.0728 2.33997 14.97 2.29188C14.9402 2.28764 14.9099 2.28764 14.88 2.29188C14.7784 2.23363 14.6662 2.19623 14.55 2.18188H10.5C9.70435 2.18188 8.94129 2.49796 8.37868 3.06056C7.81607 3.62317 7.5 4.38624 7.5 5.18188V6.18188H6.5C5.70435 6.18188 4.94129 6.49796 4.37868 7.06056C3.81607 7.62317 3.5 8.38624 3.5 9.18188V19.1819C3.5 19.9775 3.81607 20.7406 4.37868 21.3032C4.94129 21.8658 5.70435 22.1819 6.5 22.1819H14.5C15.2956 22.1819 16.0587 21.8658 16.6213 21.3032C17.1839 20.7406 17.5 19.9775 17.5 19.1819V18.1819H18.5C19.2956 18.1819 20.0587 17.8658 20.6213 17.3032C21.1839 16.7406 21.5 15.9775 21.5 15.1819V9.18188C21.5 9.18188 21.5 9.18188 21.5 9.12188ZM15.5 5.59188L18.09 8.18188H16.5C16.2348 8.18188 15.9804 8.07653 15.7929 7.88899C15.6054 7.70146 15.5 7.4471 15.5 7.18188V5.59188ZM15.5 19.1819C15.5 19.4471 15.3946 19.7015 15.2071 19.889C15.0196 20.0765 14.7652 20.1819 14.5 20.1819H6.5C6.23478 20.1819 5.98043 20.0765 5.79289 19.889C5.60536 19.7015 5.5 19.4471 5.5 19.1819V9.18188C5.5 8.91667 5.60536 8.66231 5.79289 8.47478C5.98043 8.28724 6.23478 8.18188 6.5 8.18188H7.5V15.1819C7.5 15.9775 7.81607 16.7406 8.37868 17.3032C8.94129 17.8658 9.70435 18.1819 10.5 18.1819H15.5V19.1819ZM19.5 15.1819C19.5 15.4471 19.3946 15.7015 19.2071 15.889C19.0196 16.0765 18.7652 16.1819 18.5 16.1819H10.5C10.2348 16.1819 9.98043 16.0765 9.79289 15.889C9.60536 15.7015 9.5 15.4471 9.5 15.1819V5.18188C9.5 4.91667 9.60536 4.66231 9.79289 4.47478C9.98043 4.28724 10.2348 4.18188 10.5 4.18188H13.5V7.18188C13.5 7.97753 13.8161 8.7406 14.3787 9.30321C14.9413 9.86581 15.7044 10.1819 16.5 10.1819H19.5V15.1819Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
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
                                                {promocode.promocodeVerify && (
                                                    <div className="item discount">
                                                        <div className="label">
                                                            Знижка
                                                        </div>
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
                                                <button
                                                    type="submit"
                                                    className="a-btn e--gold"
                                                >
                                                    Готово
                                                </button>
                                                <p className="text-message mt-3">
                                                    Після оплати з вами
                                                    звяжеться наш менеджер, для
                                                    підтвердження замовлення
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    setActiveClass(false)
                                    setTimeout(() => {
                                        setModalPaymentVisible(false)
                                    }, 550)
                                }}
                                className={
                                    activeClass
                                        ? 'm-modal-payment-overlay active'
                                        : 'm-modal-payment-overlay'
                                }
                            ></div>
                        </>
                    )}
                </form>
            </section>
        </>
    )
}

export default Checkout
