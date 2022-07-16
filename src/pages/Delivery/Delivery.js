import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Delivery = () => {
    const dataContacts = useSelector((state) => state.contacts)
    return (
        <>
            <div className="m-breadcrumbs">
                <div className="container">
                    <nav className="m-breadcrumbs-list">
                        <Link to="/">Головна</Link>
                        Доставка
                    </nav>
                </div>
            </div>

            <section className="o-delivery">
                <div className="m-delivery-top">
                    <div className="container">
                        <div className="m-section-top row justify-content-lg-end pt-lg-2">
                            <div className="a-section-title col-lg-11 pt-3 pt-lg-4">
                                <h1>Доставка</h1>
                            </div>
                        </div>
                    </div>
                    <div className="line-bg"></div>
                    <div className="container">
                        <div className="row justify-content-md-end">
                            <div className="col-12 col-md-6 col-lg-5 mt-md-3">
                                <div className="item green">
                                    <div className="title">зелена зона</div>
                                    <div className="subtitle">
                                        В межах міста до 55 хвилин
                                    </div>
                                </div>
                                <div className="item yellow">
                                    <div className="title">Жовта зона</div>
                                    <div className="subtitle">
                                        За містом до 120 хвилин
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-4 mt-md-3">
                                <div className="m-map">
                                    <div className="map">
                                        <iframe
                                            src={`${dataContacts.item.map}`}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-delivery-bottom pb-4 pb-md-4 pt-md-4 pb-lg-5 pt-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7 col-xl-6 order-2 order-md-1 item-text">
                                <p className="a-text">
                                    {/*Американская пицца — близкая родственница классического
						итальянского блюда, отличающаяся от него щедростью теста
						и начинки. На пышной ароматной основе равномерно
						распределяются самые свежие ингредиенты: сыр, бекон,
						грудинка, мясные шарики. Дополняют их сладкий или острый
						перчик, шампиньоны. А объединяет основу и начинку
						секретный томатный соус.*/}
                                    {dataContacts.item.text_delivery}
                                </p>
                            </div>
                            <div className="col-10 col-md-4 col-xl-3 order-1 order-md-2 item-img mb-2 mb-md-0 pt-md-4 pb-md-4">
                                <div className="img">
                                    <img
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            dataContacts.item.img
                                        }
                                        alt="delivery_img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Delivery
