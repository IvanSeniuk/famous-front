const Subscription = () => {
    return (
        <section className="o-subscription">
            <div className="container">
                <div className="m-subscription d-flex flex-column flex-md-row align-items-md-center">
                    <div className="m-subscription-top">
                        <div className="a-section-title">
                            <h3>БУДЬТЕ В КУРСІ</h3>
                        </div>
                        <p className="text">
                            Дізнавайтеся про вигідні пропозиції та отримайте
                            персональні пропозиції
                        </p>
                    </div>
                    <div className="m-subscription-center">
                        <div className="img">
                            <img src="../../img/subscr_bg.svg" alt="" />
                        </div>
                    </div>
                    <div className="m-subscription-bottom">
                        <form action="">
                            <div className="input-submit">
                                <input type="email" placeholder="Email" />
                                <a href="#" type="submit">
                                    <svg
                                        width="44"
                                        height="28"
                                        viewBox="0 0 44 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="42.9785"
                                            y="27.5"
                                            width="27"
                                            height="27"
                                            rx="13.5"
                                            transform="rotate(180 42.9785 27.5)"
                                            stroke="#E1E1E1"
                                            strokeOpacity="0.21"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M-0.000248323 13.7586C-0.000248312 13.8827 0.0490261 14.0016 0.136734 14.0893C0.224437 14.177 0.343391 14.2263 0.467424 14.2263L30.8083 14.2263L27.8648 17.1689C27.8213 17.2124 27.7868 17.264 27.7633 17.3208C27.7397 17.3776 27.7276 17.4385 27.7276 17.5C27.7276 17.5615 27.7397 17.6224 27.7633 17.6792C27.7868 17.736 27.8213 17.7876 27.8648 17.8311C27.9082 17.8746 27.9599 17.9091 28.0167 17.9326C28.0735 17.9562 28.1344 17.9683 28.1959 17.9683C28.2574 17.9683 28.3183 17.9562 28.3751 17.9326C28.4319 17.9091 28.4835 17.8746 28.527 17.8311L32.2684 14.0897C32.3119 14.0463 32.3465 13.9947 32.37 13.9379C32.3936 13.881 32.4058 13.8201 32.4058 13.7586C32.4058 13.6971 32.3936 13.6362 32.37 13.5794C32.3465 13.5226 32.3119 13.4709 32.2684 13.4275L28.527 9.68613C28.4835 9.64264 28.4319 9.60815 28.3751 9.58462C28.3183 9.56109 28.2574 9.54898 28.1959 9.54898C28.1344 9.54898 28.0735 9.56109 28.0167 9.58462C27.9599 9.60815 27.9082 9.64264 27.8648 9.68613C27.8213 9.72961 27.7868 9.78123 27.7633 9.83804C27.7397 9.89485 27.7276 9.95575 27.7276 10.0172C27.7276 10.0787 27.7397 10.1396 27.7633 10.1964C27.7868 10.2532 27.8213 10.3049 27.8648 10.3484L30.8083 13.2909L0.467424 13.2909C0.343391 13.2909 0.224437 13.3402 0.136734 13.4279C0.0490261 13.5156 -0.000248334 13.6346 -0.000248323 13.7586Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="agreement mt-3">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="" id="" />
                                        <span></span>
                                        <p>
                                            Даю згоду на обробку
                                            <a href="#">персональних даних</a>
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscription
