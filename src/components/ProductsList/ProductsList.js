import Categories from '../Categories/Categories'
import ProductCard from '../ProductCard/ProductCard'
//import ProductsObj from '../../ProductsArray/ProductsObj.json'
import { Navigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductCardPizza from '../ProductCard/ProductCardPizza'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsPoster } from '../../redux/slices/poster/productsSlice/ProductsSlice'
import { fetchCategoriesPoster } from '../../redux/slices/poster/productsSlice/CategoriesSlice'
import Sceleton from '../ProductCard/Sceleton/Sceleton'
import SceletonTitle from '../ProductCard/Sceleton/SceletonTitle'
import SceletonMobile from '../ProductCard/Sceleton/SceletonMobile'

const ProductsList = () => {
    const { category } = useParams()
    const { subcategory } = useParams()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productsPoster)
    //console.log(activeCat)
    useEffect(() => {
        dispatch(fetchProductsPoster())
    }, [dispatch])
    const categories = useSelector((state) => state.categoriesPoster)

    useEffect(() => {
        dispatch(fetchCategoriesPoster())
    }, [dispatch])
    const categoryObj =
        categories.status === 'loaded' &&
        categories.items.find(
            (item) =>
                item.category_id === category && item.parent_category === '0'
        )
    const subcategoryObj =
        subcategory != undefined &&
        categories.status === 'loaded' &&
        categories.items.find(
            (item) =>
                item.category_id === subcategory &&
                item.parent_category === category
        )
    if (categoryObj === undefined || subcategoryObj === undefined) {
        return <Navigate to="/" />
    }

    return (
        <section className="o-products">
            <div className="container-sm">
                <div className="m-section-top">
                    <div className="a-section-title">
                        {products.status === 'loaded' ? (
                            <h1>{categoryObj.category_name}</h1>
                        ) : (
                            <div className="sceleton-title">
                                <SceletonTitle />
                            </div>
                        )}
                    </div>
                    <div className="m-sort"></div>
                </div>
            </div>
            <div className="line-bg"></div>
            <div className="container-sm">
                <Categories
                    categories={categories}
                    value={category}
                    //onChangeCategory={onChangeCategory}
                />
            </div>
            <div className="container">
                <div className="o-section-content pb-4 pb-lg-5">
                    <div className="o-products-list">
                        <div className="m-products-list">
                            <div className="row m-products-list__row ">
                                {products.status === 'loaded' ? (
                                    !subcategory &&
                                    (category === '11'
                                        ? categories.items
                                              .filter(
                                                  (cat) =>
                                                      cat.parent_category ===
                                                      category
                                              )
                                              .map((catAll) =>
                                                  products.items
                                                      .filter(
                                                          (item) =>
                                                              item.menu_category_id ===
                                                              catAll.category_id
                                                      )

                                                      .map((obj) => (
                                                          <ProductCardPizza
                                                              key={
                                                                  obj.product_id
                                                              }
                                                              {...obj}
                                                          />
                                                      ))
                                              )
                                        : categories.items
                                              .filter(
                                                  (cat) =>
                                                      cat.parent_category ===
                                                          category ||
                                                      cat.category_id ===
                                                          category
                                              )
                                              .map((catAll) =>
                                                  products.items
                                                      .filter(
                                                          (item) =>
                                                              item.menu_category_id ===
                                                              catAll.category_id
                                                      )

                                                      .map((obj) => (
                                                          <ProductCard
                                                              key={
                                                                  obj.product_id
                                                              }
                                                              {...obj}
                                                          />
                                                      ))
                                              ))
                                ) : (
                                    <>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                    </>
                                )}

                                {products.status === 'loaded' ? (
                                    subcategory &&
                                    (category === '11'
                                        ? products.items
                                              .filter(
                                                  (item) =>
                                                      item.menu_category_id ===
                                                      subcategory
                                              )
                                              .map((obj) => (
                                                  <ProductCardPizza
                                                      key={obj.product_id}
                                                      {...obj}
                                                  />
                                              ))
                                        : products.items
                                              .filter(
                                                  (item) =>
                                                      item.menu_category_id ===
                                                      subcategory
                                              )
                                              .map((obj) => (
                                                  <ProductCard
                                                      key={obj.product_id}
                                                      {...obj}
                                                  />
                                              )))
                                ) : (
                                    <>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4 sceleton-card">
                                            <Sceleton className="sceleton-desc mb-3" />
                                            <SceletonMobile className="sceleton-mob mb-3" />
                                        </div>
                                    </>
                                )}
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
