import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { addItem } from '../../../redux/slices/cart/cartSlice'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

const AdditionCartItem = ({ id, image, name, weight, price, productType }) => {
    const dispatch = useDispatch()
    const onClickAdd = () => {
        const item = {
            id,
            name,
            weight,
            price,
            image,
            productType,
        }
        dispatch(addItem(item))
    }
    return (
        <div className="m-additions-item__inner">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="m-additions-item__desc">
                <div className="name">{name}</div>
                <div className="weight">{weight} мл.</div>
                <div className="bottom">
                    <div className="price">{price} грн</div>
                    <button className="plus-btn" onClick={onClickAdd}>
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.04384 1.25875L8.04384 14.8289M1.25879 8.0438L14.8289 8.0438L1.25879 8.0438Z"
                                stroke="#F2F2F2"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

AdditionCartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    productType: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
}

export default AdditionCartItem
