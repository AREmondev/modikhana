import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext()

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [checkoutpd, setCheckoutpd] = useState()
  const [order, setOrder] = useState([])

  const addOrder = async (name, weight, price, userId) => {
    const newOrder = {
      productName: name,
      productWeight: weight,
      productPrice: price,
      orderBy: userId,
    }
    await axios
      .post('https://vast-atoll-02815.herokuapp.com/api/order', newOrder, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json',
        },
      })
      .then(() => console.log('added'))
      .catch((err) => {
        console.error(err)
      })
  }

  const addProducts = async (
    name,
    weight,
    price,
    img,
    setName,
    setWeight,
    setPrice,
  ) => {
    const newProduct = {
      productName: name,
      productWeight: weight,
      productPrice: price,
      productImg: img,
    }
    await axios
      .post('https://vast-atoll-02815.herokuapp.com/api/product/', newProduct, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json',
        },
      })
      .then(
        () => console.log('added'),
        setName(''),
        setWeight(''),
        setPrice(''),
      )
      .catch((err) => {
        console.error(err)
      })
  }
  const deleteProduct = async (id) => {
    await axios.delete(
      `https://vast-atoll-02815.herokuapp.com/api/product/${id}`,
    )
  }
  const deleteOrder = async (id) => {
    await axios.delete(`https://vast-atoll-02815.herokuapp.com/api/order/${id}`)
  }

  useEffect(() => {
    // Load All Products From server
    async function loadProducts() {
      await axios
        .get('https://vast-atoll-02815.herokuapp.com/api/product')
        .then((data) => setProducts(data.data))
      setLoading(false)
    }
    loadProducts()
  })

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProducts,
        deleteProduct,
        loading,
        setLoading,
        setCheckoutpd,
        checkoutpd,
        addOrder,
        setOrder,
        order,
        deleteOrder,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  )
}
export default ProductsContextProvider
