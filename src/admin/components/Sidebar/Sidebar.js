import { Link, NavLink, useLocation } from 'react-router-dom'
import {
    GiFullPizza,
    GiSushis,
    GiShoppingCart,
    GiRotaryPhone,
} from 'react-icons/gi'

import { MdDashboard } from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { AiFillShop } from 'react-icons/ai'
import { BsCardImage } from 'react-icons/bs'
import { ImPageBreak } from 'react-icons/im'

import './Sidebar.scss'

const Sidebar = () => {
    const location = useLocation()
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" className="logo">
                    <img src="/image/logo_footer-mobile.svg" alt="" />
                </Link>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <Link
                            to="/admin"
                            className={`${
                                location.pathname === '/admin' ? 'active' : ''
                            }`}
                        >
                            <MdDashboard />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="banners">
                            <BsCardImage />
                            <span>Banners</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="pages">
                            <ImPageBreak />
                            <span>Pages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="products">
                            <AiFillShop />
                            <span>Products</span>
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink to="products/types">
                                    <GiFullPizza />
                                    <span>Products Types</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="products/categories">
                                    <GiSushis />
                                    <span>Products Categories</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="orders">
                            <GiShoppingCart />
                            <span>Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="users">
                            <HiUsers />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contacts">
                            <GiRotaryPhone />
                            <span>Contacts Info</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
