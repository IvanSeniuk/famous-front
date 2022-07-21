import { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { $authHost } from '../../../http'

import './Promocode.scss'

const Promocode = () => {
    const [showNewPromocode, setShowNewPromocode] = useState(false)
    const [promocodeList, setPromocodeList] = useState([])

    const [newPromocode, setNewPromocode] = useState({
        title: '',
        promo: '',
        count: '',
    })
    const handleCreatePromo = async (e) => {
        e.preventDefault()

        try {
            const { data } = await $authHost.post('api/promocode', newPromocode)
            setPromocodeList([
                ...promocodeList,
                { count: data.count, title: data.title, promo: data.promo },
            ])
            setShowNewPromocode(false)
            setNewPromocode({
                title: '',
                promo: '',
                count: '',
            })
        } catch (err) {
            return err.response.data
        }
    }
    const onClickRemove = async (id) => {
        try {
            await $authHost.delete(`api/promocode/${id}`)

            //setPromocodeList(data)
            setPromocodeList([...promocodeList.filter((p) => p.id != id)])
        } catch (err) {
            return err.response.data
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await $authHost.get('api/promocode')
                setPromocodeList(data)
            } catch (error) {
                alert('Помилка при отриманні даних сторінки')
            }
        }

        fetchData()
    }, [showNewPromocode])
    return (
        <div className="promocode-admin">
            <div className="promocode-list">
                <div className="item title">
                    <div className="title">Промокод</div>
                    <div className="percent">% знижки</div>
                    <div className="count">К-сть, що залишилась</div>
                    <div>Дії</div>
                </div>
                {promocodeList.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="percent">{item.promo}</div>
                        <div className="count">{item.count}</div>
                        <div>
                            <button
                                className="delete"
                                onClick={() => onClickRemove(item.id)}
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                ))}

                {showNewPromocode && (
                    <form className="item" onSubmit={handleCreatePromo}>
                        <div className="title">
                            <input
                                type="text"
                                required
                                className="admin-textarea"
                                value={newPromocode.title}
                                onChange={(e) =>
                                    setNewPromocode({
                                        ...newPromocode,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="percent">
                            <NumberFormat
                                type="tel"
                                format="##"
                                maxLength={3}
                                required
                                className="admin-textarea"
                                value={newPromocode.promo}
                                onChange={(e) =>
                                    setNewPromocode({
                                        ...newPromocode,
                                        promo: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="count">
                            <NumberFormat
                                type="tel"
                                format="########"
                                maxLength={9}
                                required
                                className="admin-textarea"
                                value={newPromocode.count}
                                onChange={(e) =>
                                    setNewPromocode({
                                        ...newPromocode,
                                        count: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <button type="submit" className="update">
                                Зберегти
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <button
                className="create"
                disabled={showNewPromocode ? 'true' : ''}
                onClick={() => setShowNewPromocode(true)}
            >
                Додати промокод
            </button>
        </div>
    )
}

export default Promocode
