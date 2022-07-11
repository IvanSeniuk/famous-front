import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchCategoriesPoster } from '../../redux/slices/poster/productsSlice/CategoriesSlice'

const ToolBarr = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categoriesPoster)
    useEffect(() => {
        dispatch(fetchCategoriesPoster())
    }, [dispatch])
    return (
        <div className="m-toolbar">
            <nav className="m-toolbar-nav">
                <ul className="m-toolbar-list">
                    {categories.status === 'loaded' &&
                        categories.items
                            .filter((item) => item.parent_category === '0')
                            .map((item) => (
                                <li key={item.category_id}>
                                    <NavLink to={item.category_id}>
                                        <img
                                            src={
                                                process.env
                                                    .REACT_APP_POSTER_API_URL +
                                                item.category_photo
                                            }
                                            alt={item.category_name}
                                        />
                                        <span>{item.category_name}</span>
                                    </NavLink>
                                </li>
                            ))}
                </ul>
            </nav>
        </div>
    )
}

export default ToolBarr
