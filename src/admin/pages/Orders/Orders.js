import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersPoster } from '../../../redux/slices/poster/orderSlice/OrderSlice'
import { fetchProductsPoster } from '../../../redux/slices/poster/productsSlice/ProductsSlice'
import Moment from 'react-moment'

import './Orders.scss'

const Orders = () => {
    const { getOrdersStatus, orders } = useSelector(
        (state) => state.orderPosterSlice
    )
    const productsList = useSelector((state) => state.productsPoster.items)

    const [showOrder, setShowOrder] = useState(0)
    const dispatch = useDispatch()
    //const getProduct = (id) => {
    //    dispatch(fetchProductPoster(id))
    //}
    useEffect(() => {
        dispatch(getOrdersPoster())
        dispatch(fetchProductsPoster())
    }, [dispatch])

    return (
        <>
            <div className="orders">
                <div className="orders-list">
                    <div className="item title row ">
                        <div className="col-1">№</div>
                        <div className="col-2">Ім’я клієнта</div>
                        <div className="col-2">Номер телефону</div>
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            Тип
                        </div>
                        <div className="col-2">Адреса</div>
                        <div className="col-1">Дата</div>
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            Статус
                        </div>
                        <div className="col-2">Дії</div>
                    </div>
                    {getOrdersStatus === 'loaded' &&
                        orders
                            .map((item) => (
                                <div key={item.incoming_order_id}>
                                    <div
                                        className={
                                            showOrder === item.incoming_order_id
                                                ? 'item row active'
                                                : 'item row'
                                        }
                                    >
                                        <div className="col-1">
                                            {item.incoming_order_id}
                                        </div>

                                        <div className="col-2">
                                            {item.first_name} {item.last_name}
                                        </div>
                                        <div className="col-2">
                                            {item.phone}
                                        </div>
                                        <div className="service-mode col-1">
                                            {item.service_mode === 1 && (
                                                <span>В закладі</span>
                                            )}
                                            {item.service_mode === 2 && (
                                                <span className="carried">
                                                    Навиніс
                                                </span>
                                            )}
                                            {item.service_mode === 3 && (
                                                <span className="delivery">
                                                    Доставка
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-2">
                                            {item.address}
                                        </div>
                                        <div className="col-1">
                                            <Moment format="DD.MM.YYYY">
                                                {item.created_at}
                                            </Moment>
                                        </div>
                                        <div className="status col-1">
                                            {item.status === 0 && (
                                                <span className="new">
                                                    Нове
                                                </span>
                                            )}
                                            {item.status === 1 && (
                                                <span className="accepted">
                                                    Прийнято
                                                </span>
                                            )}
                                            {item.status === 7 && (
                                                <span className="rejected">
                                                    Відхилено
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-2">
                                            {showOrder ===
                                            item.incoming_order_id ? (
                                                <button
                                                    className="update"
                                                    type="button"
                                                    onClick={() =>
                                                        setShowOrder(0)
                                                    }
                                                >
                                                    Сховати
                                                </button>
                                            ) : (
                                                <button
                                                    className="update view"
                                                    type="button"
                                                    onClick={() => {
                                                        setShowOrder(
                                                            item.incoming_order_id
                                                        )
                                                    }}
                                                >
                                                    Переглянути
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {showOrder === item.incoming_order_id && (
                                        <>
                                            <div className="item item-sub title pe-4 ps-4 row">
                                                <span className="col-4">
                                                    Продукт
                                                </span>
                                                <span className="col-5">
                                                    Модифікації
                                                </span>
                                                <span className="d-flex align-items-center justify-content-center col-1">
                                                    Кількість
                                                </span>
                                                <span className="d-flex align-items-center justify-content-center col-1">
                                                    Ціна
                                                </span>
                                                <span className="d-flex align-items-center justify-content-center col-1">
                                                    Сума
                                                </span>
                                            </div>
                                            {item.products?.map((product) =>
                                                productsList
                                                    .filter(
                                                        (product_item) =>
                                                            product_item.product_id ==
                                                            product.product_id
                                                    )
                                                    .map((product_item) => (
                                                        <div
                                                            key={
                                                                product.io_product_id
                                                            }
                                                            className="item item-sub pe-4 ps-4 row"
                                                        >
                                                            <span className="name col-4">
                                                                <img
                                                                    src={
                                                                        process
                                                                            .env
                                                                            .REACT_APP_POSTER_API_URL +
                                                                        product_item.photo
                                                                    }
                                                                    alt={
                                                                        product_item.product_name
                                                                    }
                                                                />
                                                                {
                                                                    product_item.product_name
                                                                }
                                                            </span>
                                                            <span className="col-5 ">
                                                                <div
                                                                    style={{
                                                                        width: '100%',
                                                                    }}
                                                                >
                                                                    {product.modification &&
                                                                    product_item.group_modifications
                                                                        ? product_item.group_modifications.map(
                                                                              (
                                                                                  mod
                                                                              ) => (
                                                                                  <div
                                                                                      key={
                                                                                          mod.dish_modification_group_id
                                                                                      }
                                                                                      className="pt-1 pb-1"
                                                                                  >
                                                                                      <span className="col-3">
                                                                                          {
                                                                                              mod.name
                                                                                          }

                                                                                          :{' '}
                                                                                      </span>
                                                                                      {product.modification.map(
                                                                                          (
                                                                                              m
                                                                                          ) =>
                                                                                              mod.modifications
                                                                                                  .filter(
                                                                                                      (
                                                                                                          mod_group
                                                                                                      ) =>
                                                                                                          mod_group.dish_modification_id ==
                                                                                                          m.m
                                                                                                  )
                                                                                                  .map(
                                                                                                      (
                                                                                                          mod_group
                                                                                                      ) => (
                                                                                                          <span
                                                                                                              key={
                                                                                                                  mod_group.dish_modification_id
                                                                                                              }
                                                                                                          >
                                                                                                              {
                                                                                                                  mod_group.name
                                                                                                              }{' '}
                                                                                                              {`${
                                                                                                                  m.a >
                                                                                                                  1
                                                                                                                      ? ` - ${m.a} шт.`
                                                                                                                      : ''
                                                                                                              }`}
                                                                                                              ;&nbsp;
                                                                                                          </span>
                                                                                                      )
                                                                                                  )
                                                                                      )}
                                                                                  </div>
                                                                              )
                                                                          )
                                                                        : 'Стандарт'}
                                                                </div>
                                                            </span>
                                                            <span className="d-flex align-items-center justify-content-center col-1">
                                                                {Math.round(
                                                                    product.count
                                                                )}
                                                            </span>
                                                            <span className="d-flex align-items-center justify-content-center col-1">
                                                                {product.price /
                                                                    100}{' '}
                                                                грн
                                                            </span>
                                                            <span className="d-flex align-items-center justify-content-center col-1">
                                                                {Math.round(
                                                                    (product.count *
                                                                        product.price) /
                                                                        100
                                                                )}{' '}
                                                                грн
                                                            </span>
                                                        </div>
                                                    ))
                                            )}
                                        </>
                                    )}
                                </div>
                            ))
                            .sort((a, b) =>
                                a.incoming_order_id < b.incoming_order_id
                                    ? 1
                                    : -1
                            )}
                </div>
            </div>
        </>
    )
}

export default Orders
