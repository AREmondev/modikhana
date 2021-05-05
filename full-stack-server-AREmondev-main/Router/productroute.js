const express = require('express')

const Product = require('../Model/Product')

const router = express.Router()

router
  .route('/')
  .get(async (req, res) => {
    const allProduct = await Product.find()
    const postString = JSON.stringify(allProduct)
    res.send(postString)
  })
  .post(async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    console.log(req.body)
  })
router.route('/:id').delete(async (req, res) => {
  await Product.deleteOne({ _id: req.params.id })
})

module.exports = router
