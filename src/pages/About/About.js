import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../http/axios'

const About = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('api/about/1')
                setData(data)
            } catch (error) {
                alert('Помилка при отриманні даних сторінки')
                navigate('/')
            }
        }

        fetchData()
    }, [navigate])
    return (
        <>
            <div className="m-breadcrumbs">
                <div className="container">
                    <nav className="m-breadcrumbs-list">
                        <Link to="/">Головна</Link>
                        Про нас
                    </nav>
                </div>
            </div>

            <section className="o-about">
                <div className="m-about-top">
                    <div className="container">
                        <div className="bg">
                            <svg
                                width="474"
                                height="435"
                                viewBox="0 0 474 435"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.0478467 60.9973C28.0535 46.768 57.5433 36.3176 87.9905 28.3865C91.7725 27.4068 94.1182 25.9137 95.6023 22.0881C97.9959 15.8832 101.347 10.0051 104.124 3.94013C105.225 1.5608 106.757 0.580968 109.485 0.627622C118.821 0.767582 128.204 0.767582 137.539 0.627622C140.842 0.580968 141.608 1.56058 140.651 4.59306C139.741 7.43893 139.502 10.4247 138.64 13.3173C137.683 16.6763 138.401 17.6095 142.135 16.9564C159.273 13.8306 176.508 11.2647 193.79 9.1186C227.875 4.87313 262.152 2.40058 296.477 1.04763C342.914 -0.77186 389.303 -0.11871 435.692 2.21397C445.41 2.6805 455.08 3.66001 464.751 4.03324C468.102 4.1732 469.394 5.33951 470.256 8.37199C473.511 19.9887 474.469 31.8389 473.799 43.7822C472.65 64.3097 468.628 84.0908 456.852 101.726C447.947 115.115 447.995 115.022 432.915 110.03C378.388 92.022 322.616 79.8919 265.264 74.5734C220.359 70.3746 175.454 70.3279 130.55 74.5734C126.959 74.9 126.193 76.3929 125.762 79.2854C120.4 112.783 117.145 146.42 116.523 180.291C116.475 183.416 116.81 184.583 120.64 183.696C191.444 166.761 263.301 164.475 335.637 169.187C342.818 169.653 349.999 170.306 357.18 170.773C359.957 170.96 361.92 171.613 362.398 174.739C367.808 208.143 366.42 240.8 350.574 271.685C345.643 281.295 345.308 281.109 335.111 276.584C277.902 251.017 218.061 237.255 154.917 238.328C144.337 238.514 133.709 239.634 123.129 240.054C119.204 240.194 118.438 241.873 118.725 245.326C121.023 274.531 125.188 303.503 131.172 332.194C138.257 366.205 147.64 399.655 159.465 432.36C160.709 435.765 160.135 437.631 157.358 439.917C140.555 453.587 120.783 459.699 99.48 461.985C84.5915 463.571 69.703 463.524 54.9581 460.212C49.6921 458.999 47.6336 457.179 47.2027 451.348C43.6601 399.842 42.3197 348.336 44.3303 296.784C44.8569 283.815 45.575 270.845 46.4367 257.922C46.6761 254.19 45.7666 253.443 42.1282 254.703C35.1866 257.082 28.0056 258.855 21.0641 261.234C17.6172 262.401 16.2768 262.214 16.3725 258.155C16.6119 249.058 16.564 239.914 16.3725 230.816C16.3247 228.204 17.33 226.664 19.5322 225.311C28.0057 219.993 36.4792 214.628 45.6708 210.615C50.2666 208.609 51.3198 205.53 51.7507 201.285C54.9103 170.027 60.0327 139.095 67.0221 108.444C68.7456 100.933 70.5647 93.4215 72.719 86.0036C73.7722 82.3646 73.9637 81.0583 69.1286 81.898C45.958 86.0035 22.9311 90.6224 0 95.801C0.047873 84.1376 0.0478467 72.5674 0.0478467 60.9973Z"
                                    fill="url(#paint0_linear_87_2740)"
                                    fillOpacity="0.1"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_87_2740"
                                        x1="132.786"
                                        y1="-1361.64"
                                        x2="3656.19"
                                        y2="-257.76"
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
                                        <stop offset="1" stopColor="#B78624" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-9 item">
                                <div className="titles">
                                    <h1 className="title">
                                        {/*<span className="e--gold">FAMOUS</span>{' '}
                                        sushi&pizza - доставка суші та піци у
                                        Львові та за межами Львова .*/}
                                        {data.title}
                                    </h1>
                                    <p className="subtitle">{data.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-about-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 col-md-3 d-flex align-items-center justify-content-center">
                                {/*<div className="scroll-down">
                                    <a href="#">
                                        <svg
                                            width="21"
                                            height="77"
                                            viewBox="0 0 21 77"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.4062 4.53405e-05C10.1124 4.53533e-05 9.83055 0.116783 9.62278 0.324554C9.41501 0.532325 9.29828 0.814125 9.29828 1.10796L9.29828 72.9851L2.32731 66.012C2.2243 65.9089 2.10201 65.8272 1.96742 65.7715C1.83283 65.7157 1.68858 65.687 1.5429 65.687C1.39723 65.687 1.25298 65.7157 1.11839 65.7715C0.983801 65.8272 0.861512 65.9089 0.758503 66.012C0.655494 66.115 0.573783 66.2373 0.518035 66.3718C0.462287 66.5064 0.433593 66.6507 0.433593 66.7964C0.433593 66.942 0.462287 67.0863 0.518035 67.2209C0.573783 67.3555 0.655494 67.4777 0.758503 67.5808L9.62179 76.444C9.72471 76.5472 9.84697 76.6291 9.98157 76.6849C10.1162 76.7408 10.2605 76.7695 10.4062 76.7695C10.5519 76.7695 10.6962 76.7408 10.8308 76.6849C10.9654 76.6291 11.0877 76.5472 11.1906 76.444L20.0539 67.5808C20.1569 67.4777 20.2386 67.3555 20.2943 67.2209C20.3501 67.0863 20.3788 66.942 20.3788 66.7964C20.3788 66.6507 20.3501 66.5064 20.2943 66.3718C20.2386 66.2372 20.1569 66.115 20.0539 66.012C19.9509 65.9089 19.8286 65.8272 19.694 65.7715C19.5594 65.7157 19.4152 65.687 19.2695 65.687C19.1238 65.687 18.9796 65.7157 18.845 65.7715C18.7104 65.8272 18.5881 65.9089 18.4851 66.012L11.5141 72.9851L11.5141 1.10796C11.5141 0.814125 11.3974 0.532325 11.1896 0.324554C10.9818 0.116783 10.7 4.53276e-05 10.4062 4.53405e-05Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </div>*/}
                            </div>
                            <div className="col-10 col-md-9">
                                <div className="img">
                                    {data.img1 ? (
                                        <img
                                            src={
                                                process.env.REACT_APP_API_URL +
                                                data.img1
                                            }
                                            alt="about_img1"
                                        />
                                    ) : (
                                        <img
                                            src="/image/placeholder.webp"
                                            alt="about_img1"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text">{data.text1}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-about-bottom pb-5 pt-5 pt-md-0">
                    <div className="container pb-md-3 pb-lg-4 pb-xl-5">
                        <div className="row align-items-center justify-content-between">
                            <div className="left col-12 col-md-4 col-lg-3">
                                <div className="img">
                                    {data.img2 ? (
                                        <img
                                            src={
                                                process.env.REACT_APP_API_URL +
                                                data.img2
                                            }
                                            alt="about_img2"
                                        />
                                    ) : (
                                        <img
                                            src="/image/placeholder.webp"
                                            alt="about_img1"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="right col-12 col-md-8">
                                <div className="img">
                                    {data.img3 ? (
                                        <img
                                            src={
                                                process.env.REACT_APP_API_URL +
                                                data.img3
                                            }
                                            alt="about_img3"
                                        />
                                    ) : (
                                        <img
                                            src="/image/placeholder.webp"
                                            alt="about_img1"
                                        />
                                    )}
                                </div>
                                <div className="text">{data.text2}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
