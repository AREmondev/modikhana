const express = require('express')
const Order = require('../Model/Order')
const router = express.Router()

router.get('/:user', async (req, res) => {
  const userOrder = await Order.find({ orderBy: req.params.user })
  const orderString = JSON.stringify(userOrder)
  res.send(orderString)
})
router.get('/', async (req, res) => {
  res.send('Order')
})
router.post('/', async (req, res) => {
  res.send('app running')
  const newOrder = new Order(req.body)
  newOrder.save()
  console.log(req.body)
})
router.delete('/:id', async (req, res) => {
  await Order.deleteOne({ _id: req.params.id })
})

module.exports = router
