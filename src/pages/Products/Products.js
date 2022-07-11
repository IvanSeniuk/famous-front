//import ProductsList from '../../components/ProductsList/ProductsList_copy'
import ProductsList from '../../components/ProductsList/ProductsList'
import { useDispatch } from 'react-redux'
//import axios from '../../http/axios'

import Hero from '../../components/Hero/Hero'
import { useEffect } from 'react'
//import { fetchProducts } from '../../redux/slices/products/productsSlice'
import { fetchProductsPoster } from '../../redux/slices/poster/productsSlice/ProductsSlice'

const Products = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsPoster())
    }, [dispatch])

    return (
        <>
            <Hero />
            <ProductsList />
        </>
    )
}

export default Products
