import Widget from '../../components/Widget/Widget'

import './AdminHome.scss'

const AdminHome = () => {
    return (
        <div className="admin-home">
            <div className="widgets">
                <Widget />
                <Widget />
                <Widget />
                <Widget />
            </div>
        </div>
    )
}

export default AdminHome
