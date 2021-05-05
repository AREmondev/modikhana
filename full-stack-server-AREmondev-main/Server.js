const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productrouter = require('./Router/productroute')
const orderRoute = require('./Router/orderRoute')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

app.use('/api/product', productrouter)
app.use('/api/order', orderRoute)

// app.get('/', async (req, res) => {
//   const allProduct = await Product.find()
//   const postString = JSON.stringify(allProduct)
//   res.send(postString)
// })
// app.get('/order/:user', async (req, res) => {
//   const userOrder = await Order.find({ orderBy: req.params.user })
//   const orderString = JSON.stringify(userOrder)
//   res.send(orderString)
// })
// app.post('/order', async (req, res) => {
//   res.send('app running')
//   const newOrder = new Order(req.body)
//   newOrder.save()
//   console.log(req.body)
// })

// app.delete('/order/:id', async (req, res) => {
//   await Order.deleteOne({ _id: req.params.id })
// })

// app.post('/', async (req, res) => {
//   const newProduct = new Product(req.body)
//   await newProduct.save()
//   console.log(req.body)
// })
// app.delete('/:id', async (req, res) => {
//   await Product.deleteOne({ _id: req.params.id })
// })
app.listen(PORT, console.log('Server Running Port ', PORT))
