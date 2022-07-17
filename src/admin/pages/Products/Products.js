import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsPoster } from '../../../redux/slices/poster/productsSlice/ProductsSlice'
//import { Link } from 'react-router-dom'
import './Products.scss'

const Products = () => {
    //const products = useSelector((state) => state.products)
    //const dispatch = useDispatch()
    //useEffect(() => {
    //    dispatch(fetchProducts())
    //}, [dispatch])

    //const onClickRemove = (id) => {
    //    dispatch(deleteProduct(id))
    //}
    const dispatch = useDispatch()

    const products = useSelector((state) => state.productsPoster)
    //console.log(activeCat)
    useEffect(() => {
        dispatch(fetchProductsPoster())
    }, [dispatch])
    return (
        <div className="products">
            {/*<Link to="create">Створити</Link>*/}
            <div className="products-list">
                <div className="products-list__item title">
                    <span>ID</span>
                    <span>Продукт</span>
                    <span>Категорія</span>
                    <span>Вага</span>
                    <span>Ціна</span>
                    <span>Дії</span>
                </div>
                {products.status === 'loaded' &&
                    products.items.map((item) => (
                        <div
                            className="products-list__item item"
                            key={item.product_id}
                        >
                            <span>{item.product_id}</span>
                            <span className="name">
                                <img
                                    src={
                                        process.env.REACT_APP_POSTER_API_URL +
                                        item.photo
                                    }
                                    alt={item.product_name}
                                />
                                {item.product_name}
                            </span>

                            <span>{item.category_name}</span>
                            {item.out > 0 ? (
                                <span>{item.out}</span>
                            ) : (
                                <span>Не вказано</span>
                            )}
                            <span>{item.price['1'] / 100} грн</span>
                            <span className="actions">
                                {/*<Link to={`list/${item.product_id}`}>
                                    Переглянути
                                </Link>
                                <button
                                //onClick={() => {
                                //    onClickRemove(item.id)
                                //}}
                                >
                                    Видалити
                                </button>*/}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Products
