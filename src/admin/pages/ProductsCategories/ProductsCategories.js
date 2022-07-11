import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCategoriesPoster } from '../../../redux/slices/poster/productsSlice/CategoriesSlice'

import './ProductsCategories.scss'

const ProductsCategories = () => {
    const dispatch = useDispatch()
    let [activeCat, setActiveCat] = useState()
    const categories = useSelector((state) => state.categoriesPoster)
    useEffect(() => {
        dispatch(fetchCategoriesPoster())
    }, [dispatch])
    return (
        <div className="categories">
            <div className="categories-list">
                <div className="item title">
                    <div className="img">Зображення</div>
                    <div className="name">Назва Категорії</div>
                    <div>Дії</div>
                </div>
                {categories.status === 'loaded' &&
                    categories.items
                        .filter((item) => item.parent_category === '0')
                        .map((item) => (
                            <>
                                <div
                                    className={
                                        activeCat === item.category_id
                                            ? 'item active'
                                            : 'item'
                                    }
                                    key={item.category_id}
                                    onClick={() =>
                                        activeCat === item.category_id
                                            ? setActiveCat((activeCat = ''))
                                            : setActiveCat(
                                                  (activeCat = item.category_id)
                                              )
                                    }
                                >
                                    <div className="img">
                                        <img
                                            src={
                                                process.env
                                                    .REACT_APP_POSTER_API_URL +
                                                item.category_photo
                                            }
                                        />
                                    </div>
                                    <div className="name">
                                        {item.category_name}
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="update"
                                        >
                                            <Link to="/admin">Редагувати</Link>
                                        </button>
                                        <button
                                            type="button"
                                            className="delete"
                                        >
                                            <Link to="/admin">Видалити</Link>
                                        </button>
                                    </div>
                                </div>
                                {activeCat === item.category_id &&
                                    categories.items
                                        .filter(
                                            (it) =>
                                                it.parent_category ===
                                                item.category_id
                                        )
                                        .map((subcat) => (
                                            <div
                                                className="item item-sub"
                                                key={subcat.category_id}
                                            >
                                                <div className="img"></div>
                                                <div className="name">
                                                    <span>
                                                        {subcat.category_name}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="update"
                                                    >
                                                        <Link to="/admin">
                                                            Редагувати
                                                        </Link>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="delete"
                                                    >
                                                        <Link to="/admin">
                                                            Видалити
                                                        </Link>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                            </>
                        ))}
            </div>
            <button className="create">
                <Link to="create">Додати категорію</Link>
            </button>
        </div>
    )
}

export default ProductsCategories
