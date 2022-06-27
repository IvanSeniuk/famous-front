import Categories from '../Categories/Categories_copy'
import ProductCard from '../ProductCard/ProductCard'
import ProductsObj from '../../ProductsArray/ProductsObj.json'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductCardPizza from '../ProductCard/ProductCardPizza'
import { useSelector } from 'react-redux'
//import { useEffect } from 'react'
//import { fetchProducts } from '../../redux/slices/products/productsSlice'

const getProductsObj = (array) => {
    return array.reduce(
        (object, product) => ({
            ...object,
            [product.value]: product,
        }),
        {}
    )
}

const obj = ProductsObj.productsTypes

const ProductsList = ({ productsObj = getProductsObj(obj) }) => {
    const products = useSelector((state) => state.products)
    const { productstype } = useParams()
    const { category } = useParams()
    const location = useLocation()
    const product = productsObj[productstype]
    if (product === undefined) {
        return <Navigate to="/" />
    }

    return (
        <section className="o-products">
            <div className="container-sm">
                <div className="m-section-top">
                    <div className="a-section-title">
                        <h1>{product.title}</h1>
                    </div>
                    <div className="m-sort"></div>
                </div>
            </div>
            <div className="line-bg"></div>
            <div className="container-sm">
                <Categories product={product} />
            </div>
            <div className="container">
                <div className="o-section-content pb-4 pb-lg-5">
                    <div className="o-products-list">
                        <div className="m-products-list">
                            <div className="row m-products-list__row ">
                                {location.pathname === `/${productstype}`
                                    ? productstype === 'pizza'
                                        ? products.items
                                              .filter(
                                                  (item) =>
                                                      item.productType ===
                                                      productstype
                                              )
                                              .map((obj) => (
                                                  <ProductCardPizza
                                                      key={obj.id}
                                                      name={obj.name}
                                                      price={obj.price}
                                                      image={obj.img}
                                                      image2={obj.img2}
                                                      productType={
                                                          obj.productType
                                                      }
                                                      id={obj.id}
                                                      composition={
                                                          obj.composition
                                                      }
                                                      weight={obj.weight}
                                                      config={obj.config}
                                                  />
                                              ))
                                        : products.items
                                              .filter(
                                                  (item) =>
                                                      item.productType ===
                                                      productstype
                                              )
                                              .map((obj) => (
                                                  <ProductCard
                                                      key={obj.id}
                                                      name={obj.name}
                                                      price={obj.price}
                                                      productType={
                                                          obj.productType
                                                      }
                                                      id={obj.id}
                                                      image={obj.img}
                                                      composition={
                                                          obj.composition
                                                      }
                                                      weight={obj.weight}
                                                  />
                                              ))
                                    : productstype === 'pizza'
                                    ? products.items
                                          .filter(
                                              (item) =>
                                                  item.productCategory ===
                                                      category &&
                                                  item.productType ===
                                                      productstype
                                          )
                                          .map((obj) => (
                                              <ProductCardPizza
                                                  key={obj.id}
                                                  name={obj.name}
                                                  price={obj.price}
                                                  image={obj.img}
                                                  image2={obj.img2}
                                                  productType={obj.productType}
                                                  composition={obj.composition}
                                                  weight={obj.weight}
                                                  config={obj.config}
                                                  id={obj.id}
                                              />
                                          ))
                                    : products.items
                                          .filter(
                                              (item) =>
                                                  item.productCategory ===
                                                  category
                                          )
                                          .map((obj) => (
                                              <ProductCard
                                                  key={obj.id}
                                                  name={obj.name}
                                                  price={obj.price}
                                                  productType={obj.productType}
                                                  image={obj.img}
                                                  id={obj.id}
                                                  composition={obj.composition}
                                                  weight={obj.weight}
                                              />
                                          ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

ProductsList.propTypes = {
    productsObj: PropTypes.object,
}

export default ProductsList
