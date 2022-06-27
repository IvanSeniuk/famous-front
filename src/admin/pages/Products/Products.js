import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
    fetchProducts,
    deleteProduct,
} from '../../../redux/slices/products/productsSlice'
import { Link } from 'react-router-dom'
import './Products.scss'

const Products = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const onClickRemove = (id) => {
        dispatch(deleteProduct(id))
    }
    return (
        <div className="products">
            <Link to="create">Створити</Link>
            <div className="products-list">
                <div className="products-list__item title">
                    <span>ID</span>
                    <span>Продукт</span>
                    <span>Тип</span>
                    <span>Категорія</span>
                    <span>Ціна</span>
                    <span>Дії</span>
                </div>
                {products.items.map((item) => (
                    <div className="products-list__item item" key={item.id}>
                        <span>{item.id}</span>
                        <span className="name">
                            <img src="/image/products/Пепперони_300dpi-thumbnail-960x960-70.jpg" />
                            {item.name}
                        </span>
                        <span>{item.productType}</span>
                        <span>{item.productCategory}</span>
                        <span>{item.price} грн</span>
                        <span className="actions">
                            <Link to={`list/${item.id}`}>Переглянути</Link>
                            <button
                                onClick={() => {
                                    onClickRemove(item.id)
                                }}
                            >
                                Видалити
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
