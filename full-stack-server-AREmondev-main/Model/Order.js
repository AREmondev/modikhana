const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
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
  orderBy: {
    type: String,
    required: true,
  },
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order
