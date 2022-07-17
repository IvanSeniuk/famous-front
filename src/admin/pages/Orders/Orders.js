import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersPoster } from '../../../redux/slices/poster/orderSlice/OrderSlice'

import './Orders.scss'

const Orders = () => {
    const { getOrdersStatus, orders } = useSelector(
        (state) => state.orderPosterSlice
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrdersPoster())
    }, [dispatch])
    return (
        <>
            <div className="orders">
                <div className="orders-list">
                    <div className="item">
                        <div>Номер Замовлення</div>
                        <div>Статус</div>
                        <div>Дії</div>
                    </div>
                    {getOrdersStatus === 'loaded' &&
                        orders
                            .map((item) => (
                                <div
                                    className="item"
                                    key={item.incoming_order_id}
                                >
                                    <div>{item.incoming_order_id}</div>
                                    {item.comment &&
                                        item.comment.includes(
                                            'Промокод на знижку:'
                                        ) &&
                                        console.log(
                                            item.comment,
                                            item.comment.indexOf(
                                                'Промокод на знижку:'
                                            )
                                        )}
                                    <div></div>
                                    {/*<div>{item.title}</div>*/}
                                    <div>
                                        <button className="update">
                                            Редагувати
                                        </button>
                                        <button className="delete">
                                            Видалити
                                        </button>
                                    </div>
                                </div>
                            ))
                            .sort((a, b) =>
                                a.incoming_order_id < b.incoming_order_id
                                    ? 1
                                    : -1
                            )}
                </div>
                <button className="create">Додати акцію</button>
            </div>
        </>
    )
}

export default Orders
