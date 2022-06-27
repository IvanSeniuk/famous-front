//import Header from './Header/Header'
//import Footer from './Footer/Footer'
//import PropTypes from 'prop-types'
//import { useEffect } from 'react'
import Main from './Main/Main'
//import ToolBarr from '../components/ToolBar/ToolBar'
//import Cart from '../components/Cart/Cart'
//import ModalPizza from '../components/ModalPizza/ModalPizza'
//import Login from '../components/Login/Login'
import { useEffect } from 'react'

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
    return (
        <>
            <Main />
        </>
    )
}

export default App
