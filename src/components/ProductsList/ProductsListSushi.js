import Categories from '../Categories/Categories_copy'
import ProductCard from '../ProductCard/ProductCard'
import ProductsObj from '../../ProductsArray/ProductsObj.json'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

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
    const productstype = 'sushi'
    const { category } = useParams()
    const product = productsObj[productstype]

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
                            <div className="row m-products-list__row">
                                {location.pathname === `/`
                                    ? ProductsObj['sushi'].map((obj) => (
                                          <ProductCard
                                              key={obj.id}
                                              name={obj.name}
                                              price={obj.price}
                                              image={obj.img}
                                              productType={obj.productType}
                                              composition={obj.composition}
                                              weight={obj.weight}
                                          />
                                      ))
                                    : ProductsObj[productstype]
                                          .filter(
                                              (item) =>
                                                  item.category === category
                                          )
                                          .map((obj) => (
                                              <ProductCard
                                                  key={obj.id}
                                                  name={obj.name}
                                                  price={obj.price}
                                                  productType={obj.productType}
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
