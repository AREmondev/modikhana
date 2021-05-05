import React, { useContext } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { ProductsContext } from '../context/ProductsContext'
import './CheckOut.css'
function CheckOut() {
  const { checkoutpd, addOrder } = useContext(ProductsContext)
  const { user } = useContext(AuthContext)

  const orderUser = user.email
  const { productName, productWeight, productPrice } = checkoutpd
  return (
    <div className="checkout-area">
      <Container>
        <Table>
          <thead className="products-title">
            <tr>
              <th>Description</th>
              <th>Weight</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{productName}</td>
              <td>{productWeight}</td>
              <td>$ {productPrice}</td>
            </tr>
            <tr className="total">
              <td>Total</td>
              <td></td>
              <td>$ {productPrice}</td>
            </tr>
          </tbody>
        </Table>
        <Link
          to="/order"
          onClick={() =>
            addOrder(productName, productWeight, productPrice, orderUser)
          }
          style={{ margin: '15px 0 0 auto', display: 'table' }}
          className="main-btn"
        >
          Check Out
        </Link>
      </Container>
    </div>
  )
}

export default CheckOut
