import axios from '../../../http/axios'
import { useEffect, useState, useRef } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { $authHost } from '../../../http'

import './ActionsAdmin.scss'

const ActionsUpdate = () => {
    const [updateStatus, setUpdateStatus] = useState(false)
    const [action, setAction] = useState({
        title: '',
        text: '',
    })
    const [file, setFile] = useState('Завантажити зображення')
    const location = useLocation()
    const { actionsId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(`api/actions/${actionsId}`)
                if (!data) {
                    navigate('/admin/pages/actions')
                } else {
                    setAction(data)
                }
            } catch (error) {
                alert('Помилка при отриманні даних сторінки')
                navigate('/admin/pages/actions')
            }
        }
        location.pathname === `/admin/pages/actions/update/${actionsId}` &&
            fetchData()
    }, [actionsId, navigate, location.pathname])

    const inputFileRef = useRef(null)

    const handleUpdateAction = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        const file = inputFileRef.current.files[0]
        formData.append(`img`, file)
        formData.append(`title`, action.title)
        formData.append(`text`, action.text)
        if (location.pathname === `/admin/pages/actions/create`) {
            try {
                const response = await $authHost.post(`api/actions`, formData)
                response.statusText === 'OK' && setUpdateStatus(true)
                setFile('Завантажити зображення')
                setAction(response.data)
                setTimeout(() => {
                    navigate(`/admin/pages/actions/update/${response.data.id}`)
                    setUpdateStatus(false)
                }, 3000)
            } catch (err) {
                return err.response.data
            }
        } else if (
            location.pathname === `/admin/pages/actions/update/${actionsId}`
        ) {
            try {
                const response = await $authHost.put(
                    `api/actions/${actionsId}`,
                    formData
                )
                response.statusText === 'OK' && setUpdateStatus(true)
                setFile('Завантажити зображення')
                setAction(response.data)
                setTimeout(() => {
                    setUpdateStatus(false)
                }, 4000)
            } catch (err) {
                return err.response.data
            }
        }
    }

    return (
        <>
            <form className="actions-update" onSubmit={handleUpdateAction}>
                {location.pathname === '/admin/pages/actions/create' ? (
                    <button className="a-btn update" type="submit">
                        <span className="a-btn-inner">
                            {updateStatus ? (
                                <span>Додано</span>
                            ) : (
                                <span>Додати акцію</span>
                            )}
                        </span>
                    </button>
                ) : (
                    <button className="a-btn update" type="submit">
                        <span className="a-btn-inner">
                            {updateStatus ? (
                                <span>Збережено</span>
                            ) : (
                                <span>Зберегти зміни</span>
                            )}
                        </span>
                    </button>
                )}
                {action.img && (
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 mb-4">
                        <div
                            className="img"
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '0',
                                paddingBottom: '45%',
                            }}
                        >
                            <img
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    left: '0',
                                    top: '0',
                                    objectFit: 'cover',
                                }}
                                src={process.env.REACT_APP_API_URL + action.img}
                                alt={action.title}
                            />
                        </div>
                    </div>
                )}
                <input
                    ref={inputFileRef}
                    type="file"
                    name="img1"
                    hidden
                    onChange={(e) =>
                        setFile(
                            e.target.files.length === 0
                                ? 'Завантажити зображення'
                                : `${inputFileRef.current.files[0].name}`
                        )
                    }
                />
                <button
                    type="button"
                    className="update mb-3"
                    onClick={() => inputFileRef.current.click()}
                >
                    {file}
                </button>

                <div className="title col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 mb-4">
                    <div className="input">
                        <label>
                            <input
                                type="text"
                                required
                                value={action.title}
                                className={`${
                                    action.title != '' ? 'filled' : ''
                                }`}
                                onChange={(e) =>
                                    setAction({
                                        ...action,
                                        title: e.target.value,
                                    })
                                }
                            />
                            <span className="label">Назва акції</span>
                        </label>
                    </div>
                </div>

                <div className="text col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 mb-4">
                    <div className="textarea">
                        <label>
                            <ReactTextareaAutosize
                                maxRows={9999}
                                minRows={2}
                                value={action.text}
                                className={`${
                                    action.text != '' ? 'filled' : ''
                                }`}
                                onChange={(e) =>
                                    setAction({
                                        ...action,
                                        text: e.target.value,
                                    })
                                }
                            ></ReactTextareaAutosize>
                            <span className="label">Опис акції</span>
                        </label>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ActionsUpdate
