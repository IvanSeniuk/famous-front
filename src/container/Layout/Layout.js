import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Subscription from '../../components/Subscription/Subscription'
//import ProductsList from '../../ProductsArray/ProductsObj.json'
import ToolBarr from '../../components/ToolBar/ToolBar'
import Cart from '../../components/Cart/Cart'
import ModalPizza from '../../components/ModalPizza/ModalPizza'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProductPoster } from '../../redux/slices/poster/productsSlice/ProductSlice'
import Login from '../../components/Login/Login'
import { useSelector, useDispatch } from 'react-redux'

const Layout = () => {
    let location = useLocation()
    //const products = useSelector((state) => state.products)
    //const [searchParams, setSearchParams] = useSearchParams()

    //const params = searchParams.get('product') || ''
    //console.log(setSearchParams)
    const dispatch = useDispatch()
    const product = useSelector((state) => state.productPoster)
    //console.log(activeCat)

    const searchParams = new URLSearchParams(location.search)
    const params = searchParams.get('product')
    useEffect(() => {
        dispatch(fetchProductPoster(params))
    }, [dispatch, params])
    console.log(product)
    //const product = productsPizza.find((item) => item.id == params)
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
            {
                //<Login params={params} />
                //<ModalPizza {...product} />
                product.status === 'loaded' &&
                    product.item.product_id === params && (
                        <ModalPizza {...product.item} />
                    )
            }
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
