const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length() === 0) {
    res.status(400).send({ error: "No Order Found" });
    return;
  } else {
    const order = new Order({
      orderItems,
      user:req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

module.exports={addOrderItems}
