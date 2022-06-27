import Categories from '../Categories/Categories'
import ProductCard from '../ProductCard/ProductCard'
import ProductsObj from '../../ProductsArray/ProductsObj.json'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductCardPizza from '../ProductCard/ProductCardPizza'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../../redux/slices/pizzaFilters/pizzaFiltersSlice'

const getProductsObj = (array) => {
    return array.reduce(
        (object, product) => ({
            ...object,
            [product.value]: product,
        }),
        {}
    )
}
//const products = []
//fetch('https://6294d433a7203b3ed0721c1d.mockapi.io/products')
//    .then((res) => {
//        return res.json()
//    })
//    .then((products) => {
//        console.log('Масив', products[0].sushi)
//    })

const obj = ProductsObj.productsTypes

const ProductsList = ({ productsObj = getProductsObj(obj) }) => {
    const { productstype } = useParams()
    //const { category } = useParams()

    const product = productsObj[productstype]

    const categoryId = useSelector((state) => state.filter.categoryId)
    const dispatch = useDispatch()
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const productCat =
        productsObj[productstype]['categories'][categoryId].category

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
                <Categories
                    product={product}
                    value={categoryId}
                    onChangeCategory={onChangeCategory}
                />
            </div>
            <div className="container">
                <div className="o-section-content pb-4 pb-lg-5">
                    <div className="o-products-list">
                        <div className="m-products-list">
                            <div className="row m-products-list__row ">
                                {categoryId === 0
                                    ? productstype === 'pizza'
                                        ? ProductsObj[productstype].map(
                                              (obj) => (
                                                  <ProductCardPizza
                                                      key={obj.id}
                                                      name={obj.name}
                                                      price={obj.price}
                                                      image={obj.img}
                                                      image2={obj.img2}
                                                      composition={
                                                          obj.composition
                                                      }
                                                      weight={obj.weight}
                                                      config={obj.config}
                                                  />
                                              )
                                          )
                                        : ProductsObj[productstype].map(
                                              (obj) => (
                                                  <ProductCard
                                                      key={obj.id}
                                                      name={obj.name}
                                                      price={obj.price}
                                                      image={obj.img}
                                                      composition={
                                                          obj.composition
                                                      }
                                                      weight={obj.weight}
                                                  />
                                              )
                                          )
                                    : productstype === 'pizza'
                                    ? ProductsObj[productstype]
                                          .filter(
                                              (item) =>
                                                  item.category === productCat
                                          )
                                          .map((obj) => (
                                              <ProductCardPizza
                                                  key={obj.id}
                                                  name={obj.name}
                                                  price={obj.price}
                                                  image={obj.img}
                                                  image2={obj.img2}
                                                  composition={obj.composition}
                                                  weight={obj.weight}
                                                  config={obj.config}
                                              />
                                          ))
                                    : ProductsObj[productstype]
                                          .filter(
                                              (item) =>
                                                  item.category === productCat
                                          )
                                          .map((obj) => (
                                              <ProductCard
                                                  key={obj.id}
                                                  name={obj.name}
                                                  price={obj.price}
                                                  image={obj.img}
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
