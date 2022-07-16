import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchActions } from '../../redux/slices/actions/actionsSlice'

const Actions = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const actions = useSelector((state) => state.actions)
    const [height, setHeight] = useState('auto')
    const dispatch = useDispatch()
    useEffect(() => {
        if (actions.status === 'loaded') {
            if (document.querySelector('div.active.m-actions-content')) {
                setHeight(
                    document.querySelector('div.active.m-actions-content')
                        .clientHeight
                )
            } else {
                setHeight('auto')
            }
        }
    }, [activeIndex, height, actions])
    useEffect(() => {
        dispatch(fetchActions())
    }, [dispatch])
    return (
        <>
            <div className="m-breadcrumbs">
                <div className="container">
                    <nav className="m-breadcrumbs-list">
                        <Link to="/">Головна</Link>
                        Акції
                    </nav>
                </div>
            </div>
            <section className="o-actions">
                <div className="container">
                    <div className="m-section-top">
                        <div className="a-section-title pb-3 pb-lg-4">
                            <h1>Акції</h1>
                        </div>
                    </div>
                </div>
                <div className="line-bg"></div>
                <div className="container">
                    <div className="m-actions">
                        <ul
                            className="m-actions-list"
                            style={{ minHeight: height }}
                        >
                            {actions.status === 'loaded' &&
                                actions.items.map((item, i) => (
                                    <li
                                        key={item.id}
                                        className={
                                            activeIndex === i
                                                ? 'active m-actions-item'
                                                : 'm-actions-item'
                                        }
                                    >
                                        <button
                                            onClick={() => {
                                                //onClickCategory(i)
                                                setActiveIndex(i)
                                            }}
                                            className={
                                                activeIndex === i
                                                    ? 'active a-btn-arr'
                                                    : 'a-btn-arr'
                                            }
                                        >
                                            <svg
                                                width="46"
                                                height="12"
                                                viewBox="0 0 46 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M-0.000710046 6.13657C-0.000710031 6.30933 0.067924 6.47502 0.190086 6.59718C0.312248 6.71934 0.477932 6.78797 0.650692 6.78797L42.9112 6.78797L38.8113 10.8866C38.7507 10.9471 38.7027 11.019 38.6699 11.0982C38.6371 11.1773 38.6202 11.2621 38.6202 11.3478C38.6202 11.4334 38.6371 11.5182 38.6699 11.5974C38.7027 11.6765 38.7507 11.7484 38.8113 11.809C38.8718 11.8695 38.9437 11.9176 39.0229 11.9504C39.102 11.9831 39.1868 12 39.2725 12C39.3581 12 39.4429 11.9831 39.5221 11.9504C39.6012 11.9176 39.6731 11.8695 39.7337 11.809L44.9449 6.59776C45.0055 6.53725 45.0536 6.46537 45.0865 6.38623C45.1193 6.30709 45.1362 6.22225 45.1362 6.13657C45.1362 6.05089 45.1193 5.96605 45.0865 5.88691C45.0536 5.80777 45.0055 5.73589 44.9449 5.67538L39.7336 0.464169C39.6731 0.403604 39.6012 0.355563 39.5221 0.322786C39.4429 0.290008 39.3581 0.273138 39.2725 0.273138C39.1868 0.273138 39.102 0.290008 39.0229 0.322786C38.9437 0.355563 38.8718 0.403604 38.8113 0.464169C38.7507 0.524733 38.7027 0.596634 38.6699 0.675766C38.6371 0.754897 38.6202 0.839711 38.6202 0.925362C38.6202 1.01101 38.6371 1.09583 38.6699 1.17496C38.7027 1.25409 38.7507 1.32599 38.8113 1.38655L42.9112 5.48517L0.650691 5.48517C0.477931 5.48517 0.312248 5.5538 0.190086 5.67596C0.067924 5.79812 -0.000710061 5.96381 -0.000710046 6.13657Z"
                                                    fill="url(#paint0_linear_87_481)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_87_481"
                                                        x1="109.324"
                                                        y1="5.66233"
                                                        x2="79.4259"
                                                        y2="-55.9708"
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
                                                </defs>
                                            </svg>
                                            <span>{item.title}</span>
                                        </button>
                                        <div
                                            className={
                                                activeIndex === i
                                                    ? 'active m-actions-content'
                                                    : 'm-actions-content'
                                            }
                                        >
                                            <div className="m-actions-img">
                                                <img
                                                    src={
                                                        process.env
                                                            .REACT_APP_API_URL +
                                                        item.img
                                                    }
                                                    alt={item.title}
                                                />
                                            </div>
                                            <h3 className="m-actions-title">
                                                {item.title}
                                            </h3>
                                            <div
                                                className="m-actions-text"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.text,
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Actions
