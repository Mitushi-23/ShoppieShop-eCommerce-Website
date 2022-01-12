const express = require('express');
const {errorHandler} = require ('./middlewares/errorMiddleware'); 
const dotenv = require('dotenv');
const Products = require('./data/products')
const connectDb = require('./config/config');
const productRoutes = require('./routes/productsRoute');

dotenv.config();
connectDb();
const app = express()

app.use("/api", productRoutes);
app.use(errorHandler)

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`)
});


