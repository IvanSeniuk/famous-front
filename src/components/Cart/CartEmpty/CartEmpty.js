import { toggleCart } from '../../../redux/slices/ui/uiSlice'
import { useDispatch } from 'react-redux'

const CartEmpty = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="m-cart-top">
                <div className="m-cart-title">
                    <div className="title">Корзина</div>
                </div>
                <button
                    className="a-btn-close cart-close"
                    onClick={() => {
                        dispatch(toggleCart())
                    }}
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
        </>
    )
}

export default CartEmpty
