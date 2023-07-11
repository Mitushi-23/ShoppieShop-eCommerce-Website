const express = require('express');
const cors = require('cors');
const {errorHandler} = require ('./middlewares/errorMiddleware'); 
const dotenv = require('dotenv');
const Products = require('./data/products')
const connectDb = require('./config/config');
const productRoutes = require('./routes/productsRoute');
const userRoutes = require('./routes/usersRoute');
const orderRoute = require('./routes/orderRoute')

dotenv.config();
connectDb();
const app = express()
app.use(express.json()); 
app.use(cors());

app.use("/api", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal",(req, res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID)
})
app.use(errorHandler)

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`)
});


