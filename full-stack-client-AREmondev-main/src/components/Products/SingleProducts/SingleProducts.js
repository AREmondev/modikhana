import React, { useContext } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'

function SingleProducts(props) {
  const { setCheckoutpd } = useContext(ProductsContext)
  const history = useHistory()
  const product = props.product
  console.log(product)
  const { productName, productImg, productPrice, productWeight } = product
  const checkOut = (pd) => {
    setCheckoutpd(pd)
    history.push('/checkout')
  }
  return (
    <Col md={4} className="mb-4">
      <Card style={{ border: 'none', boxShadow: '0 0 10px #f0f0f0' }}>
        <Card.Img variant="top" src={productImg} />
        <Card.Body>
          <Card.Title>
            {productName} - {productWeight} KG
          </Card.Title>
          <div className="d-flex align-items-center justify-content-between">
            <div style={{ fontSize: '28px', fontWeight: 'bold' }}>
              $ {productPrice}
            </div>
            <div className="buy-btn">
              <Button onClick={() => checkOut(product)} className="login-btn">
                Buy Now
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleProducts
