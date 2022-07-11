import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActions } from '../../../redux/slices/actions/actionsSlice'

import './ActionsAdmin.scss'

const ActionsAdmin = () => {
    const actions = useSelector((state) => state.actions)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActions())
    }, [dispatch])
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
                                    <button className="update">
                                        Редагувати
                                    </button>
                                    <button className="delete">Видалити</button>
                                </div>
                            </div>
                        ))}
                </div>
                <button className="create">Додати акцію</button>
            </div>
        </>
    )
}

export default ActionsAdmin
