import React, { useContext } from 'react'
import './AllProducts.css'
import SingleProducts from '../SingleProducts/SingleProducts'
import { Container, Row } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'

function AllProducts() {
  const { products, loading } = useContext(ProductsContext)
  console.log(products, loading)
  return (
    <div className="main-area ">
      <Container>
        <Row>
          {products.map((product) => (
            <SingleProducts product={product} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default AllProducts
