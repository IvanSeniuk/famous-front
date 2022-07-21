import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    deleteActions,
    fetchActions,
} from '../../../redux/slices/actions/actionsSlice'

import './ActionsAdmin.scss'

const ActionsAdmin = () => {
    const actions = useSelector((state) => state.actions)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActions())
    }, [dispatch])

    const handleDeleteAction = (id) => {
        dispatch(deleteActions(id))
    }
    return (
        <>
            <div className="actions">
                <div className="actions-list">
                    <div className="item">
                        <div>Зображення</div>
                        <div>Назва акції</div>
                        <div>Дії</div>
                    </div>
                    {actions.status === 'loaded' &&
                        actions.items.map((item) => (
                            <div className="item" key={item.id}>
                                <div>
                                    <img
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            item.img
                                        }
                                        alt={item.title}
                                    />
                                </div>
                                <div>{item.title}</div>
                                <div>
                                    <Link
                                        className="update btn"
                                        to={`/admin/pages/actions/update/${item.id}`}
                                    >
                                        Редагувати
                                    </Link>
                                    <button
                                        className="delete"
                                        onClick={() =>
                                            handleDeleteAction(item.id)
                                        }
                                    >
                                        Видалити
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                <Link className="create btn" to="/admin/pages/actions/create">
                    Додати акцію
                </Link>
            </div>
        </>
    )
}

export default ActionsAdmin
