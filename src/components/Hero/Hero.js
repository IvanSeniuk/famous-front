import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchBanners } from '../../redux/slices/banners/bannersSlice'
import SwiperCore, {
    EffectFade,
    Navigation,
    Pagination,
    Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay])

import ButtonLeft from '../Icons/ButtonLeft.svg'
import ButtonRight from '../Icons/ButtonRight.svg'

const Hero = () => {
    const banners = useSelector((state) => state.banners)
    //console.log(banners)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBanners())
    }, [dispatch])

    return (
        <section className="o-hero">
            <div className="container">
                <Swiper
                    className="o-hero-slider"
                    speed={400}
                    spaceBetween={0}
                    slidesPerView={1}
                    watchOverflow={true}
                    effect={'fade'}
                    centeredSlides={true}
                    initialSlide={0}
                    autoHeight={true}
                    navigation={{
                        nextEl: '.a-slider-next',
                        prevEl: '.a-slider-prev',
                    }}
                    autoplay={{
                        delay: 7000,
                    }}
                    pagination={{
                        el: '.a-slider-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    breakpoints={{
                        992: {
                            pagination: {
                                el: '.a-slider-pagination',
                                type: 'custom',
                                renderCustom: function renderCustom(
                                    swiper,
                                    current,
                                    total
                                ) {
                                    return (
                                        '<span class="current">' +
                                        current +
                                        '</span>' +
                                        '<span class="center">' +
                                        '' +
                                        '</span>' +
                                        '<span class="total">' +
                                        total +
                                        '</span>'
                                    )
                                },
                            },
                        },
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                >
                    {banners.status === 'loaded' ? (
                        banners.items.map((banner) => (
                            <SwiperSlide
                                className="swiper-slide m-hero-slide"
                                key={banner.id}
                            >
                                <div className="m-hero-slide__inner">
                                    <Link to="#">
                                        <img
                                            src={
                                                process.env.REACT_APP_API_URL +
                                                banner.img
                                            }
                                            alt={`banner${banner.id}`}
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide className="swiper-slide m-hero-slide">
                            <div className="m-hero-slide__inner">
                                <Link to="#">
                                    <img
                                        src="/image/placeholder.webp"
                                        alt="img1"
                                    />
                                </Link>
                            </div>
                        </SwiperSlide>
                    )}

                    <div className="a-slider-nav">
                        <div className="a-slider-prev">
                            <img src={ButtonLeft} alt="ButtonLeft" />
                        </div>
                        <div className="a-slider-pagination"></div>

                        <div className="a-slider-next">
                            <img src={ButtonRight} alt="ButtonRight" />
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Hero
