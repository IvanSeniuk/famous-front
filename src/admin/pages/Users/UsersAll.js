import { $authHost } from '../../../http'
import { useEffect, useState } from 'react'
import Moment from 'react-moment'

import './Users.scss'

const UsersAll = () => {
    const [usersPoster, setUsersPoster] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const { data } = await $authHost.get('api/user_poster')
                setUsersPoster(data.response)
            } catch (error) {
                alert('Помилка при отриманні даних сторінки')
            }
        }
        fetchUsers()
    }, [])
    return (
        <div className="users">
            <div className="users-list">
                <div className="item title row ">
                    <div className="col-2">Ім’я клієнта</div>
                    <div className="col-2">Номер телефону</div>
                    <div className="col-2 ">Email</div>
                    <div className="col-3 ">Адреса доставки</div>
                    <div className="col-2">Дата реєстрації</div>
                    <div className="col-1">Сума покупок</div>
                </div>
                {usersPoster
                    ?.filter((user) => user.delete === '0')
                    .map((user) => (
                        <div className="item row" key={user.id}>
                            <div className="col-2">
                                {user.firstname} {user.lastname}
                            </div>
                            <div className="col-2">
                                {user.phone.replace(/[^0-9]/g, '')}
                            </div>
                            <div className="col-2 ">{user.email}</div>
                            <div className="col-3">{user.address}</div>
                            <div className="col-2">
                                <Moment format="DD.MM.YYYY">
                                    {user.date_activale}
                                </Moment>
                            </div>
                            <div className="col-1">
                                {user.total_payed_sum / 100} &#8372;
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default UsersAll
