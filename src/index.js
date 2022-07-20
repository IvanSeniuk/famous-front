import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import './scss/style.scss'
import { loadUser } from './redux/slices/auth/authSlice'

store.dispatch(loadUser(null))

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </Provider>
)
