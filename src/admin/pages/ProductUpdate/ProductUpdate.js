import { useParams } from 'react-router-dom'
import './ProductUpdate.scss'
import { useDispatch, useSelector } from 'react-redux'
//import axios from '../../http/axios'

import { useEffect, useState } from 'react'
import {
    fetchProduct,
    updateProduct,
} from '../../../redux/slices/products/productSlice'

const ProductOne = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const { item, status } = useSelector((state) => state.product)

    const [productUpdate, setProductUpdate] = useState({ id: productId })

    const handleUpdateProduct = async (e) => {
        e.preventDefault()
        dispatch(updateProduct(productUpdate))
    }
    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    const [showAddition, setShowAddition] = useState(false)

    const [additionNew, setAdditionNew] = useState({
        title: '',
        weight: '',
        price: '',
        count: 1,
        check: false,
    })

    const onClickAddAddition = () => {
        setProductUpdate({
            ...productUpdate,
        })
    }
    console.log(item)
    console.log(productUpdate)

    return (
        <div className="product">
            {status === 'loading' ? (
                <div>Загрузка....</div>
            ) : (
                <>
                    {}
                    <form onSubmit={handleUpdateProduct}>
                        <div className="input">
                            <label>
                                <input
                                    type="text"
                                    value={item.name}
                                    className={`${
                                        item.name.length > 0 ? 'filled' : ''
                                    }`}
                                    onChange={(e) =>
                                        setProductUpdate({
                                            ...productUpdate,
                                            name: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">Назва продукту</span>
                            </label>
                        </div>
                        <div className="input">
                            <label>
                                <input
                                    type="text"
                                    value={item.price}
                                    className={`${
                                        item.price.length > 0 ? 'filled' : ''
                                    }`}
                                    onChange={(e) =>
                                        setProductUpdate({
                                            ...productUpdate,
                                            price: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">Ціна</span>
                            </label>
                        </div>
                        <div className="input">
                            <label>
                                <input type="text" />
                                <span className="label">Вага</span>
                            </label>
                        </div>
                        {item.productType === 'pizza' && (
                            <div>
                                <div className="additioons">
                                    Додатки до піци
                                    {item.additions.map((item, index) => (
                                        <div key={index} className="item">
                                            <span className="title">
                                                {item.title}
                                            </span>
                                            <span className="weight">
                                                {item.weight} гр.
                                            </span>
                                            <span className="price">
                                                {item.price} грн.
                                            </span>
                                            <button>&#10007;</button>
                                        </div>
                                    ))}
                                    {showAddition && (
                                        <>
                                            <div>
                                                <div className="input">
                                                    <label>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                additionNew.title
                                                            }
                                                            className={`${
                                                                additionNew
                                                                    .title
                                                                    .length > 0
                                                                    ? 'filled'
                                                                    : ''
                                                            }`}
                                                            onChange={(e) =>
                                                                setAdditionNew({
                                                                    ...additionNew,
                                                                    title: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                        />
                                                        <span className="label">
                                                            Назва
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="input">
                                                    <label>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                additionNew.weight
                                                            }
                                                            className={`${
                                                                additionNew
                                                                    .weight
                                                                    .length > 0
                                                                    ? 'filled'
                                                                    : ''
                                                            }`}
                                                            onChange={(e) =>
                                                                setAdditionNew({
                                                                    ...additionNew,
                                                                    weight: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                        />
                                                        <span className="label">
                                                            Вага
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="input">
                                                    <label>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                additionNew.price
                                                            }
                                                            className={`${
                                                                additionNew
                                                                    .price
                                                                    .length > 0
                                                                    ? 'filled'
                                                                    : ''
                                                            }`}
                                                            onChange={(e) =>
                                                                setAdditionNew({
                                                                    ...additionNew,
                                                                    price: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                        />
                                                        <span className="label">
                                                            Ціна
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                onClick={onClickAddAddition}
                                            >
                                                +
                                            </button>
                                        </>
                                    )}
                                    <button
                                        disabled={showAddition ? 'true' : ''}
                                        onClick={() => setShowAddition(true)}
                                    >
                                        Додати ще
                                    </button>
                                </div>
                            </div>
                        )}
                        <button>Оновити</button>
                    </form>
                </>
            )}
        </div>
    )
}

export default ProductOne
