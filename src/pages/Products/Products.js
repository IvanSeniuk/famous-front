import ProductsList from '../../components/ProductsList/ProductsList_copy'
import { useDispatch } from 'react-redux'
//import axios from '../../http/axios'

import Hero from '../../components/Hero/Hero'
import { useEffect } from 'react'
import { fetchProducts } from '../../redux/slices/products/productsSlice'

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    })
    return (
        <>
            <Hero />
            <ProductsList />
        </>
    )
}

export default Products
