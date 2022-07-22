/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'
//import { login } from '../../http/userAPI'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, loginUser } from '../../redux/slices/auth/authSlice'

const Login = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [passwordRepeat, setPasswordRepeat] = useState({
        password: '',
        statusPassword: true,
    })
    const [passwordShow, setPasswordShow] = useState({
        loginPassword: false,
        registrationPassword: false,
        repeatPassword: false,
    })
    const [login, setLogin] = useState({ email: '', password: '' })
    let [searchParams, setSearchParams] = useSearchParams()
    const handleDeleteParams = () => {
        setSearchParams([])
    }
    let paramsAuth = searchParams.get('auth')
    const changeParamsLogin = () => {
        paramsAuth = 'auth=login'
        setSearchParams(paramsAuth)
    }
    const changeParamsReg = () => {
        paramsAuth = 'auth=registration'
        setSearchParams(paramsAuth)
    }

    //const [password, setPassword] = useState('')
    //const signIn = async () => {
    //    const response = await registrstion(email, password)
    //    console.log(response)
    //}
    //const logIn = async () => {
    //    const response = await login()
    //    console.log(response)
    //}
    const handleSubmitReg = (e) => {
        e.preventDefault()
        if (passwordRepeat.password === user.password) {
            dispatch(registerUser(user))
        } else {
            setPasswordRepeat({ ...passwordRepeat, statusPassword: false })
        }
    }
    const handleSubmitLog = (e) => {
        e.preventDefault()
        dispatch(loginUser(login))
    }
    useEffect(() => {
        if (auth.id) {
            navigate('/profile', { replace: true })
        }
    }, [auth.id, navigate])

    return (
        <>
            <div className={`modal-overlay`} onClick={handleDeleteParams}></div>
            <div className="o-login">
                <div className="m-login-top">
                    <div className="m-login-title">
                        <div className="title">Мій акаунт</div>
                    </div>
                    <button
                        className="a-btn-close login-close"
                        onClick={handleDeleteParams}
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
                <div className="m-login-content">
                    <div className="m-login-tabs">
                        <ul>
                            <li
                                className={`${
                                    paramsAuth === 'login' ? 'active' : ''
                                }`}
                                onClick={changeParamsLogin}
                            >
                                Вхід
                            </li>
                            <li
                                className={`${
                                    paramsAuth === 'registration'
                                        ? 'active'
                                        : ''
                                }`}
                                onClick={changeParamsReg}
                            >
                                Реєстрація
                            </li>
                        </ul>
                    </div>
                    <div className="m-login-forms">
                        <form
                            onSubmit={handleSubmitLog}
                            className={`m-login-forms__item login ${
                                paramsAuth === 'login' ? 'active' : ''
                            }`}
                        >
                            <div className="input">
                                <label>
                                    <input
                                        type="email"
                                        value={login.email}
                                        className={`${
                                            login.email.length > 0
                                                ? 'filled'
                                                : ''
                                        }`}
                                        onChange={(e) =>
                                            setLogin({
                                                ...login,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                    <span className="label">Email</span>
                                </label>
                            </div>
                            <div className="input">
                                <label>
                                    <div className="input-inner">
                                        <input
                                            type={
                                                passwordShow.loginPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            value={login.password}
                                            className={`${
                                                login.password.length > 0
                                                    ? 'filled'
                                                    : ''
                                            }`}
                                            onChange={(e) =>
                                                setLogin({
                                                    ...login,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                        <span className="label">Пароль</span>
                                        <button
                                            type="button"
                                            className="password-control"
                                            onClick={() =>
                                                setPasswordShow({
                                                    ...passwordShow,
                                                    loginPassword:
                                                        !passwordShow.loginPassword,
                                                })
                                            }
                                        ></button>
                                    </div>
                                </label>
                            </div>
                            <div className="m-login-forms__bottom">
                                <a href="">Забули пароль?</a>
                            </div>

                            <button
                                style={{ width: '100%' }}
                                className="a-btn e--gold"

                                //onClick={signIn}
                            >
                                {auth.loginStatus === 'pending'
                                    ? 'Вхід.....'
                                    : ' Увійти'}
                            </button>
                            {auth.loginStatus === 'rejected' ? (
                                <p className="login-error">{auth.loginError}</p>
                            ) : null}
                        </form>
                        <form
                            onSubmit={handleSubmitReg}
                            method="post"
                            className={`m-login-forms__item registration ${
                                paramsAuth === 'registration' ? 'active' : ''
                            }`}
                        >
                            <div className="input">
                                <label>
                                    <input
                                        type="text"
                                        value={user.name}
                                        className={`${
                                            user.name.length > 0 ? 'filled' : ''
                                        }`}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                    <span className="label">Ім'я</span>
                                </label>
                            </div>
                            <div className="input">
                                <label>
                                    <input
                                        type="email"
                                        value={user.email}
                                        className={`${
                                            user.email.length > 0
                                                ? 'filled'
                                                : ''
                                        }`}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                    <span className="label">Email</span>
                                </label>
                            </div>
                            <div className="input">
                                <label>
                                    <div className="input-inner">
                                        <input
                                            type={
                                                passwordShow.registrationPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            value={user.password}
                                            className={`${
                                                user.password.length > 0
                                                    ? 'filled'
                                                    : ''
                                            }`}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                        <span className="label">Пароль</span>
                                        <button
                                            type="button"
                                            className="password-control"
                                            onClick={() =>
                                                setPasswordShow({
                                                    ...passwordShow,
                                                    registrationPassword:
                                                        !passwordShow.registrationPassword,
                                                })
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
                                            required
                                            value={passwordRepeat.password}
                                            className={`${
                                                passwordRepeat.password.length >
                                                0
                                                    ? 'filled'
                                                    : ''
                                            }`}
                                            onChange={(e) =>
                                                setPasswordRepeat({
                                                    statusPassword: true,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                        <span className="label">
                                            Повторити пароль
                                        </span>
                                        <button
                                            type="button"
                                            className="password-control"
                                            onClick={() =>
                                                setPasswordShow({
                                                    ...passwordShow,
                                                    repeatPassword:
                                                        !passwordShow.repeatPassword,
                                                })
                                            }
                                        ></button>
                                    </div>
                                </label>
                            </div>
                            <div className="m-login-forms__bottom">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="" id="" />
                                        <span></span>
                                        <p>
                                            Даю згоду на обробку персональних
                                            даних
                                            {/*<a href="#">персональних даних</a>*/}
                                        </p>
                                    </label>
                                </div>
                            </div>
                            <button
                                style={{ width: '100%' }}
                                className="a-btn e--gold"

                                //onClick={signIn}
                            >
                                {auth.registerStatus === 'pending'
                                    ? 'Відправлення'
                                    : ' Реєстрація'}
                            </button>
                            {!passwordRepeat.statusPassword ? (
                                <p className="login-error">
                                    Паролі не збігаються
                                </p>
                            ) : null}
                            {auth.registerStatus === 'rejected' ? (
                                <p className="login-error">
                                    {auth.registerError}
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.propTypes = {
    params: PropTypes.string,
}

export default Login
