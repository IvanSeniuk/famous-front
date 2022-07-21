import { useEffect, useRef, useState } from 'react'
import { RiSave3Line, RiCheckboxCircleFill } from 'react-icons/ri'
import { TbCirclePlus } from 'react-icons/tb'
import { BiImageAdd } from 'react-icons/bi'
import NumberFormat from 'react-number-format'
import axios from '../../../http/axios'
import { $authHost } from '../../../http'
//import { $authHost } from '../../../http'

import './CreditCard.scss'
import '../Banners/Banners.scss'

const CreditCards = () => {
    const [cardList, setCardList] = useState([])
    const [cardNumberChange, setCardNumberChange] = useState([])
    console.log(cardList, cardNumberChange)
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get('api/credit_cards')
                setCardList(data)
                setCardNumberChange(data)
            } catch (error) {
                console.log('Помилка при отриманні даних про карти')
            }
        }

        fetchData()
    }, [])
    const handleCreateCard = async (e) => {
        e.preventDefault()
        try {
            const { data } = await $authHost.post('api/credit_cards')
            setCardList([...cardList, data])
            setCardNumberChange([...cardList, data])
        } catch (err) {
            return err.response.data
        }
    }
    const deleteCard = async (id) => {
        const { data } = await $authHost.delete(`api/credit_cards/${id}`)
        setCardList(cardList.filter((item) => item.id !== data))
    }

    const myRef = useRef([])
    myRef.current = []
    const addToRefs = (el) => {
        if (el && !myRef.current.includes(el)) {
            myRef.current.push(el)
        }
    }
    const handleChangeFile = async (e, id) => {
        try {
            const formDat = new FormData()
            const file = e.target.files[0]
            formDat.append(`img`, file)
            await $authHost.put(`api/credit_cards/${id}`, formDat)

            const cardList = await axios.get('api/credit_cards')
            setCardList(cardList.data)
            setCardNumberChange(cardList.data)
        } catch (e) {
            alert('Помилка при загрузці зображення')
        }
    }
    const handleChangeNumber = async (number, id) => {
        try {
            const formData = new FormData()
            formData.append('number', number)
            console.log(formData)
            await $authHost.put(`api/credit_cards/${id}`, formData)
            const cardList = await axios.get('api/credit_cards')
            setCardList(cardList.data)
            setCardNumberChange(cardList.data)
        } catch (e) {
            alert('Помилка при загрузці зображення')
        }
    }

    return (
        <div className="credit-cards">
            <div className="credit-cards__list row">
                {cardList.map((card, i) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-xl-3 item mb-4"
                        key={card.id}
                    >
                        <div
                            className="item-inner"
                            style={{ position: 'relative' }}
                        >
                            <input
                                ref={addToRefs}
                                type="file"
                                name="img"
                                hidden
                                onChange={(e) => handleChangeFile(e, card.id)}
                            />
                            {card.img ? (
                                <div className="img">
                                    <img
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            card.img
                                        }
                                        alt="credit_card"
                                    />
                                    <button
                                        onClick={() => deleteCard(card.id)}
                                        className="delete-card"
                                        type="button"
                                    >
                                        <TbCirclePlus color="red" />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button
                                        className="img add-img pt-0 pe-0 ps-0"
                                        onClick={() =>
                                            //console.log(myRef)
                                            myRef.current[i].click()
                                        }
                                    >
                                        <BiImageAdd />
                                    </button>

                                    <button
                                        style={{
                                            position: 'absolute',
                                            right: '0',
                                            top: '0',
                                            zIndex: '6',
                                            marginRight: '0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        onClick={() => deleteCard(card.id)}
                                        className="delete-card no-img"
                                        type="button"
                                    >
                                        <TbCirclePlus
                                            color="red"
                                            style={{
                                                transition: '.3s',
                                                width: '26px',
                                                height: 'auto',
                                                transform: 'rotate(45deg)',
                                            }}
                                        />
                                    </button>
                                </>
                            )}

                            <div className="number d-flex">
                                <NumberFormat
                                    className="admin-input"
                                    format="####-####-####-####"
                                    mask="_"
                                    placeholder="1111-2222-3333-4444"
                                    value={card.number}
                                    onChange={(e) =>
                                        setCardList(
                                            cardList.map((item) =>
                                                item.id === card.id
                                                    ? {
                                                          ...item,
                                                          number: e.target.value.replace(
                                                              /[^0-9]/g,
                                                              ''
                                                          ),
                                                      }
                                                    : item
                                            )
                                        )
                                    }
                                />
                                {card.number === cardNumberChange[i].number &&
                                card.number != '' ? (
                                    <button
                                        className="save-btn me-0"
                                        type="button"
                                    >
                                        <RiCheckboxCircleFill color="green" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            handleChangeNumber(
                                                card.number,
                                                card.id
                                            )
                                        }
                                        className="save-btn me-0"
                                        type="button"
                                    >
                                        <RiSave3Line />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-12 col-sm-6 col-md-4 col-xl-3 item">
                    <div className="item-inner">
                        <button
                            onClick={handleCreateCard}
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
