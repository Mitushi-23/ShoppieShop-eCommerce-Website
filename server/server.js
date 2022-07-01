const express = require('express');
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

app.use("/api", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoute);
app.use(errorHandler)

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`)
});


