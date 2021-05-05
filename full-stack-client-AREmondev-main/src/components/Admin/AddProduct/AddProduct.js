import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import './AddProduct.css'
function AddProduct() {
  const [name, setName] = useState()
  const [weight, setWeight] = useState()
  const [price, setPrice] = useState()
  const [img, setImg] = useState()
  const handleImgFile = (e) => {
    console.log()
    const imgData = new FormData()
    imgData.set('key', 'f7f7f557e9e948e808c9ac2bf760a395')
    imgData.append('image', e.target.files[0])
    axios
      .post('https://api.imgbb.com/1/upload', imgData)
      .then((data) => setImg(data.data.data.url))
  }

  const { addProducts } = useContext(ProductsContext)
  return (
    <div className="mng-product-area">
      <div className="area-header">
        <h4>Manage Product</h4>
      </div>
      <div className="main">
        <Form className="add-form-area">
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="productName"
                  id="name"
                  value={name}
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="weight">Product Weight</label>
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  type="text"
                  name="productWeight"
                  id="weight"
                  value={weight}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  name="productPrice"
                  id="price"
                  value={price}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="file">Product Name</label>
                <input
                  onChange={(e) => handleImgFile(e)}
                  type="file"
                  name="productImg"
                  id="file"
                  files={img}
                />
              </div>
            </Col>
          </Row>
        </Form>
        <Button
          onClick={() =>
            addProducts(
              name,
              weight,
              price,
              img,
              setName,
              setWeight,
              setPrice,
              setImg,
            )
          }
          style={{ margin: '15px 0 0 auto', display: 'table' }}
          className="main-btn"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default AddProduct
