import { FcAbout } from 'react-icons/fc'
import { TbDiscount2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import './PagesList.scss'

const PagesList = () => {
    return (
        <div className="pages">
            <ul className="pages-list">
                <li>
                    <Link to="about" className="item about">
                        <FcAbout color="goldenrod" />
                        <span>Про нас</span>
                    </Link>
                </li>
                <li>
                    <Link to="actions" className="item">
                        <TbDiscount2 color="goldenrod" />
                        <span>Акції</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default PagesList
