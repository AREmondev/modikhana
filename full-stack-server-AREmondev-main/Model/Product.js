const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productWeight: {
    type: Number,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
