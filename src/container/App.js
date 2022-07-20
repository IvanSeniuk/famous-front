//import Header from './Header/Header'
//import Footer from './Footer/Footer'
//import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Main from './Main/Main'
//import ToolBarr from '../components/ToolBar/ToolBar'
//import Cart from '../components/Cart/Cart'
//import ModalPizza from '../components/ModalPizza/ModalPizza'
//import Login from '../components/Login/Login'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../redux/slices/contacts/contactsSlice'
import { Helmet } from 'react-helmet'

const App = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrollDistance = window.pageYOffset
            if (scrollDistance > 1) {
                document.body.classList.add('scroll')
                if (document.querySelector('.o-header')) {
                    document.querySelector('.o-header').classList.add('scroll')
                }
                if (document.querySelector('.m-toolbar')) {
                    document.querySelector('.m-toolbar').classList.add('scroll')
                }
            } else {
                document.body.classList.remove('scroll')
                if (document.querySelector('.o-header')) {
                    document
                        .querySelector('.o-header')
                        .classList.remove('scroll')
                }
                if (document.querySelector('.m-toolbar')) {
                    document
                        .querySelector('.m-toolbar')
                        .classList.remove('scroll')
                }
            }
        })
    })
    const location = useLocation()
    useEffect(() => {
        if (location.pathname.includes('/admin', 0)) {
            document.body.classList.add('admin-page')
        } else {
            document.body.classList.remove('admin-page')
        }
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts())
    })

    return (
        <>
            <Helmet>
                <meta charset="utf-8" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Найкраща доставка їжі у Львові"
                />
                <title>Famous Lviv Sushi&Pizza</title>
            </Helmet>
            <Main />
        </>
    )
}

export default App
