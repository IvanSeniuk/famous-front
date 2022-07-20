import { ImUserCheck, ImUser } from 'react-icons/im'
import { Link } from 'react-router-dom'

import './../PagesList.scss'

const Users = () => {
    return (
        <div className="pages">
            <div className="pages-list">
                <Link to="reg" className="item">
                    <ImUserCheck />
                    <span>Зареєстровані</span>
                </Link>
                <Link to="all" className="item">
                    <ImUser />
                    <span>Усі клієнти</span>
                </Link>
            </div>
        </div>
    )
}

export default Users
