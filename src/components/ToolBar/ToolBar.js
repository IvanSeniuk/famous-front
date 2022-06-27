import ProductsObj from '../../ProductsArray/ProductsObj.json'
import { NavLink } from 'react-router-dom'

const ToolBarr = () => {
    return (
        <div className="m-toolbar">
            <nav className="m-toolbar-nav">
                <ul className="m-toolbar-list">
                    {ProductsObj.productsTypes.map((item) => (
                        <li key={item.id}>
                            <NavLink to={item.value}>
                                <img src={item.icon} alt={item.title} />
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default ToolBarr
