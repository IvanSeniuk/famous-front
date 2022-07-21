import { Link, NavLink, useLocation } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductCardPizza from '../../components/ProductCard/ProductCardPizza'
import Moment from 'react-moment'
import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { getOrdersPoster } from '../../redux/slices/poster/orderSlice/OrderSlice'
import { fetchProductsPoster } from '../../redux/slices/poster/productsSlice/ProductsSlice'
//import axios from '../../http/axios'
import { changeUser } from '../../redux/slices/auth/authSlice'

const Profile = () => {
    const auth = useSelector((state) => state.auth)
    const wishlist = useSelector((state) => state.wishlist.items)
    const isMountedWish = useRef(false)
    useEffect(() => {
        if (isMountedWish.current) {
            const json = JSON.stringify(wishlist)
            localStorage.setItem('wishlist', json)
        }
        isMountedWish.current = true
    }, [wishlist])
    const dispatch = useDispatch()
    const [passwordRepeat, setPasswordRepeat] = useState({
        passwordRepeat: '',
        statusPassword: true,
    })
    const [passwordShow, setPasswordShow] = useState({
        //oldPassword: false,
        newPassword: false,
        repeatPassword: false,
    })
    const [userChange, setUserChange] = useState({
        id: auth.id,
        name: auth.name,
        email: auth.email,
        password: '',
        phone: auth.phone,
    })

    const location = useLocation()
    const handleChangeUser = async (e) => {
        e.preventDefault()
        if (passwordRepeat.passwordRepeat === userChange.password) {
            dispatch(changeUser(userChange))
        } else {
            setPasswordRepeat({ ...passwordRepeat, statusPassword: false })
        }
    }

    const getOrdersStatus = useSelector(
        (state) => state.orderPosterSlice.getOrdersStatus
    )
    const orders = useSelector((state) =>
        state.orderPosterSlice.orders.filter(
            (order) => order.phone === auth.phone.replace(/[^0-9]/g, '')
        )
    )
    const productsList = useSelector((state) => state.productsPoster.items)

    const [showOrder, setShowOrder] = useState(0)
    //const getProduct = (id) => {
    //    dispatch(fetchProductPoster(id))
    //}
    useEffect(() => {
        dispatch(getOrdersPoster())
        dispatch(fetchProductsPoster())
    }, [dispatch])

    return (
        <>
            <div className="m-breadcrumbs">
                <div className="container">
                    <nav className="m-breadcrumbs-list">
                        <Link to="/">Головна</Link>
                        Особистий кабінет
                    </nav>
                </div>
            </div>
            <section className="o-cabinet">
                <div className="container">
                    <div className="m-section-top mb-3 mb-md-4">
                        <div className="a-section-title pb-3 pb-lg-4">
                            <h1>Особистий кабінет</h1>
                        </div>
                    </div>
                    <div className="o-cabinet-tabs">
                        <ul className="m-cabinet-tabs">
                            <li className="active">
                                <Link
                                    className={`${
                                        location.pathname === '/profile'
                                            ? 'active'
                                            : ''
                                    }`}
                                    to="/profile"
                                >
                                    Персональна інформація
                                </Link>
                            </li>
                            <li>
                                <NavLink to="/profile/wishlist">Обране</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/history-order">
                                    Історія замовлень
                                </NavLink>
                            </li>
                        </ul>
                        <div className="m-cabinet-content">
                            {location.pathname === '/profile' && (
                                <div className="m-cabinet-content__item m-cabinet-personal active">
                                    <div className="row m-cabinet-personal__info justify-content-md-center">
                                        <div className="col-12 col-md-5 col-lg-4 info pb-5 pb-md-0">
                                            <div className="info-block">
                                                <div className="title">
                                                    {auth.name}
                                                </div>
                                                <div className="info-item phone">
                                                    <div className="label">
                                                        Номер телефону
                                                    </div>
                                                    <div className="value">
                                                        {auth.phone}
                                                    </div>
                                                </div>
                                                <div className="info-item email">
                                                    <div className="label">
                                                        Email
                                                    </div>
                                                    <div className="value">
                                                        {userChange.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8 col-xl-7 edit-info">
                                            <h2 className="title">
                                                Зміна інформації
                                            </h2>
                                            <form onSubmit={handleChangeUser}>
                                                <div className="row edit-info-row">
                                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 edit-info-col">
                                                        <div className="input">
                                                            <label>
                                                                <input
                                                                    name="name"
                                                                    type="text"
                                                                    required
                                                                    value={
                                                                        userChange.name
                                                                    }
                                                                    className={`${
                                                                        userChange
                                                                            .name
                                                                            .length >
                                                                        0
                                                                            ? 'filled'
                                                                            : ''
                                                                    }`}
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setUserChange(
                                                                            {
                                                                                ...userChange,
                                                                                name: e
                                                                                    .target
                                                                                    .value,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                                <span className="label">
                                                                    Ім’я
                                                                </span>
                                                            </label>
                                                        </div>
                                                        {/*<div className="input">
                                                        <label>
                                                            <input
                                                                name="name"
                                                                type="text"
                                                            />
                                                            <span className="label">
                                                                Прізвище
                                                            </span>
                                                        </label>
                                                    </div>*/}

                                                        <div className="input">
                                                            <label>
                                                                <NumberFormat
                                                                    format="+## (###) ### ## ##"
                                                                    type="tel"
                                                                    mask="_"
                                                                    required
                                                                    defaultValue={
                                                                        userChange.phone
                                                                    }
                                                                    className={`${
                                                                        userChange
                                                                            .phone
                                                                            .length >
                                                                        0
                                                                            ? 'filled phone'
                                                                            : 'phone'
                                                                    }`}
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setUserChange(
                                                                            {
                                                                                ...userChange,
                                                                                phone: e
                                                                                    .target
                                                                                    .value,
                                                                            }
                                                                        )
                                                                    }
                                                                />

                                                                <span className="label">
                                                                    Номер
                                                                    телефону
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div className="input">
                                                            <label>
                                                                <input
                                                                    type="email"
                                                                    required
                                                                    value={
                                                                        userChange.email
                                                                    }
                                                                    className={`${
                                                                        userChange
                                                                            .email
                                                                            .length >
                                                                        0
                                                                            ? 'filled'
                                                                            : ''
                                                                    }`}
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setUserChange(
                                                                            {
                                                                                ...userChange,
                                                                                email: e
                                                                                    .target
                                                                                    .value,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                                <span className="label">
                                                                    Email
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 edit-info-col">
                                                        <div className="input">
                                                            <label>
                                                                <div className="input-inner">
                                                                    <input
                                                                        type={
                                                                            passwordShow.newPassword
                                                                                ? 'text'
                                                                                : 'password'
                                                                        }
                                                                        value={
                                                                            userChange.password
                                                                        }
                                                                        className={`${
                                                                            userChange
                                                                                .password
                                                                                .length >
                                                                            0
                                                                                ? 'filled'
                                                                                : ''
                                                                        }`}
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setUserChange(
                                                                                {
                                                                                    ...userChange,
                                                                                    password:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            )
                                                                        }
                                                                    />
                                                                    <span className="label">
                                                                        Новий
                                                                        пароль
                                                                    </span>
                                                                    <button
                                                                        type="button"
                                                                        className="password-control"
                                                                        onClick={() =>
                                                                            setPasswordShow(
                                                                                {
                                                                                    ...passwordShow,
                                                                                    newPassword:
                                                                                        !passwordShow.newPassword,
                                                                                }
                                                                            )
                                                                        }
                                                                    ></button>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="input">
                                                            <label>
                                                                <div className="input-inner">
                                                                    <input
                                                                        type={
                                                                            passwordShow.repeatPassword
                                                                                ? 'text'
                                                                                : 'password'
                                                                        }
                                                                        value={
                                                                            passwordRepeat.passwordRepeat
                                                                        }
                                                                        className={`${
                                                                            passwordRepeat
                                                                                .passwordRepeat
                                                                                .length >
                                                                            0
                                                                                ? 'filled'
                                                                                : ''
                                                                        }`}
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setPasswordRepeat(
                                                                                {
                                                                                    ...passwordRepeat,
                                                                                    statusPassword: true,
                                                                                    passwordRepeat:
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                }
                                                                            )
                                                                        }
                                                                    />
                                                                    <span className="label">
                                                                        Підтвердження
                                                                        нового
                                                                        паролю
                                                                    </span>
                                                                    <button
                                                                        type="button"
                                                                        className="password-control"
                                                                        onClick={() =>
                                                                            setPasswordShow(
                                                                                {
                                                                                    ...passwordShow,
                                                                                    repeatPassword:
                                                                                        !passwordShow.repeatPassword,
                                                                                }
                                                                            )
                                                                        }
                                                                    ></button>
                                                                </div>
                                                            </label>
                                                        </div>

                                                        <div className="button">
                                                            <button
                                                                type="submit"
                                                                className="a-btn e--gold"
                                                            >
                                                                Змінити
                                                            </button>
                                                        </div>
                                                        {!passwordRepeat.statusPassword ? (
                                                            <p className="login-error">
                                                                Паролі не
                                                                збігаються
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {location.pathname === '/profile/wishlist' && (
                                <div className="m-cabinet-content__item m-cabinet-favorite active">
                                    <div className="row m-products-list__row">
                                        {wishlist && wishlist.length > 0 ? (
                                            wishlist.map((obj) =>
                                                obj.typeProduct == 'other' ? (
                                                    <ProductCard
                                                        key={obj.product_id}
                                                        {...obj}
                                                        wishlistCheck="true"
                                                    />
                                                ) : (
                                                    <ProductCardPizza
                                                        key={obj.product_id}
                                                        {...obj}
                                                        wishlistCheck="true"
                                                    />
                                                )
                                            )
                                        ) : (
                                            <div
                                                style={{ textAlign: 'center' }}
                                            >
                                                Список побажань порожній
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {location.pathname === '/profile/history-order' && (
                                <div className="m-cabinet-content__item m-cabinet-history active">
                                    <div className="m-history-items">
                                        {getOrdersStatus === 'loaded' &&
                                        orders.length > 0 ? (
                                            orders
                                                .map((item) => (
                                                    <div
                                                        className="m-history-item pb-4"
                                                        key={
                                                            item.incoming_order_id
                                                        }
                                                    >
                                                        <div className="top">
                                                            <div className="order-info d-flex flex-md-row align-items-center justify-content-between">
                                                                <div className="number d-flex justify-content-between align-items-center pb-2 pt-2">
                                                                    Замовлення:
                                                                    <span className="count ps-2">
                                                                        {
                                                                            item.incoming_order_id
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="date item">
                                                                    <Moment format="DD.MM.YYYY">
                                                                        {
                                                                            item.created_atcreated_at
                                                                        }
                                                                    </Moment>
                                                                </div>
                                                            </div>
                                                            <div className="amount d-flex justify-content-between align-items-center pt-2 pb-2">
                                                                <div className="amount-positions">
                                                                    Кількість
                                                                    позицій:{' '}
                                                                    <span className="count">
                                                                        {item.products.reduce(
                                                                            (
                                                                                sum,
                                                                                obj
                                                                            ) => {
                                                                                return (
                                                                                    Math.round(
                                                                                        obj.count
                                                                                    ) +
                                                                                    sum
                                                                                )
                                                                            },
                                                                            0
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="center prices pb-2">
                                                            {/*<div className="discount d-flex justify-content-between pb-2">
                                                                <div className="label">
                                                                    Знижка
                                                                </div>
                                                                <div className="value">
                                                                    <del>
                                                                        141&#8372;
                                                                    </del>
                                                                </div>
                                                            </div>
                                                            <div className="total d-flex justify-content-between">
                                                                <div className="label">
                                                                    РАЗОМ:
                                                                </div>
                                                                <div className="value">
                                                                    1041&#8372;
                                                                </div>
                                                            </div>*/}
                                                        </div>
                                                        <div className="bottom">
                                                            {showOrder ===
                                                                item.incoming_order_id && (
                                                                <div className="m-history-cards">
                                                                    <div className="m-history-cards__list row">
                                                                        {item.products?.map(
                                                                            (
                                                                                product
                                                                            ) =>
                                                                                productsList
                                                                                    .filter(
                                                                                        (
                                                                                            product_item
                                                                                        ) =>
                                                                                            product_item.product_id ==
                                                                                            product.product_id
                                                                                    )
                                                                                    .map(
                                                                                        (
                                                                                            product_item
                                                                                        ) => (
                                                                                            <div
                                                                                                key={
                                                                                                    product.io_product_id
                                                                                                }
                                                                                                className="m-cart-item col-12 col-sm-6 col-lg-4 "
                                                                                            >
                                                                                                <div className="m-cart-item__inner">
                                                                                                    <div className="m-cart-item__img">
                                                                                                        <div className="img">
                                                                                                            <img
                                                                                                                src={
                                                                                                                    process
                                                                                                                        .env
                                                                                                                        .REACT_APP_POSTER_API_URL +
                                                                                                                    product_item.photo
                                                                                                                }
                                                                                                                alt={
                                                                                                                    product_item.product_name
                                                                                                                }
                                                                                                            />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="m-cart-item__desc">
                                                                                                        <div className="m-cart-item__title">
                                                                                                            {
                                                                                                                product_item.product_name
                                                                                                            }
                                                                                                        </div>
                                                                                                        <div className="weight">
                                                                                                            {product.modification &&
                                                                                                            product_item.group_modifications
                                                                                                                ? product_item.group_modifications.map(
                                                                                                                      (
                                                                                                                          mod
                                                                                                                      ) => (
                                                                                                                          <div
                                                                                                                              key={
                                                                                                                                  mod.dish_modification_group_id
                                                                                                                              }
                                                                                                                          >
                                                                                                                              <span className="col-3">
                                                                                                                                  {
                                                                                                                                      mod.name
                                                                                                                                  }

                                                                                                                                  :{' '}
                                                                                                                              </span>
                                                                                                                              {product.modification.map(
                                                                                                                                  (
                                                                                                                                      m
                                                                                                                                  ) =>
                                                                                                                                      mod.modifications
                                                                                                                                          .filter(
                                                                                                                                              (
                                                                                                                                                  mod_group
                                                                                                                                              ) =>
                                                                                                                                                  mod_group.dish_modification_id ==
                                                                                                                                                  m.m
                                                                                                                                          )
                                                                                                                                          .map(
                                                                                                                                              (
                                                                                                                                                  mod_group
                                                                                                                                              ) => (
                                                                                                                                                  <span
                                                                                                                                                      key={
                                                                                                                                                          mod_group.dish_modification_id
                                                                                                                                                      }
                                                                                                                                                  >
                                                                                                                                                      {
                                                                                                                                                          mod_group.name
                                                                                                                                                      }{' '}
                                                                                                                                                      {`${
                                                                                                                                                          m.a >
                                                                                                                                                          1
                                                                                                                                                              ? ` - ${m.a} шт.`
                                                                                                                                                              : ''
                                                                                                                                                      }`}
                                                                                                                                                      ;&nbsp;
                                                                                                                                                  </span>
                                                                                                                                              )
                                                                                                                                          )
                                                                                                                              )}
                                                                                                                          </div>
                                                                                                                      )
                                                                                                                  )
                                                                                                                : 'Стандарт'}
                                                                                                        </div>

                                                                                                        <div className="a-product-card__price">
                                                                                                            <div className="price">
                                                                                                                {product.price /
                                                                                                                    100}{' '}
                                                                                                                грн
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="quantity e--border">
                                                                                                            <input
                                                                                                                type="text"
                                                                                                                value={Math.round(
                                                                                                                    product.count
                                                                                                                )}
                                                                                                                readOnly
                                                                                                            />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )}

                                                            <div className="show-more">
                                                                {showOrder ===
                                                                item.incoming_order_id ? (
                                                                    <button
                                                                        className="show-more-btn"
                                                                        onClick={() =>
                                                                            setShowOrder(
                                                                                0
                                                                            )
                                                                        }
                                                                    >
                                                                        <span className="show">
                                                                            Приховати
                                                                        </span>
                                                                        <svg
                                                                            style={{
                                                                                transform:
                                                                                    'rotate(180deg)',
                                                                            }}
                                                                            width="16"
                                                                            height="17"
                                                                            viewBox="0 0 16 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M3.5 6.41943L8 10.9194L12.5 6.41943"
                                                                                stroke="#878787"
                                                                                strokeWidth="2"
                                                                                strokeMiterlimit="10"
                                                                                strokeLinecap="square"
                                                                            ></path>
                                                                        </svg>
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        className="show-more-btn"
                                                                        onClick={() =>
                                                                            setShowOrder(
                                                                                item.incoming_order_id
                                                                            )
                                                                        }
                                                                    >
                                                                        <span className="show">
                                                                            Детальніше
                                                                        </span>
                                                                        <svg
                                                                            width="16"
                                                                            height="17"
                                                                            viewBox="0 0 16 17"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M3.5 6.41943L8 10.9194L12.5 6.41943"
                                                                                stroke="#878787"
                                                                                strokeWidth="2"
                                                                                strokeMiterlimit="10"
                                                                                strokeLinecap="square"
                                                                            ></path>
                                                                        </svg>
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                                .sort((a, b) =>
                                                    a.incoming_order_id <
                                                    b.incoming_order_id
                                                        ? 1
                                                        : -1
                                                )
                                        ) : (
                                            <div
                                                style={{ textAlign: 'center' }}
                                            >
                                                Немає замовлень
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
