import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRef, useEffect } from 'react'

import { addItem } from '../../redux/slices/cart/cartSlice'
import { changeItemWishlist } from '../../redux/slices/wishlist/wishlistSlice'

const ProductCard = ({
    photo_origin,
    product_name,
    price,
    product_id,
    out,
    ingredients,
    menu_category_id,
    wishlistCheck,
}) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    //const wishlistAdded = useSelector((state) =>
    //    )
    //)
    const wishlist = useSelector((state) => state.wishlist.items)
    const isMountedWish = useRef(false)
    useEffect(() => {
        if (isMountedWish.current) {
            const json = JSON.stringify(wishlist)
            localStorage.setItem('wishlist', json)
        }
        isMountedWish.current = true
    }, [wishlist])
    const onClickAdd = () => {
        const item = {
            product_id,
            product_name,
            weight: out,
            price: price['1'] / 100,
            image: photo_origin,
            menu_category_id,
        }
        dispatch(addItem(item))
    }
    const navigate = useNavigate()
    const onClickWishlist = () => {
        if (auth.userLoaded) {
            const item = {
                photo_origin,
                product_name,
                price,
                product_id,
                out,
                ingredients,
                menu_category_id,
            }
            dispatch(changeItemWishlist(item))
        } else {
            navigate(`${location.pathname}?auth=login`)
        }
    }

    return (
        <div className="col-12 col-sm-6 col-lg-4 m-product-card__wrapper">
            <div className="m-product-card">
                <div className="m-product-card__inner d-flex flex-wrap flex-sm-column">
                    <div className="m-product-card__item left image">
                        <div className="m-product-card__img">
                            <img
                                src={
                                    process.env.REACT_APP_POSTER_API_URL +
                                    photo_origin
                                }
                                alt={product_name}
                            />
                        </div>
                    </div>
                    <div className="m-product-card__item right desc">
                        <div className="m-product-card__title">
                            {wishlistCheck === 'true' ? (
                                <button
                                    className="remove-card"
                                    onClick={onClickWishlist}
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
                                        ></path>
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    className={`${
                                        wishlist.find(
                                            (obj) =>
                                                obj.product_id === product_id
                                        )
                                            ? 'add-to-wishlist active'
                                            : 'add-to-wishlist'
                                    } `}
                                    onClick={onClickWishlist}
                                >
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.0005 22.75L12.5435 22.4453C10.371 20.9945 7.62225 19.3548 5.58643 16.9447C3.44093 14.4056 2.41159 11.798 2.438 8.97203C2.46999 5.81648 5.00042 3.25 8.07878 3.25C10.5219 3.25 12.1464 4.67188 13.0005 5.69816C13.8546 4.67188 15.4791 3.25 17.9222 3.25C21.0006 3.25 23.531 5.81648 23.563 8.97051C23.5914 11.798 22.5621 14.4041 20.4146 16.9432C18.3787 19.3548 15.6299 20.9945 13.4575 22.4453L13.0005 22.75Z"
                                            fill="#878787"
                                            fillOpacity="0.4"
                                        />
                                    </svg>
                                </button>
                            )}

                            <div className="name">{product_name}</div>

                            <div className="weight">
                                {out > 0 && <span>{out} г</span>}
                                {/*{() => {
                                    if (out != null) {
                                        return out + ' г.'
                                    }
                                }}*/}
                            </div>
                        </div>
                        <div className="description">
                            {ingredients?.map((item) => (
                                <span key={item.ingredient_id}>
                                    {item.ingredient_name},{' '}
                                </span>
                            ))}
                        </div>
                        <div className="m-product-card__bottom">
                            <div className="price">{price['1'] / 100} грн</div>
                            <div className="add-to-cart">
                                <button
                                    className="a-btn add-to-cart-btn"
                                    onClick={onClickAdd}
                                >
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
                                        <span>в кошик</span>
                                    </span>
                                </button>
                                {/*<div className="quantity">
                                    <button>-</button>
                                    <input type="text" value={addedCount} />

                                    <button>+</button>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product_id: PropTypes.string,
    photo_origin: PropTypes.string,
    price: PropTypes.object,
    out: PropTypes.number,
    product_name: PropTypes.string,
    ingredients: PropTypes.array,
    menu_category_id: PropTypes.string,
    wishlistCheck: PropTypes.string,
}

export default ProductCard
