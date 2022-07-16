import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'
import { ImFolderUpload } from 'react-icons/im'
import { $authHost } from '../../../http'

import './ContactsAdmin.scss'
import { fetchContacts } from '../../../redux/slices/contacts/contactsSlice'

const ContactsAdmin = () => {
    const dispatch = useDispatch()
    const dataContacts = useSelector((state) => state.contacts)
    const [updateStatus, setUpdateStatus] = useState(false)
    const [adressList, setAddressList] = useState(dataContacts.item.adress)
    const [newAddress, setNewAddres] = useState('')
    const [showNewAddress, setShowNewAddres] = useState(false)
    const [dataContactsNew, setDataContactsNew] = useState({
        phone1: dataContacts.item.phone1,
        phone2: dataContacts.item.phone2,
        facebook: dataContacts.item.facebook,
        instagram: dataContacts.item.instagram,
        hours: dataContacts.item.hours,
        map: dataContacts.item.map,
        text_delivery: dataContacts.item.text_delivery,
        img: dataContacts.item.img,
    })
    const inputFileRef = useRef(null)
    const handleChangeFile = async (e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0]
            console.log(file)
            formData.append('img', file)
            const { data } = await $authHost.put('api/contacts/1', formData)
            setDataContactsNew(data)
        } catch (e) {
            alert('Помилка при загрузці зображення')
        }
    }
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    useEffect(() => {
        setTimeout(() => {
            setUpdateStatus(false)
        }, 4000)
    }, [dataContactsNew])
    const onClickAddAddres = () => {
        setAddressList([...adressList, newAddress])
        setShowNewAddres(false)
        setNewAddres('')
    }
    const onClickDelAddress = (item) => {
        setAddressList([...adressList.filter((p) => p != item)])
    }
    const handleUpdateData = async (e) => {
        e.preventDefault()
        const dataText = {
            ...dataContactsNew,
            adress: adressList,
        }
        try {
            const response = await $authHost.put('api/contacts/1', dataText)
            response.statusText === 'OK' && setUpdateStatus(true)
            setDataContactsNew(response.data)
        } catch (err) {
            return err.response.data
        }
    }

    return (
        dataContacts.status === 'loaded' && (
            <form onSubmit={handleUpdateData}>
                <button className="a-btn update" type="submit">
                    <span className="a-btn-inner">
                        {updateStatus ? (
                            <span>Збережено</span>
                        ) : (
                            <span>Зберегти зміни</span>
                        )}
                    </span>
                </button>
                <div className="contacts-admin">
                    <div
                        style={{
                            fontSize: '1.625rem',
                            marginBottom: '.75rem',
                        }}
                    >
                        Контактна інформація
                    </div>
                    <div className="row">
                        <div className="input col-6 col-lg-4 mb-3">
                            <label>
                                <input
                                    type="text"
                                    required
                                    value={dataContactsNew.phone1}
                                    className={`${
                                        dataContactsNew.phone1 != ''
                                            ? 'filled'
                                            : ''
                                    }`}
                                    onChange={(e) =>
                                        setDataContactsNew({
                                            ...dataContactsNew,
                                            phone1: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">Номер телефону</span>
                            </label>
                        </div>
                        <div className="input col-6 col-lg-4 mb-3">
                            <label>
                                <input
                                    type="text"
                                    required
                                    value={dataContactsNew.phone2}
                                    className={`${
                                        dataContactsNew.phone2 != ''
                                            ? 'filled'
                                            : ''
                                    }`}
                                    onChange={(e) =>
                                        setDataContactsNew({
                                            ...dataContactsNew,
                                            phone2: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">Номер телефону</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input col-6 col-lg-4 mb-3">
                            <label>
                                <input
                                    type="text"
                                    required
                                    value={dataContactsNew.facebook}
                                    className={`${
                                        dataContactsNew.facebook != ''
                                            ? 'filled'
                                            : ''
                                    }`}
                                    onChange={(e) =>
                                        setDataContactsNew({
                                            ...dataContactsNew,
                                            facebook: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">
                                    Посилання на Facebook
                                </span>
                            </label>
                        </div>
                        <div className="input col-6 col-lg-4 mb-3">
                            <label>
                                <input
                                    type="text"
                                    required
                                    value={dataContactsNew.instagram}
                                    className={`${
                                        dataContactsNew.instagram != ''
                                            ? 'filled'
                                            : ''
                                    }`}
                                    onChange={(e) =>
                                        setDataContactsNew({
                                            ...dataContactsNew,
                                            instagram: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">
                                    Посилання на Instagram
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input col-6 col-lg-4 mb-3">
                            <label>
                                <input
                                    type="text"
                                    required
                                    value={dataContactsNew.hours}
                                    className={`${
                                        dataContactsNew.hours != ''
                                            ? 'filled'
                                            : ''
                                    }`}
                                    onChange={(e) =>
                                        setDataContactsNew({
                                            ...dataContactsNew,
                                            hours: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">Графік роботи</span>
                            </label>
                        </div>
                        <div className="input col-6 col-lg-4 mb-3">
                            <label>
                                <input
                                    type="text"
                                    required
                                    value={dataContactsNew.map}
                                    className={`${
                                        dataContactsNew.map != ''
                                            ? 'filled'
                                            : ''
                                    }`}
                                    onChange={(e) =>
                                        setDataContactsNew({
                                            ...dataContactsNew,
                                            map: e.target.value,
                                        })
                                    }
                                />
                                <span className="label">Iframe карти</span>
                            </label>
                        </div>
                    </div>
                    <div className="row address-list">
                        <div
                            className="row-title"
                            style={{
                                fontSize: '1.5rem',
                                marginTop: '.5rem',
                                marginBottom: '.5rem',
                            }}
                        >
                            Список адрес закладів
                        </div>
                        {adressList?.map((item, index) => (
                            <div
                                key={index}
                                className="col-6 col-lg-4 mb-3 d-flex"
                            >
                                <div className="input" style={{ flex: '8' }}>
                                    <label>
                                        <input
                                            type="text"
                                            required
                                            value={item}
                                            className={`${
                                                item != '' ? 'filled' : ''
                                            }`}
                                            //onChange={(e) =>
                                            //    setPasswordRepeat({
                                            //        statusPassword: true,
                                            //        password: e.target.value,
                                            //    })
                                            //}
                                        />
                                        <span className="label">
                                            Адреса {index + 1}
                                        </span>
                                    </label>
                                </div>{' '}
                                {index === 0 ? (
                                    <button
                                        className="button-icon del"
                                        type="button"
                                        disabled
                                    >
                                        &#10007;
                                    </button>
                                ) : (
                                    <button
                                        className="button-icon del"
                                        type="button"
                                        onClick={() => {
                                            onClickDelAddress(item)
                                        }}
                                    >
                                        &#10007;
                                    </button>
                                )}
                            </div>
                        ))}
                        {showNewAddress && (
                            <div className="col-6 col-lg-4 mb-3 d-flex">
                                <div className="input" style={{ flex: '8' }}>
                                    <label>
                                        <input
                                            type="text"
                                            required
                                            value={newAddress}
                                            className={`${
                                                newAddress != '' ? 'filled' : ''
                                            }`}
                                            onChange={(e) =>
                                                setNewAddres(e.target.value)
                                            }
                                        />
                                        <span className="label">
                                            Нова адреса
                                        </span>
                                    </label>
                                </div>{' '}
                                <button
                                    type="button"
                                    className="button-icon add"
                                    onClick={onClickAddAddres}
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                    <button
                        className="button-add-address"
                        disabled={showNewAddress ? 'true' : ''}
                        onClick={() => setShowNewAddres(true)}
                    >
                        Додати ще
                    </button>
                    <div className="row mt-4">
                        <div className="col-12 col-lg-8">
                            <div className="textarea">
                                <label>
                                    <TextareaAutosize
                                        maxRows={999}
                                        value={dataContactsNew.text_delivery}
                                        className={`${
                                            dataContactsNew.text_delivery != ''
                                                ? 'filled'
                                                : ''
                                        }`}
                                        onChange={(e) =>
                                            setDataContactsNew({
                                                ...dataContactsNew,
                                                text_delivery: e.target.value,
                                            })
                                        }
                                    ></TextareaAutosize>
                                    <span className="label">
                                        Текст для сторінки {'Доставка'}
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="row-title"
                            style={{
                                fontSize: '1.5rem',
                                marginTop: '1.5rem',
                                marginBottom: '.75rem',
                            }}
                        >
                            Зображення для сторінки Доставка
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="img">
                                <input
                                    ref={inputFileRef}
                                    type="file"
                                    name="img"
                                    hidden
                                    onChange={handleChangeFile}
                                />
                                <button
                                    type="button"
                                    className="upload-file button-file-img"
                                    onClick={() => inputFileRef.current.click()}
                                >
                                    <ImFolderUpload />
                                </button>
                                {/*{dataAbout.img1 && (
                                    <button
                                        type="button"
                                        className="delete-file button-file-img"
                                        onClick={() =>
                                            setDataAbout({
                                                ...dataAbout,
                                                img1: '',
                                            })
                                        }
                                    >
                                        <MdOutlineDeleteForever />
                                    </button>
                                )}*/}

                                {dataContactsNew.img ? (
                                    <img
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            dataContactsNew.img
                                        }
                                        alt="delivery_img"
                                    />
                                ) : (
                                    <img
                                        src="/image/placeholder.webp"
                                        alt="delivery_img"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    )
}

export default ContactsAdmin
