import React, { useContext } from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import './ManageProduct.css'
function ManageProduct() {
  const { products, deleteProduct } = useContext(ProductsContext)
  return (
    <div className="mng-product-area">
      <div className="area-header">
        <h4>Manage Product</h4>
      </div>
      <div className="main">
        <div className="all-products-area">
          <Table>
            <thead className="products-title">
              <tr>
                <th>Product Name</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.productWeight}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <Button className="edit-btn">edit</Button>{' '}
                    <Button
                      onClick={() => deleteProduct(product._id)}
                      className="dlt-btn"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ManageProduct
