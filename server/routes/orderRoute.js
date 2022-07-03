const express = require('express')
const { addOrderItems, getOrderById, updateOrderToPay, getMyOrder } = require('../controllers/orderController')
const router = express.Router()
const {protect} = require('../middlewares/authMiddleware')

//Create new Order
router.route('/myorders').get(protect,getMyOrder)
router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect,getOrderById)
router.route('/:id/pay').put(protect,updateOrderToPay)

module.exports = router
