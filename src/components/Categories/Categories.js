//import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'

const Categories = ({ categories, value }) => {
    const categoriesList = categories.items
    console.log(categoriesList)
    //const onClickCategory = (index) => {
    //    setActiveIndex(index)
    //}
    return (
        <div className="m-tabs categories">
            <ul className="m-tabs-list">
                <li>
                    <Link
                        to={`/${value}`}
                        className={`${
                            location.pathname === `/${value}` ? 'active' : ''
                        }`}
                    >
                        <button>Всі</button>
                    </Link>
                </li>
                {categoriesList
                    .filter((item) => item.parent_category === value)
                    .map((item) => (
                        <li key={item.category_id}>
                            <NavLink
                                to={`/${item.parent_category}/${item.category_id}`}
                            >
                                <button>{item.category_name}</button>
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

Categories.propTypes = {
    categories: PropTypes.object,
    value: PropTypes.string,
}

export default Categories
