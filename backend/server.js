var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var app = express();
app.use(cors());

app.use(express.json());

const productsRoutes = require("./routes/products.js");
const userRoutes = require("./routes/users.js");
const productOrderRoutes = require("./routes/productOrder.js");
const orderRoutes = require("./routes/order.js");
app.use(userRoutes, productsRoutes, productOrderRoutes, orderRoutes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
