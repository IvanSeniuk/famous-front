import { FcAbout } from 'react-icons/fc'
import { Link } from 'react-router-dom'

import './PagesList.scss'

const PagesList = () => {
    return (
        <div className="pages">
            <div className="pages-list">
                <Link to="about" className="item">
                    <FcAbout />
                    <span>Про нас</span>
                </Link>
                <Link to="actions" className="item">
                    <FcAbout />
                    <span>Акції</span>
                </Link>
            </div>
        </div>
    )
}

export default PagesList
