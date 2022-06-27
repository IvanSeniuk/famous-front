//import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link, useLocation } from 'react-router-dom'

const Categories = ({ product }) => {
    const categories = product.categories
    const location = useLocation()
    let activeIndex
    location.pathname === `/${product.value}`
        ? (activeIndex = true)
        : (activeIndex = false)

    //const onClickCategory = (index) => {
    //    setActiveIndex(index)
    //}
    return (
        <div className="m-tabs categories">
            <ul className="m-tabs-list">
                <li>
                    <Link
                        to={`/${product.value}`}
                        className={`${activeIndex ? 'active' : ''}`}
                    >
                        <button>Всі</button>
                    </Link>
                </li>
                {categories.map((item, i) => (
                    <li key={i}>
                        <NavLink to={`/${product.value}/${item.category}`}>
                            <button>{item.categoryName}</button>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Categories.propTypes = {
    product: PropTypes.object,
}

export default Categories
