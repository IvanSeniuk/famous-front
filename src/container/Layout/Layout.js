import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Subscription from '../../components/Subscription/Subscription'
//import ProductsList from '../../ProductsArray/ProductsObj.json'
import ToolBarr from '../../components/ToolBar/ToolBar'
import Cart from '../../components/Cart/Cart'
import ModalPizza from '../../components/ModalPizza/ModalPizza'
import { Outlet, useLocation } from 'react-router-dom'

import Login from '../../components/Login/Login'
import { useSelector } from 'react-redux'

const Layout = () => {
    let location = useLocation()
    const products = useSelector((state) => state.products)
    //const [searchParams, setSearchParams] = useSearchParams()

    //const params = searchParams.get('product') || ''
    //console.log(setSearchParams)

    const searchParams = new URLSearchParams(location.search)
    const params = searchParams.get('product')
    const productsPizza = products.items.filter(
        (item) => item.productType === 'pizza'
    )
    const product = productsPizza.find((item) => item.id == params)
    const paramsAuth = searchParams.get('auth')
    //const paramsAuthLogin = searchParams.get('login')
    //const paramsAuthReg = searchParams.get('registration')

    //console.log(location, params)

    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Subscription />
            <Footer />
            <ToolBarr />
            <Cart />
            {productsPizza.find((item) => item.id == params) && (
                //<Login params={params} />
                <ModalPizza {...product} />
            )}
            {(paramsAuth === 'login' || paramsAuth === 'registration') && (
                <Login />
            )}
            {/*{modalPizzaVisible ? (
                <ModalPizza modalPizzaVisible={modalPizzaVisible} />
            ) : null}*/}
            {/*{modalPizzaVisible ? (
                <div modalPizzaVisible={modalPizzaVisible} />
            ) : null}*/}
        </>
    )
}

export default Layout
