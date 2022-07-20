import { useEffect, useState } from 'react'
//import { MdOutlineDeleteForever } from 'react-icons/md'
import { TbCirclePlus } from 'react-icons/tb'
import NumberFormat from 'react-number-format'
import axios from '../../../http/axios'
//import { $authHost } from '../../../http'

import './CreditCard.scss'
import '../Banners/Banners.scss'

const CreditCards = () => {
    const [cardList, setCardList] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('api/credit_cards')
                setCardList(data)
            } catch (error) {
                console.log('Помилка при отриманні даних про карти')
            }
        }

        fetchData()
    }, [])

    //const handleCreateFile = async (e) => {
    //    e.preventDefault()
    //    const formData = new FormData()
    //    const file = e.target.files[0]
    //    const id = e.target.name
    //    formData.append(`img`, file)
    //    formData.append(`id`, id)
    //    dispatch(createBanner(formData))
    //}

    return (
        <div className="credit-cards">
            <div className="credit-cards__list row">
                {cardList.map((card) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-xl-3 item mb-4"
                        key={card.id}
                    >
                        <div className="item-inner">
                            <div className="img">
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL + card.img
                                    }
                                    alt="credit_card"
                                />
                            </div>
                            <div className="number">
                                <NumberFormat
                                    className="admin-input"
                                    format="#### #### #### ####"
                                    value={card.number}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 item">
                    <div className="item-inner">
                        <button
                            className="add-banner img"
                            type="button"
                            //onClick={() => inputFileRef1.current.click()}
                        >
                            <TbCirclePlus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCards
