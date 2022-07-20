import { $authHost } from '../../../http'
import { useEffect, useState } from 'react'
import Moment from 'react-moment'

import './Users.scss'

const UsersReg = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchUsers() {
            try {
                const { data } = await $authHost.get('api/user')
                setUsers(data)
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
                    <div className="col-3">Ім’я клієнта</div>
                    <div className="col-3">Номер телефону</div>
                    <div className="col-3 ">Email</div>
                    <div className="col-3">Дата реєстрації</div>
                </div>
                {users?.map((user) => (
                    <div className="item row" key={user.id}>
                        <div className="col-3">{user.name}</div>
                        <div className="col-3">
                            {user.phone.replace(/[^0-9]/g, '')}
                        </div>
                        <div className="col-3 ">{user.email}</div>
                        <div className="col-3">
                            <Moment format="DD.MM.YYYY">
                                {user.createdAt}
                            </Moment>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersReg
