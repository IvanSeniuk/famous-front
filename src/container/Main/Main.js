import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Products from '../../pages/Products/Products'
import Layout from '../Layout/Layout'
import NotFound from '../../pages/NotFound/NotFound'
import Profile from '../../pages/Profile/Profile'
import LayoutAdmin from '../../admin/Layout/LayoutAdmin'
import AdminHome from '../../admin/pages/AdminHome/AdminHome'
import ProductsAdmin from '../../admin/pages/Products/Products'
import ProductUpdate from '../../admin/pages/ProductUpdate/ProductUpdate'
import ProductCreate from '../../admin/pages/ProductCreate/ProductCreate'
//import Cart from '../../components/Cart/Cart'
//import Login from '../../components/Login/Login'

const Main = () => {
    const auth = useSelector((state) => state.auth)
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route index element={<Navigate to="sushi" />} />
                    <Route path=":productstype" element={<Products />} />
                    <Route
                        exact
                        path=":productstype/:category"
                        element={<Products />}
                    />
                    <Route path="checkout" element={<Profile />} />
                    {auth.userLoaded && (
                        <Route path="/profile" element={<Profile />} />
                    )}
                    <Route path="*" element={<NotFound />} />
                </Route>
                {auth.userLoaded && auth.role === 'ADMIN' && (
                    <Route path="/admin" element={<LayoutAdmin />}>
                        <Route index element={<AdminHome />} />
                        <Route path="products">
                            <Route index element={<ProductsAdmin />} />
                            <Route path="types" />
                            <Route path="categories" />
                            <Route path="create" element={<ProductCreate />} />
                            <Route
                                path="list/:productId"
                                element={<ProductUpdate />}
                            />
                        </Route>
                        <Route path="pages" />
                        <Route path="banners" />
                        <Route path="orders" />
                        <Route path="contacts" />
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
