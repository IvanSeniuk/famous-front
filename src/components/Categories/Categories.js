//import React from 'react'
import PropTypes from 'prop-types'
//import { NavLink } from 'react-router-dom'

const Categories = ({ product, onChangeCategory, value }) => {
    const activeIndex = value
    const categories = product.categories
    //const onClickCategory = (index) => {
    //    setActiveIndex(index)
    //}
    return (
        <div className="m-tabs categories">
            <ul className="m-tabs-list">
                {categories.map((item, i) => (
                    <li
                        key={i}
                        onClick={() => {
                            //onClickCategory(i)
                            onChangeCategory(i)
                        }}
                        className={activeIndex === i ? 'active' : ''}
                    >
                        {/*<NavLink to={`/${product.value}/${item.category}`}>
                            <button>{item.categoryName}</button>
                        </NavLink>*/}
                        <button>{item.categoryName}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Categories.propTypes = {
    product: PropTypes.object,
    onChangeCategory: PropTypes.func,
    value: PropTypes.number,
}

export default Categories
