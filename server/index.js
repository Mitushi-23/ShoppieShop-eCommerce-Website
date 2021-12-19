const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const port = 5000;
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config();

const mongoUri=process.env.MONGO_URL;



mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('DBConnection successfull')
  })
  .catch((err) => {
    console.log(err)
  })

  app.use(cors());
  app.use(express.json());
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);
  app.use("/api/carts", cartRoute);
  app.use("/api/orders", orderRoute);
  app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || `${port}`, () => {
  console.log('Backend is running at port');
})
