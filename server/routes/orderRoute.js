const express = require('express')
const { addOrderItems } = require('../controllers/orderController')
const router = express.Router()
const {protect} = require('../middlewares/authMiddleware')

//Create new Order
router.route('/').post(protect,addOrderItems)

module.exports = router
