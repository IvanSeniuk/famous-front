import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import axios from '../../http/axios'
import { changeUser } from '../../redux/slices/auth/authSlice'
import { useState } from 'react'

const Profile = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const [userChange, setUserChange] = useState(auth)
    const handleChangeUser = async (e) => {
        e.preventDefault()
        dispatch(changeUser(userChange))
    }
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
                                <a href="#!">Персональна інформація</a>
                            </li>
                            <li>
                                <a href="#!">Обране</a>
                            </li>
                            <li>
                                <a href="#!">Історія замовлень</a>
                            </li>
                        </ul>
                        <div className="m-cabinet-content">
                            <div className="m-cabinet-content__item m-cabinet-personal active">
                                <div className="row m-cabinet-personal__info justify-content-md-center">
                                    <div className="col-12 col-md-5 col-lg-4 info pb-5 pb-md-0">
                                        <div className="info-block">
                                            <div className="title">
                                                {userChange.name}
                                            </div>
                                            <div className="info-item phone">
                                                <div className="label">
                                                    Номер телефону
                                                </div>
                                                <div className="value">
                                                    + 380 68 65 78 365
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
                                                                defaultValue={
                                                                    auth.name
                                                                }
                                                                className={`${
                                                                    auth.name
                                                                        .length >
                                                                    0
                                                                        ? 'filled'
                                                                        : ''
                                                                }`}
                                                                onChange={(e) =>
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
                                                            <input
                                                                type="text"
                                                                required
                                                                defaultValue={
                                                                    auth.phone
                                                                }
                                                                className={`${
                                                                    auth.phone
                                                                        .length >
                                                                    0
                                                                        ? 'filled phone'
                                                                        : 'phone'
                                                                }`}
                                                                onChange={(e) =>
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
                                                                Номер телефону
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="input">
                                                        <label>
                                                            <input
                                                                type="email"
                                                                required
                                                                defaultValue={
                                                                    auth.email
                                                                }
                                                                className={`${
                                                                    auth.email
                                                                        .length >
                                                                    0
                                                                        ? 'filled'
                                                                        : ''
                                                                }`}
                                                                onChange={(e) =>
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
                                                                <input type="password" />
                                                                <span className="label">
                                                                    Старий
                                                                    пароль
                                                                </span>
                                                                <a
                                                                    href="#"
                                                                    className="password-control"
                                                                ></a>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="input">
                                                        <label>
                                                            <div className="input-inner">
                                                                <input type="password" />
                                                                <span className="label">
                                                                    Новий пароль
                                                                </span>
                                                                <a
                                                                    href="#"
                                                                    className="password-control"
                                                                ></a>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="input">
                                                        <label>
                                                            <div className="input-inner">
                                                                <input type="password" />
                                                                <span className="label">
                                                                    Підтвердження
                                                                    нового
                                                                    паролю
                                                                </span>
                                                                <a
                                                                    href="#"
                                                                    className="password-control"
                                                                ></a>
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
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="m-cabinet-content__item m-cabinet-favorite">
                                <div className="row m-products-list__row">
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/all_all_big-t1542018571-r1w768h425q90zc1.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/x-IMG_6811.6ca-e1538258192446.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/all_all_big-t1542018571-r1w768h425q90zc1.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/x-IMG_6811.6ca-e1538258192446.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/all_all_big-t1542018571-r1w768h425q90zc1.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/x-IMG_6811.6ca-e1538258192446.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/all_all_big-t1542018571-r1w768h425q90zc1.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/x-IMG_6811.6ca-e1538258192446.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card pizza">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/d3279e438d7607d83093d1f9465e0e9c.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="sides m-product-card__options">
                                                        <ul>
                                                            <li>
                                                                <span className="inner">
                                                                    Філадельфія
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    Хот-дог
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom left">
                                                    <div className="sizes m-product-card__options">
                                                        <ul>
                                                            <li className="active">
                                                                <span className="inner">
                                                                    30см.
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    40см.
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom right">
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card pizza">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/d3279e438d7607d83093d1f9465e0e9c.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="sides m-product-card__options">
                                                        <ul>
                                                            <li>
                                                                <span className="inner">
                                                                    Філадельфія
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    Хот-дог
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom left">
                                                    <div className="sizes m-product-card__options">
                                                        <ul>
                                                            <li className="active">
                                                                <span className="inner">
                                                                    30см.
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    40см.
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom right">
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card pizza">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/d3279e438d7607d83093d1f9465e0e9c.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="sides m-product-card__options">
                                                        <ul>
                                                            <li>
                                                                <span className="inner">
                                                                    Філадельфія
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    Хот-дог
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom left">
                                                    <div className="sizes m-product-card__options">
                                                        <ul>
                                                            <li className="active">
                                                                <span className="inner">
                                                                    30см.
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    40см.
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom right">
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 m-product-card__wrapper">
                                        <div className="m-product-card pizza">
                                            <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                                                <div className="m-product-card__item left image">
                                                    <div className="m-product-card__img">
                                                        <img
                                                            src="../../img/products/d3279e438d7607d83093d1f9465e0e9c.jpg"
                                                            alt=""
                                                        />
                                                        <img
                                                            src="../../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item right desc">
                                                    <div className="m-product-card__title">
                                                        <button className="remove-card">
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
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                        <div className="name">
                                                            Цезаре з Креветкою
                                                        </div>
                                                        <div className="weight">
                                                            430 г.
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        Неаполітанський соус,
                                                        сир моцарела, курка
                                                        смажена, шинка, ананаси
                                                        консервовані, кукурудза
                                                    </div>
                                                    <div className="sides m-product-card__options">
                                                        <ul>
                                                            <li>
                                                                <span className="inner">
                                                                    Філадельфія
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    Хот-дог
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom left">
                                                    <div className="sizes m-product-card__options">
                                                        <ul>
                                                            <li className="active">
                                                                <span className="inner">
                                                                    30см.
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="inner">
                                                                    40см.
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="m-product-card__item bottom right">
                                                    <div className="m-product-card__bottom">
                                                        <div className="price">
                                                            350 грн
                                                        </div>
                                                        <div className="add-to-cart">
                                                            <button className="a-btn add-to-cart-btn">
                                                                <span className="a-btn-inner">
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.99988 2.5C10.8287 2.5 11.6235 2.82924 12.2096 3.41529C12.7956 4.00134 13.1249 4.7962 13.1249 5.625V6.25H6.87488V5.625C6.87488 4.7962 7.20412 4.00134 7.79017 3.41529C8.37622 2.82924 9.17108 2.5 9.99988 2.5ZM14.3749 6.25V5.625C14.3749 4.46468 13.9139 3.35188 13.0935 2.53141C12.273 1.71094 11.1602 1.25 9.99988 1.25C8.83956 1.25 7.72676 1.71094 6.90629 2.53141C6.08581 3.35188 5.62488 4.46468 5.62488 5.625V6.25H1.24988V16.25C1.24988 16.913 1.51327 17.5489 1.98211 18.0178C2.45095 18.4866 3.08684 18.75 3.74988 18.75H16.2499C16.9129 18.75 17.5488 18.4866 18.0176 18.0178C18.4865 17.5489 18.7499 16.913 18.7499 16.25V6.25H14.3749ZM2.49988 7.5H17.4999V16.25C17.4999 16.5815 17.3682 16.8995 17.1338 17.1339C16.8993 17.3683 16.5814 17.5 16.2499 17.5H3.74988C3.41836 17.5 3.10041 17.3683 2.86599 17.1339C2.63157 16.8995 2.49988 16.5815 2.49988 16.25V7.5Z"
                                                                            fill="white"
                                                                        />
                                                                        <path
                                                                            d="M6.24988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M9.99988 10V15"
                                                                            stroke="white"
                                                                        />
                                                                        <path
                                                                            d="M13.7499 10V15"
                                                                            stroke="white"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        в кошик
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    value="1"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-cabinet-content__item m-cabinet-history">
                                <div className="m-history-items">
                                    <div className="m-history-item">
                                        <div className="top">
                                            <div className="order-info d-flex flex-md-row align-items-center justify-content-between">
                                                <div className="number d-flex justify-content-between align-items-center pb-2 pt-2">
                                                    Замовлення:
                                                    <span className="count ps-2">
                                                        01577
                                                    </span>
                                                </div>
                                                <div className="date item">
                                                    11.05.2021
                                                </div>
                                            </div>
                                            <div className="amount d-flex justify-content-between align-items-center pt-2 pb-2">
                                                <div className="amount-positions">
                                                    Кількість позицій:
                                                    <span className="count">
                                                        20
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="center prices pt-2 pb-2">
                                            <div className="discount d-flex justify-content-between pb-2">
                                                <div className="label">
                                                    Знижка
                                                </div>
                                                <div className="value">
                                                    <del>141&#8372;</del>
                                                </div>
                                            </div>
                                            <div className="total d-flex justify-content-between">
                                                <div className="label">
                                                    РАЗОМ:
                                                </div>
                                                <div className="value">
                                                    1041&#8372;
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="m-history-cards">
                                                <div className="m-history-cards__list row">
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="show-more">
                                                <a
                                                    href="#!"
                                                    className="show-more-btn"
                                                >
                                                    <span className="show">
                                                        Детальніше
                                                    </span>
                                                    <span className="hide">
                                                        Приховати
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
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-history-item">
                                        <div className="top">
                                            <div className="order-info d-flex flex-md-row align-items-center justify-content-between">
                                                <div className="number d-flex justify-content-between align-items-center pb-2 pt-2">
                                                    Замовлення:
                                                    <span className="count ps-2">
                                                        01577
                                                    </span>
                                                </div>
                                                <div className="date item">
                                                    11.05.2021
                                                </div>
                                            </div>
                                            <div className="amount d-flex justify-content-between align-items-center pt-2 pb-2">
                                                <div className="amount-positions">
                                                    Кількість позицій:
                                                    <span className="count">
                                                        20
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="center prices pt-2 pb-2">
                                            <div className="discount d-flex justify-content-between pb-2">
                                                <div className="label">
                                                    Знижка
                                                </div>
                                                <div className="value">
                                                    <del>141&#8372;</del>
                                                </div>
                                            </div>
                                            <div className="total d-flex justify-content-between">
                                                <div className="label">
                                                    РАЗОМ:
                                                </div>
                                                <div className="value">
                                                    1041&#8372;
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="m-history-cards">
                                                <div className="m-history-cards__list row">
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="show-more">
                                                <a
                                                    href="#!"
                                                    className="show-more-btn"
                                                >
                                                    <span className="show">
                                                        Детальніше
                                                    </span>
                                                    <span className="hide">
                                                        Приховати
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
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-history-item">
                                        <div className="top">
                                            <div className="order-info d-flex flex-md-row align-items-center justify-content-between">
                                                <div className="number d-flex justify-content-between align-items-center pb-2 pt-2">
                                                    Замовлення:
                                                    <span className="count ps-2">
                                                        01577
                                                    </span>
                                                </div>
                                                <div className="date item">
                                                    11.05.2021
                                                </div>
                                            </div>
                                            <div className="amount d-flex justify-content-between align-items-center pt-2 pb-2">
                                                <div className="amount-positions">
                                                    Кількість позицій:
                                                    <span className="count">
                                                        20
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="center prices pt-2 pb-2">
                                            <div className="discount d-flex justify-content-between pb-2">
                                                <div className="label">
                                                    Знижка
                                                </div>
                                                <div className="value">
                                                    <del>141&#8372;</del>
                                                </div>
                                            </div>
                                            <div className="total d-flex justify-content-between">
                                                <div className="label">
                                                    РАЗОМ:
                                                </div>
                                                <div className="value">
                                                    1041&#8372;
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="m-history-cards">
                                                <div className="m-history-cards__list row">
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="show-more">
                                                <a
                                                    href="#!"
                                                    className="show-more-btn"
                                                >
                                                    <span className="show">
                                                        Детальніше
                                                    </span>
                                                    <span className="hide">
                                                        Приховати
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
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-history-item">
                                        <div className="top">
                                            <div className="order-info d-flex flex-md-row align-items-center justify-content-between">
                                                <div className="number d-flex justify-content-between align-items-center pb-2 pt-2">
                                                    Замовлення:
                                                    <span className="count ps-2">
                                                        01577
                                                    </span>
                                                </div>
                                                <div className="date item">
                                                    11.05.2021
                                                </div>
                                            </div>
                                            <div className="amount d-flex justify-content-between align-items-center pt-2 pb-2">
                                                <div className="amount-positions">
                                                    Кількість позицій:
                                                    <span className="count">
                                                        20
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="center prices pt-2 pb-2">
                                            <div className="discount d-flex justify-content-between pb-2">
                                                <div className="label">
                                                    Знижка
                                                </div>
                                                <div className="value">
                                                    <del>141&#8372;</del>
                                                </div>
                                            </div>
                                            <div className="total d-flex justify-content-between">
                                                <div className="label">
                                                    РАЗОМ:
                                                </div>
                                                <div className="value">
                                                    1041&#8372;
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="m-history-cards">
                                                <div className="m-history-cards__list row">
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-cart-item col-12 col-sm-6 col-lg-4 col-xxl-3">
                                                        <div className="m-cart-item__inner">
                                                            <div className="m-cart-item__img">
                                                                <div className="img">
                                                                    <img
                                                                        src="../img/products/Пепперони_300dpi-thumbnail-960x960-70.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="m-cart-item__desc">
                                                                <div className="m-cart-item__title">
                                                                    Fuze Tea
                                                                    чорний чай
                                                                    зі смаком
                                                                    лимона
                                                                </div>
                                                                <div className="weight">
                                                                    200гр.
                                                                </div>

                                                                <div className="a-product-card__price">
                                                                    <div className="price">
                                                                        <span className="price-sale">
                                                                            108
                                                                            &#8372;
                                                                        </span>
                                                                        <span className="price-old">
                                                                            324
                                                                            &#8372;
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="quantity e--border">
                                                                    <input
                                                                        type="text"
                                                                        value="1"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="show-more">
                                                <a
                                                    href="#!"
                                                    className="show-more-btn"
                                                >
                                                    <span className="show">
                                                        Детальніше
                                                    </span>
                                                    <span className="hide">
                                                        Приховати
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
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
