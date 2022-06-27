import './ProductCreate.scss'
import { useDispatch } from 'react-redux'
//import axios from '../../http/axios'

import { useState } from 'react'
import { createProduct } from '../../../redux/slices/products/productsSlice'

const ProductOne = () => {
    const [configNew, setConfigNew] = useState({
        size: [22, 30, 40],
        sides: ['Стандарт', 'Філадельфія', 'Хот-дог'],
        sizePrice: [],
        sidePrice: [],
        sizeWeight: [0.5, 0.7, 0.8],
        sideWeight: [0.5, 0.65, 0.7],
    })
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        additions: [],
        config: {},
    })
    const [additionNew, setAdditionNew] = useState({
        title: '',
        weight: '',
        price: '',
        count: 1,
        check: false,
    })
    const onClickAddAddition = () => {
        setNewProduct({
            ...newProduct,
            additions: [...newProduct.additions, additionNew],
        })
        setShowAddition(false)
        setAdditionNew({
            title: '',
            weight: '',
            price: '',
            count: 1,
            check: false,
        })
    }

    console.log(setConfigNew)
    console.log(configNew)
    const dispatch = useDispatch()
    const handleCreateProduct = async (e) => {
        e.preventDefault()
        dispatch(createProduct(newProduct))
    }
    const [showAddition, setShowAddition] = useState(false)

    const onClickDelAddition = (item) => {
        setNewProduct({
            ...newProduct,
            additions: [...newProduct.additions.filter((p) => p != item)],
        })
    }

    console.log(newProduct)
    return (
        <div className="product">
            <>
                <form onSubmit={handleCreateProduct}>
                    <div className="input">
                        <label>
                            <input
                                type="text"
                                defaultValue={newProduct.name}
                                className={`${
                                    newProduct.name.length > 0 ? 'filled' : ''
                                }`}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
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
                                type="number"
                                defaultValue={newProduct.price}
                                className={`${
                                    newProduct.price.length > 0 ? 'filled' : ''
                                }`}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
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
                    <div>
                        <div className="additioons">
                            Додатки до піци
                            {newProduct.additions.map((item, index) => (
                                <div key={index} className="item">
                                    <span className="title">{item.title}</span>
                                    <span className="weight">
                                        {item.weight} гр.
                                    </span>
                                    <span className="price">
                                        {item.price} грн.
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onClickDelAddition(item)
                                        }}
                                    >
                                        &#10007;
                                    </button>
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
                                                        additionNew.title
                                                            .length > 0
                                                            ? 'filled'
                                                            : ''
                                                    }`}
                                                    onChange={(e) =>
                                                        setAdditionNew({
                                                            ...additionNew,
                                                            title: e.target
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
                                                        additionNew.weight
                                                            .length > 0
                                                            ? 'filled'
                                                            : ''
                                                    }`}
                                                    onChange={(e) =>
                                                        setAdditionNew({
                                                            ...additionNew,
                                                            weight: e.target
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
                                                        additionNew.price
                                                            .length > 0
                                                            ? 'filled'
                                                            : ''
                                                    }`}
                                                    onChange={(e) =>
                                                        setAdditionNew({
                                                            ...additionNew,
                                                            price: e.target
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
                                        type="button"
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
                        <div>
                            Розмір піци і Бортики
                            <div className="item">
                                {configNew.size.map((item, index) => (
                                    <>
                                        <div key={item}>
                                            {console.log(index)}
                                            <span className="size">{item}</span>
                                            <div className="input">
                                                <label>
                                                    <input
                                                        type="number"
                                                        defaultValue={
                                                            configNew.sizePrice[
                                                                index
                                                            ]
                                                        }
                                                        className={`${
                                                            configNew.sizePrice[
                                                                index
                                                            ] > 0
                                                                ? 'filled'
                                                                : ''
                                                        }`}
                                                        onChange={(e) => {
                                                            setConfigNew({
                                                                ...configNew,
                                                                sizePrice: [
                                                                    ...configNew.sizePrice.slice(
                                                                        0,
                                                                        index
                                                                    ),
                                                                    e.target
                                                                        .value,
                                                                    ...configNew.sizePrice.slice(
                                                                        index +
                                                                            1
                                                                    ),
                                                                ],
                                                            })
                                                        }}
                                                    />
                                                    <span className="label">
                                                        Ціна
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() =>
                            setNewProduct({
                                ...newProduct,
                                config: configNew,
                            })
                        }
                    >
                        Оновити
                    </button>
                </form>
            </>
        </div>
    )
}

export default ProductOne
