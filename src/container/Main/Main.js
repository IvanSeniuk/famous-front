import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Products from '../../pages/Products/Products'
import AboutAdmin from '../../admin/pages/About/AboutAdmin'
import Layout from '../Layout/Layout'
import NotFound from '../../pages/NotFound/NotFound'
import Profile from '../../pages/Profile/Profile'
import LayoutAdmin from '../../admin/Layout/LayoutAdmin'
import AdminHome from '../../admin/pages/AdminHome/AdminHome'
import ProductsAdmin from '../../admin/pages/Products/Products'
import ProductUpdate from '../../admin/pages/ProductUpdate/ProductUpdate'
import ProductCreate from '../../admin/pages/ProductCreate/ProductCreate'
import PagesList from '../../admin/pages/PagesList'
import About from '../../pages/About/About'
import Actions from '../../pages/Actions/Actions'
import Banners from '../../admin/pages/Banners/Banners'
//import Cart from '../../components/Cart/Cart'
//import Login from '../../components/Login/Login'
import ActionsAdmin from '../../admin/pages/Actions/ActionsAdmin'
import ActionsUpdate from '../../admin/pages/Actions/ActionsUpdate'
import ProductsCategories from '../../admin/pages/ProductsCategories/ProductsCategories'
//import CreateCategories from '../../admin/pages/ProductsCategories/CreateCategories'
import Checkout from '../../pages/Checkout/Checkout'
import Delivery from '../../pages/Delivery/Delivery'
import ContactsAdmin from '../../admin/pages/Contacts/ContactsAdmin'
import Promocode from '../../admin/pages/Promocode/Promocode'
import Orders from '../../admin/pages/Orders/Orders'
import Users from '../../admin/pages/Users/Users'
import UsersReg from '../../admin/pages/Users/UsersReg'
import UsersAll from '../../admin/pages/Users/UsersAll'
import SubscriptionAdmin from '../../admin/pages/SubscroptionAdmin/SubscriptionAdmin'
import CreditCards from '../../admin/pages/CreditCards/CreditCards'

const Main = () => {
    const auth = useSelector((state) => state.auth)
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/5" />} />
                    <Route path=":category" element={<Products />} />
                    <Route
                        exact
                        path=":category/:subcategory"
                        element={<Products />}
                    />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="about" element={<About />} />
                    <Route path="delivery" element={<Delivery />} />
                    <Route path="actions" element={<Actions />} />
                    {auth.userLoaded && (
                        <Route path="/profile" element={<Profile />}>
                            <Route path="wishlist" />
                            <Route path="history-order" />
                        </Route>
                    )}
                    <Route path="*" element={<NotFound />} />
                </Route>
                {auth.userLoaded && auth.role === 'ADMIN' && (
                    <Route path="/admin" element={<LayoutAdmin />}>
                        <Route index element={<AdminHome />} />
                        <Route path="products">
                            <Route index element={<ProductsAdmin />} />
                            <Route path="types" />
                            <Route path="categories">
                                <Route index element={<ProductsCategories />} />
                                {/*<Route
                                    path="create"
                                    element={<CreateCategories />}
                                />*/}
                            </Route>
                            <Route path="create" element={<ProductCreate />} />
                            <Route
                                path="list/:productId"
                                element={<ProductUpdate />}
                            />
                        </Route>
                        <Route path="pages">
                            <Route index element={<PagesList />} />
                            <Route path="about" element={<AboutAdmin />} />
                            <Route path="actions">
                                <Route index element={<ActionsAdmin />} />
                                <Route
                                    path="create"
                                    element={<ActionsUpdate />}
                                />
                                <Route
                                    path="update/:actionsId"
                                    element={<ActionsUpdate />}
                                />
                            </Route>
                        </Route>
                        <Route path="banners" element={<Banners />} />
                        <Route path="creditcards" element={<CreditCards />} />
                        <Route path="users">
                            <Route index element={<Users />} />
                            <Route path="reg" element={<UsersReg />} />
                            <Route path="all" element={<UsersAll />} />
                        </Route>
                        <Route path="promocode" element={<Promocode />} />
                        <Route
                            path="subscription"
                            element={<SubscriptionAdmin />}
                        />
                        <Route path="other" element={<Banners />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="contacts">
                            <Route index element={<ContactsAdmin />} />
                        </Route>
                    </Route>
                )}
            </Routes>
            {/*<Routes>
                <Route path="/" element={<Login />} />
            </Routes>*/}
        </>
    )
}

export default Main
