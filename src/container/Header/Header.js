//import Cart from './Cart/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../../redux/slices/ui/uiSlice'
//import PropTypes from 'prop-types'
import HeaderMenu from '../../components/Header/HeaderMenu'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { logoutUser } from '../../redux/slices/auth/authSlice'

const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    if (burgerActive) {
        document.body.classList.add('hidden')
    } else {
        document.body.classList.remove('hidden')
    }
    const navigate = useNavigate()
    const { totalCount, items } = useSelector((state) => state.cart)
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [change, setChange] = useState(false)
    let location = useLocation()
    const isMounted = useRef(false)

    useEffect(() => {
        setBurgerActive(false)
    }, [navigate])
    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items)
            localStorage.setItem('cart', json)
            if (totalCount !== 0) {
                setChange(true)

                setTimeout(() => {
                    setChange(false)
                }, 1000)
            }
        }
        isMounted.current = true
    }, [totalCount, items])
    return (
        <>
            <header className={`o-header ${burgerActive ? 'active' : ''}`}>
                <div className="container">
                    <div className="m-header row align-items-center justify-content-between">
                        <div className="col-4 col-lg-5 m-header-left">
                            <div className="m-header-left__inner d-flex align-items-center">
                                <div
                                    className={`a-burger ${
                                        burgerActive ? 'active' : ''
                                    }`}
                                    onClick={() =>
                                        setBurgerActive(
                                            (burgerActive) => !burgerActive
                                        )
                                    }
                                >
                                    <div className="a-burger-inner">
                                        <span></span>
                                    </div>
                                    <span className="a-burger-menu">Menu</span>
                                </div>
                                <div className="a-header-phone">
                                    <div className="a-header-phone__row">
                                        <Link to="tel:+380505913556">
                                            <span className="a-header-phone__icon">
                                                <svg
                                                    width="21"
                                                    height="20"
                                                    viewBox="0 0 21 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M18.44 11C18.22 11 17.99 10.93 17.77 10.88C17.3245 10.7818 16.8867 10.6515 16.46 10.49C15.9961 10.3212 15.4862 10.33 15.0283 10.5146C14.5705 10.6992 14.1971 11.0466 13.98 11.49L13.76 11.94C12.786 11.3982 11.891 10.7252 11.1 9.93999C10.3148 9.14901 9.64183 8.25399 9.10001 7.27999L9.52001 6.99999C9.96338 6.78291 10.3108 6.40952 10.4954 5.95168C10.68 5.49384 10.6888 4.9839 10.52 4.51999C10.3612 4.09241 10.2309 3.65479 10.13 3.20999C10.08 2.98999 10.04 2.75999 10.01 2.52999C9.88857 1.82561 9.51963 1.18773 8.96963 0.731229C8.41963 0.274727 7.72471 0.029599 7.01001 0.0399902H4.01001C3.57904 0.0359436 3.15226 0.124804 2.75872 0.300521C2.36518 0.476238 2.01412 0.734686 1.72944 1.05827C1.44476 1.38186 1.23314 1.76298 1.109 2.1757C0.984851 2.58842 0.951089 3.02305 1.01001 3.44999C1.54275 7.63937 3.45604 11.5319 6.44766 14.5126C9.43929 17.4934 13.3387 19.3925 17.53 19.91H17.91C18.6474 19.9111 19.3594 19.6405 19.91 19.15C20.2264 18.867 20.4791 18.5202 20.6515 18.1323C20.8239 17.7444 20.912 17.3244 20.91 16.9V13.9C20.8978 13.2054 20.6448 12.5365 20.1943 12.0077C19.7439 11.4788 19.1238 11.1226 18.44 11ZM18.94 17C18.9398 17.142 18.9094 17.2823 18.8508 17.4116C18.7922 17.5409 18.7067 17.6563 18.6 17.75C18.4886 17.847 18.358 17.9194 18.2167 17.9625C18.0754 18.0056 17.9266 18.0183 17.78 18C14.0349 17.5198 10.5562 15.8065 7.89273 13.1303C5.22921 10.4541 3.53242 6.96733 3.07001 3.21999C3.05409 3.07351 3.06804 2.92532 3.11101 2.78438C3.15398 2.64344 3.22508 2.51268 3.32001 2.39999C3.41372 2.29332 3.52907 2.20783 3.65839 2.14921C3.78771 2.09058 3.92802 2.06017 4.07001 2.05999H7.07001C7.30256 2.05482 7.52963 2.13087 7.71215 2.27506C7.89467 2.41925 8.02122 2.62256 8.07001 2.84999C8.11001 3.12332 8.16001 3.39332 8.22001 3.65999C8.33553 4.18713 8.48927 4.70517 8.68001 5.20999L7.28001 5.85999C7.16031 5.91491 7.05263 5.99294 6.96317 6.08959C6.8737 6.18623 6.80421 6.2996 6.75868 6.42318C6.71315 6.54677 6.69248 6.67812 6.69786 6.80971C6.70323 6.9413 6.73455 7.07054 6.79001 7.18999C8.22921 10.2727 10.7073 12.7508 13.79 14.19C14.0335 14.29 14.3065 14.29 14.55 14.19C14.6747 14.1454 14.7893 14.0764 14.8872 13.9872C14.985 13.8979 15.0642 13.7901 15.12 13.67L15.74 12.27C16.257 12.4549 16.7846 12.6085 17.32 12.73C17.5867 12.79 17.8567 12.84 18.13 12.88C18.3574 12.9288 18.5607 13.0553 18.7049 13.2378C18.8491 13.4204 18.9252 13.6474 18.92 13.88L18.94 17Z"
                                                        fill="white"
                                                    />
                                                </svg>{' '}
                                            </span>
                                            <span className="a-header-phone__title">
                                                +38 (050) 591 35 56
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2 m-header-center">
                            <div className="a-logo d-flex align-items-center justify-content-center">
                                <Link to="/" className="logo">
                                    <img src="/image/logo.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 col-lg-5 m-header-right">
                            <div className="m-header-right__inner d-flex align-items-center justify-content-end">
                                {auth.id ? (
                                    <>
                                        {auth.role === 'ADMIN' && (
                                            <div className="a-login m-header-right__item">
                                                <Link
                                                    to={`/admin`}
                                                    className="login-link a-btn-circle"
                                                >
                                                    <svg
                                                        viewBox="0 0 22.109 22.105"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <defs></defs>
                                                        <g
                                                            data-name="Layer 2"
                                                            id="Layer_2"
                                                        >
                                                            <g
                                                                data-name="Layer 1"
                                                                id="Layer_1-2"
                                                            >
                                                                <path
                                                                    fill="white"
                                                                    d="M10.606,6.252h1.625a1.339,1.339,0,0,0,2.584,0H18.2a.335.335,0,0,0,0-.67H14.815a1.339,1.339,0,0,0-2.584,0H10.606A.335.335,0,0,0,10.606,6.252Zm2.917-1a.67.67,0,0,1,0,1.34A.67.67,0,0,1,13.523,5.247ZM10.606,9.824H14.8a1.339,1.339,0,0,0,2.584,0c.357-.044,1.144.176,1.15-.334s-.793-.291-1.15-.335a1.339,1.339,0,0,0-2.584,0H10.606A.335.335,0,0,0,10.606,9.824Zm5.485-1a.67.67,0,0,1,0,1.34A.67.67,0,0,1,16.091,8.82ZM11.611,14.4A1.338,1.338,0,0,0,12.9,13.4h5.3a.335.335,0,0,0,0-.67H12.9A1.338,1.338,0,1,0,11.611,14.4Zm0-2.01a.67.67,0,0,1,0,1.34A.67.67,0,0,1,11.611,12.393ZM9.49,20.1h3.126a.335.335,0,0,1,0,.669H9.49A.335.335,0,0,1,9.49,20.1Zm12.58-1.155-1.75-3.5V1.675A1.678,1.678,0,0,0,18.645,0H3.462A1.677,1.677,0,0,0,1.787,1.675V15.438l-1.752,3.5a.34.34,0,0,0-.035.15V20.43a1.676,1.676,0,0,0,1.675,1.675H20.431a1.676,1.676,0,0,0,1.674-1.675A13.885,13.885,0,0,0,22.07,18.941ZM2.457,1.675a1.006,1.006,0,0,1,1.005-1H18.645a1.006,1.006,0,0,1,1,1V3.126H2.457ZM19.65,3.8V15.183H9.156V3.8ZM2.457,3.8H8.486V7.964H3.908a.335.335,0,0,0,0,.67H8.486v6.549H2.457ZM2.328,15.853H19.777l1.451,2.9H.877ZM21.436,20.43a1.007,1.007,0,0,1-1,1.006H1.675a1.007,1.007,0,0,1-1-1.006v-1H21.436Zm-6.8-18.3c-.3.312-.785-.172-.473-.474S14.953,1.828,14.639,2.134Zm1.55.1a.335.335,0,0,1,0-.67A.335.335,0,0,1,16.189,2.232Zm2.023-.1a.335.335,0,0,1-.474-.474C18.039,1.357,18.526,1.831,18.212,2.134ZM7.034,11.016H3.908a.335.335,0,0,1,0-.67H7.034A.335.335,0,0,1,7.034,11.016Zm0,2.381H3.908a.335.335,0,0,1,0-.67H7.034A.335.335,0,0,1,7.034,13.4ZM3.908,5.583H7.034a.335.335,0,0,1,0,.669H3.908A.335.335,0,0,1,3.908,5.583Z"
                                                                    data-name="admin panel"
                                                                    id="admin_panel"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        )}

                                        <div className="a-login m-header-right__item">
                                            <Link
                                                to={`/profile`}
                                                className="login-link a-btn-circle"
                                            >
                                                <svg
                                                    width="22"
                                                    height="28"
                                                    viewBox="0 0 22 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <mask
                                                        id="mask0_14_2"
                                                        //style="mask-type: alpha"
                                                        maskUnits="userSpaceOnUse"
                                                        x="0"
                                                        y="17"
                                                        width="22"
                                                        height="11"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.333374 17.3281H21.4532V27.1601H0.333374V17.3281Z"
                                                            fill="white"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask0_14_2)">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M10.8946 19.3281C5.21324 19.3281 2.33324 20.3041 2.33324 22.2308C2.33324 24.1748 5.21324 25.1601 10.8946 25.1601C16.5746 25.1601 19.4532 24.1841 19.4532 22.2574C19.4532 20.3134 16.5746 19.3281 10.8946 19.3281ZM10.8946 27.1601C8.28258 27.1601 0.333252 27.1601 0.333252 22.2308C0.333252 17.8361 6.36125 17.3281 10.8946 17.3281C13.5066 17.3281 21.4532 17.3281 21.4532 22.2575C21.4532 26.6521 15.4266 27.1601 10.8946 27.1601Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <mask
                                                        id="mask1_14_2"
                                                        //style="mask-type: alpha"
                                                        maskUnits="userSpaceOnUse"
                                                        x="3"
                                                        y="0"
                                                        width="15"
                                                        height="15"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M3.81317 0.666748H17.9732V14.8249H3.81317V0.666748Z"
                                                            fill="white"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask1_14_2)">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M10.8946 2.57032C8.03994 2.57032 5.71727 4.89165 5.71727 7.74632C5.70794 10.5917 8.01327 12.9116 10.8559 12.9223L10.8946 13.8743V12.9223C13.7479 12.9223 16.0693 10.5996 16.0693 7.74632C16.0693 4.89165 13.7479 2.57032 10.8946 2.57032ZM10.8945 14.8249H10.8519C6.95588 14.8129 3.79988 11.6356 3.81321 7.74226C3.81321 3.84226 6.98921 0.66626 10.8945 0.66626C14.7985 0.66626 17.9732 3.84226 17.9732 7.74626C17.9732 11.6503 14.7985 14.8249 10.8945 14.8249Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="a-login m-header-right__item">
                                            <Link
                                                to="/"
                                                onClick={() => {
                                                    dispatch(logoutUser(null))
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <defs></defs>
                                                    <title />
                                                    <g id="logout">
                                                        <line
                                                            fill="none"
                                                            stroke="white"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2px"
                                                            x1="15.92"
                                                            x2="28.92"
                                                            y1="16"
                                                            y2="16"
                                                        />
                                                        <path
                                                            fill="none"
                                                            stroke="white"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2px"
                                                            d="M23.93,25v3h-16V4h16V7h2V3a1,1,0,0,0-1-1h-18a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V25Z"
                                                        />
                                                        <line
                                                            fill="none"
                                                            stroke="white"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2px"
                                                            x1="28.92"
                                                            x2="24.92"
                                                            y1="16"
                                                            y2="20"
                                                        />
                                                        <line
                                                            fill="none"
                                                            stroke="white"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2px"
                                                            x1="28.92"
                                                            x2="24.92"
                                                            y1="16"
                                                            y2="12"
                                                        />
                                                        <line
                                                            fill="none"
                                                            stroke="white"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2px"
                                                            x1="24.92"
                                                            x2="24.92"
                                                            y1="8.09"
                                                            y2="6.09"
                                                        />
                                                        <line
                                                            fill="none"
                                                            stroke="white"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2px"
                                                            x1="24.92"
                                                            x2="24.92"
                                                            y1="26"
                                                            y2="24"
                                                        />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <div className="a-login m-header-right__item">
                                        <Link
                                            to={{
                                                pathname: `${location.pathname}`,
                                                search: '?auth=login',
                                                // This is the trick! This link sets
                                                // the `background` in location state.
                                            }}
                                            className="login-link a-btn-circle"
                                        >
                                            <svg
                                                width="22"
                                                height="28"
                                                viewBox="0 0 22 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask
                                                    id="mask0_14_2"
                                                    //style="mask-type: alpha"
                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="17"
                                                    width="22"
                                                    height="11"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0.333374 17.3281H21.4532V27.1601H0.333374V17.3281Z"
                                                        fill="white"
                                                    />
                                                </mask>
                                                <g mask="url(#mask0_14_2)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M10.8946 19.3281C5.21324 19.3281 2.33324 20.3041 2.33324 22.2308C2.33324 24.1748 5.21324 25.1601 10.8946 25.1601C16.5746 25.1601 19.4532 24.1841 19.4532 22.2574C19.4532 20.3134 16.5746 19.3281 10.8946 19.3281ZM10.8946 27.1601C8.28258 27.1601 0.333252 27.1601 0.333252 22.2308C0.333252 17.8361 6.36125 17.3281 10.8946 17.3281C13.5066 17.3281 21.4532 17.3281 21.4532 22.2575C21.4532 26.6521 15.4266 27.1601 10.8946 27.1601Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <mask
                                                    id="mask1_14_2"
                                                    //style="mask-type: alpha"
                                                    maskUnits="userSpaceOnUse"
                                                    x="3"
                                                    y="0"
                                                    width="15"
                                                    height="15"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.81317 0.666748H17.9732V14.8249H3.81317V0.666748Z"
                                                        fill="white"
                                                    />
                                                </mask>
                                                <g mask="url(#mask1_14_2)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M10.8946 2.57032C8.03994 2.57032 5.71727 4.89165 5.71727 7.74632C5.70794 10.5917 8.01327 12.9116 10.8559 12.9223L10.8946 13.8743V12.9223C13.7479 12.9223 16.0693 10.5996 16.0693 7.74632C16.0693 4.89165 13.7479 2.57032 10.8946 2.57032ZM10.8945 14.8249H10.8519C6.95588 14.8129 3.79988 11.6356 3.81321 7.74226C3.81321 3.84226 6.98921 0.66626 10.8945 0.66626C14.7985 0.66626 17.9732 3.84226 17.9732 7.74626C17.9732 11.6503 14.7985 14.8249 10.8945 14.8249Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>
                                )}

                                <div className="a-cart m-header-right__item">
                                    <button
                                        //to={{
                                        //    pathname: 'cart',
                                        //    // This is the trick! This link sets
                                        //    // the `background` in location state.
                                        //    state: { background: location },
                                        //}}
                                        onClick={() => {
                                            dispatch(toggleCart())
                                        }}
                                        className="a-cart-link e--cart"
                                    >
                                        <svg
                                            width="32"
                                            height="31"
                                            viewBox="0 0 32 31"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 3.875C17.3261 3.875 18.5979 4.38532 19.5355 5.2937C20.4732 6.20208 21 7.43411 21 8.71875V9.6875H11V8.71875C11 7.43411 11.5268 6.20208 12.4645 5.2937C13.4021 4.38532 14.6739 3.875 16 3.875ZM23 9.6875V8.71875C23 6.92025 22.2625 5.19541 20.9497 3.92368C19.637 2.65195 17.8565 1.9375 16 1.9375C14.1435 1.9375 12.363 2.65195 11.0503 3.92368C9.7375 5.19541 9 6.92025 9 8.71875V9.6875H2V25.1875C2 26.2152 2.42143 27.2008 3.17157 27.9275C3.92172 28.6542 4.93913 29.0625 6 29.0625H26C27.0609 29.0625 28.0783 28.6542 28.8284 27.9275C29.5786 27.2008 30 26.2152 30 25.1875V9.6875H23ZM4 11.625H28V25.1875C28 25.7014 27.7893 26.1942 27.4142 26.5575C27.0391 26.9209 26.5304 27.125 26 27.125H6C5.46957 27.125 4.96086 26.9209 4.58579 26.5575C4.21071 26.1942 4 25.7014 4 25.1875V11.625Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M10 15.5V23.25"
                                                stroke="white"
                                            />
                                            <path
                                                d="M16 15.5V23.25"
                                                stroke="white"
                                            />
                                            <path
                                                d="M22 15.5V23.25"
                                                stroke="white"
                                            />
                                        </svg>
                                        <span
                                            className={`count ${
                                                change ? 'active' : ''
                                            }`}
                                        >
                                            {totalCount}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderMenu burgerActive={burgerActive} />
            </header>
            {burgerActive ? (
                <div
                    className={`overlay ${burgerActive ? 'burger-active' : ''}`}
                    onClick={() =>
                        setBurgerActive((burgerActive) => !burgerActive)
                    }
                ></div>
            ) : (
                ''
            )}
        </>
    )
}

export default Header
