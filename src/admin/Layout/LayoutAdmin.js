import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import './admin.scss'

const LayoutAdmin = () => {
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        document.body.classList.add('admin-page')
    })
    return (
        <div className="admin">
            <Navbar />
            <Sidebar />
            <div className="admin-container">
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutAdmin
