import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    createCategoriesPoster,
    fetchCategoriesPoster,
} from '../../../redux/slices/poster/productsSlice/CategoriesSlice'

const CreateCategories = () => {
    //const [title, setTitle] = useState('')
    const [file, setFile] = useState('Завантажити зображення')
    //const [selectCategory, setSelectCategory] = useState('0')
    //console.log(title, file, selectCategory)

    const [newCategory, setNewCategory] = useState({
        category_name: '',
        parent_category: '0',
    })
    const inputFileRef = useRef()
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categoriesPoster)
    useEffect(() => {
        dispatch(fetchCategoriesPoster())
    }, [dispatch])

    const handleCreateCategory = async (e) => {
        e.preventDefault()
        //if (inputFileRef.current.files.length === 0) {
        //    dispatch(createCategoriesPoster(newCategory))
        //} else {
        //    setNewCategory({
        //        ...newCategory,
        //        category_photo: inputFileRef.current.files[0],
        //    })
        //    console.log(inputFileRef.current.files[0])
        //    dispatch(createCategoriesPoster(newCategory))
        //}
        dispatch(createCategoriesPoster(newCategory))
    }

    return (
        <form className="category-create" onSubmit={handleCreateCategory}>
            <div className="category-title">Створення нової категорії</div>
            <div className="category-create__row">
                <div className="item">
                    <div className="input">
                        <label>
                            <input
                                type="text"
                                value={newCategory.category_name}
                                className={`${
                                    newCategory.category_name.length > 0
                                        ? 'filled'
                                        : ''
                                }`}
                                onChange={(e) =>
                                    setNewCategory({
                                        ...newCategory,
                                        category_name: e.target.value,
                                    })
                                }
                            />
                            <span className="label">Назва категорії</span>
                        </label>
                    </div>
                </div>
                <div className="item">
                    <div className="select">
                        <label>
                            Виберіть батьківську категорію
                            <div className="select__inner">
                                <select
                                    onChange={(e) =>
                                        setNewCategory({
                                            ...newCategory,
                                            parent_category: e.target.value,
                                        })
                                    }
                                >
                                    <option selected value="0">
                                        Немає батьківської категорії
                                    </option>
                                    {categories.status === 'loaded' &&
                                        categories.items
                                            .filter(
                                                (item) =>
                                                    item.parent_category === '0'
                                            )
                                            .map((item) => (
                                                <>
                                                    <option
                                                        key={item.category_id}
                                                        value={item.category_id}
                                                    >
                                                        {item.category_name}
                                                    </option>
                                                </>
                                            ))}
                                </select>
                            </div>
                        </label>
                    </div>
                </div>
                {newCategory.parent_category === '0' && (
                    <div className="item">
                        <input
                            hidden
                            ref={inputFileRef}
                            type="file"
                            name="img"
                            onChange={(e) =>
                                setFile(
                                    e.target.files.length === 0
                                        ? 'Завантажити Зображення'
                                        : `${inputFileRef.current.files[0].name}`
                                )
                            }
                        />
                        <button
                            type="button"
                            className="upload-file"
                            onClick={() => inputFileRef.current.click()}
                        >
                            {file}
                        </button>
                    </div>
                )}
            </div>
            <button
                className="create"
                style={{ marginTop: '.75rem' }}
                onClick={() => console.log(inputFileRef.current.files)}
            >
                Створити категорію
            </button>
        </form>
    )
}

export default CreateCategories
