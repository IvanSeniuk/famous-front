import PropTypes from 'prop-types'
//import React from 'react'
import { useState } from 'react'
//import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
//import { addItem } from '../../redux/slices/cart/cartSlice'
//import { toggleModalPizza } from '../../redux/slices/ui/uiSlice'

const ProductCardPizza = ({
    photo_origin,
    product_name,
    price,
    product_id,
    out,
    ingredients,
    group_modifications,
}) => {
    const [activeType, setActiveType] = useState(0)
    const [activeSide, setActiveSide] = useState(0)
    //const [activeType, setactiveType] = React.useState(0)
    //const [activeSide, setactiveSide] = React.useState(0)
    //const location = useLocation()
    //const dispatch = useDispatch()

    //const onClickAdd = () => {
    //    const adds = config.sidePrice[activeSide] + config.sizePrice[activeType]
    //    const addsWeight =
    //        weight * config.sideWeight[activeSide] +
    //        weight * config.sizeWeight[activeType]

    //    const item = {
    //        id,
    //        name,
    //        weight: addsWeight,
    //        weightSide: config.sideWeight[activeSide],
    //        weightSize: config.sideWeight[activeType],
    //        priceSide: config.sidePrice[activeSide],
    //        priceSize: config.sizePrice[activeType],
    //        price: price + adds,
    //        image,
    //        productType,
    //        size: config.size[activeType],
    //        side: config.sides[activeSide],
    //        count: 0,
    //    }
    //    dispatch(addItem(item))
    //}

    let [searchParams, setSearchParams] = useSearchParams()
    searchParams.get('product')
    const handleParams = () => {
        setSearchParams({ product: product_id })
    }
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4 m-product-card__wrapper">
                <div className="m-product-card pizza">
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
                                {/*<img src={image2} alt={name} />*/}
                            </div>
                        </div>
                        <div className="m-product-card__item right desc">
                            <div className="m-product-card__title">
                                <button className="add-to-wishlist">
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
                                <div className="name">{product_name}</div>
                                <div className="weight">
                                    {out +
                                        group_modifications[1].modifications[
                                            activeSide
                                        ].brutto +
                                        group_modifications[0].modifications[
                                            activeType
                                        ].brutto}
                                    {''}
                                    г.
                                </div>
                            </div>
                            <div className="description">
                                {ingredients.map((item) => (
                                    <span key={item.ingredient_id}>
                                        {item.ingredient_name},{' '}
                                    </span>
                                ))}
                            </div>
                            <div className="sides m-product-card__options">
                                <ul>
                                    {group_modifications[1].modifications.map(
                                        (side, i) => (
                                            <li
                                                onClick={() => {
                                                    {
                                                        setActiveSide(i)
                                                    }
                                                }}
                                                key={side.dish_modification_id}
                                                className={
                                                    activeSide === i
                                                        ? 'active'
                                                        : ''
                                                }
                                            >
                                                <span className="inner">
                                                    {side.name}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="m-product-card__item bottom left">
                            <div className="sizes m-product-card__options">
                                <ul>
                                    {group_modifications[0].modifications.map(
                                        (size, i) => (
                                            <li
                                                onClick={() => {
                                                    {
                                                        setActiveType(i)
                                                    }
                                                }}
                                                key={size.dish_modification_id}
                                                className={
                                                    activeType === i
                                                        ? 'active'
                                                        : ''
                                                }
                                            >
                                                <span className="inner">
                                                    {size.name}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="m-product-card__item bottom right">
                            <div className="m-product-card__bottom">
                                <div className="price">
                                    {price['1'] / 100 +
                                        group_modifications[1].modifications[
                                            activeSide
                                        ].price +
                                        group_modifications[0].modifications[
                                            activeType
                                        ].price}
                                    грн
                                </div>
                                <div className="add-to-cart">
                                    <button
                                        type="button"
                                        onClick={handleParams}
                                        //to={{
                                        //    path: location.pathname,
                                        //    search: `?product=${id}`,
                                        //}}
                                        className="a-btn add-to-cart-btn"
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
                                    {/*<button
                                        className="a-btn add-to-cart-btn"
                                        //onClick={onClickAdd}
                                        onClick={() => {
                                            //{
                                            //    dispatch(toggleModalPizza())
                                            //}

                                            onClickAdd()
                                        }}
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
                                    </button>*/}
                                    {/*<div className="quantity">
                                        <button>-</button>
                                        <input type="text" defaultValue={1} />
                                        <button>+</button>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

ProductCardPizza.propTypes = {
    photo_origin: PropTypes.string,
    product_name: PropTypes.string,
    price: PropTypes.object,
    product_id: PropTypes.string,
    out: PropTypes.number,
    ingredients: PropTypes.array,
    group_modifications: PropTypes.array,
}

export default ProductCardPizza
