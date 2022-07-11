import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import './admin.scss'

const LayoutAdmin = () => {
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
