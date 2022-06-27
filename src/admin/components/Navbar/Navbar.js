import { Link } from 'react-router-dom'
import { IoMdLogOut } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../redux/slices/auth/authSlice'

import './Navbar.scss'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <Link
                to="/"
                className="logout"
                onClick={() => {
                    dispatch(logoutUser(null))
                }}
            >
                <IoMdLogOut />
            </Link>
        </div>
    )
}

export default Navbar
