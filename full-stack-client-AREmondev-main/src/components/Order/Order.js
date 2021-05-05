import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'
import { ProductsContext } from '../context/ProductsContext'
import './Order.css'
function Order() {
  const { user } = useContext(AuthContext)
  const { setOrder, order, deleteOrder } = useContext(ProductsContext)
  const orderUser = user.email

  // Load All Products From server
  async function loadOrder(user) {
    await axios
      .get(`https://vast-atoll-02815.herokuapp.com/api/order/${user}`)
      .then((data) => setOrder(data.data))
  }
  useEffect(() => {
    loadOrder(orderUser)
  })
  const total = order.reduce(function (a, ordr) {
    return a + ordr.productPrice
  }, 0)

  return (
    <div className="order-area">
      <Container>
        <Table>
          <thead className="products-title">
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order &&
              order.map((ordr) => (
                <tr>
                  <td>{ordr.productName}</td>
                  <td>1</td>
                  <td>$ {ordr.productPrice}</td>
                  <td>
                    <Button
                      className="dlt-btn"
                      onClick={() => deleteOrder(ordr._id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            <tr className="total">
              <td>Total</td>
              <td></td>
              <td>$ {total}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Order
