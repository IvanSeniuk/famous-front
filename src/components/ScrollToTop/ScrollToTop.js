import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        if (
            pathname === '/about' ||
            pathname === '/delivery' ||
            pathname === '/actions' ||
            pathname === '/' ||
            pathname === '/checkout' ||
            pathname === '/profile' ||
            pathname === '/admin'
        ) {
            window.scrollTo(0, 0)
        }
    }, [pathname])

    return null
}
