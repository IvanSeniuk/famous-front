import { useEffect, useState } from 'react'
import { $authHost } from '../../../http'
import Moment from 'react-moment'

const SubscriptionAdmin = () => {
    const [emailList, setEmailList] = useState([])
    const emailSortList = emailList
        ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .reduce((a, c) => {
            if (
                Object.values(a)
                    .map((e) => e.email)
                    .indexOf(c.email) === -1
            )
                a.push(c)
            return a
        }, [])

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await $authHost.get('api/subscription')
                setEmailList(data)
            } catch (error) {
                alert('Помилка при отриманні даних сторінки')
            }
        }

        fetchData()
    }, [])
    return (
        <div className="promocode-admin" style={{ maxWidth: '680px' }}>
            <div className="row">
                <div className="item col-8">
                    <div
                        style={{
                            border: '.5px solid rgba(135, 135, 135, 0.2)',
                            padding: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        Список Emails
                    </div>
                </div>
                <div className="item col-4">
                    <div
                        style={{
                            border: '.5px solid rgba(135, 135, 135, 0.2)',
                            padding: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        Дата
                    </div>
                </div>
            </div>
            {emailSortList?.map((item) => (
                <div className="row" key={item.id}>
                    <div className="item col-8">
                        <div
                            style={{
                                border: '.5px solid rgba(135, 135, 135, 0.2)',
                                padding: '1rem',
                            }}
                        >
                            <div className="title">{item.email}</div>
                        </div>
                    </div>
                    <div className="item col-4">
                        <div
                            style={{
                                border: '.5px solid rgba(135, 135, 135, 0.2)',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Moment format="DD.MM.YYYY">
                                {item.created_at}
                            </Moment>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubscriptionAdmin
