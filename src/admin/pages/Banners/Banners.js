import { useEffect, useRef } from 'react'
//import axios from '../../../http/axios'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { TbCirclePlus } from 'react-icons/tb'
import {
    deleteBanner,
    fetchBanners,
    createBanner,
} from '../../../redux/slices/banners/bannersSlice'

//import { $authHost } from '../../../http'
import './Banners.scss'

const Hero = () => {
    const banners = useSelector((state) => state.banners)
    console.log(banners)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBanners())
    }, [dispatch])

    const onClickRemove = (id) => {
        dispatch(deleteBanner(id))
    }
    //const[bannerCreate, setBannerCreate] = useState()
    const inputFileRef1 = useRef(null)
    const handleCreateFile = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        const file = e.target.files[0]
        const id = e.target.name
        formData.append(`img`, file)
        formData.append(`id`, id)
        dispatch(createBanner(formData))
    }

    return (
        <div className="banners-list">
            {banners.status === 'loaded'
                ? banners.items.map((banner) => (
                      <div className="item" key={banner.id}>
                          <div className="img">
                              <button
                                  style={{ left: '1rem' }}
                                  type="button"
                                  className="delete-file button-file-img"
                                  onClick={() => {
                                      onClickRemove(banner.id)
                                  }}
                              >
                                  <MdOutlineDeleteForever />
                              </button>
                              <img
                                  src={
                                      process.env.REACT_APP_API_URL + banner.img
                                  }
                              />
                          </div>
                      </div>
                  ))
                : [...new Array(3)].map((item, index) => (
                      <div className="item" key={index}>
                          <div className="img">
                              <img
                                  src="/image/placeholder.webp"
                                  alt="about_img1"
                              />
                          </div>
                      </div>
                  ))}
            <input
                ref={inputFileRef1}
                type="file"
                name="img1"
                hidden
                onChange={handleCreateFile}
            />
            <div className="item">
                <button
                    className="add-banner"
                    type="button"
                    onClick={() => inputFileRef1.current.click()}
                >
                    <TbCirclePlus />
                </button>
            </div>
        </div>
    )
}

export default Hero
