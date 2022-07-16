import { Link } from 'react-router-dom'
import { TbDiscount } from 'react-icons/tb'
import { MdUnsubscribe } from 'react-icons/md'

import './AdminHome.scss'

const AdminHome = () => {
    return (
        <div className="admin-home">
            <div className="pages">
                <div className="pages-list">
                    <Link to="promocode" className="item">
                        <TbDiscount />
                        <span>Промокоди</span>
                    </Link>
                    <Link to="subscription" className="item">
                        <MdUnsubscribe />
                        <span>Email розсилка</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminHome
