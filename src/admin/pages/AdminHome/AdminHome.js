import { Link } from 'react-router-dom'
import { TbDiscount } from 'react-icons/tb'
import { MdUnsubscribe, MdCreditCard } from 'react-icons/md'

import './AdminHome.scss'

const AdminHome = () => {
    return (
        <div className="admin-home">
            <div className="pages">
                <ul className="pages-list">
                    <li>
                        <Link to="creditcards" className="item">
                            <MdCreditCard color="goldenrod" />
                            <span>Кредитні карти</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="promocode" className="item">
                            <TbDiscount color="goldenrod" />
                            <span>Промокоди</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="subscription" className="item">
                            <MdUnsubscribe color="goldenrod" />
                            <span>Email розсилка</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminHome
