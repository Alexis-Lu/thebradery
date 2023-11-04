var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());
const router = require("./routes/products.js");
app.listen(3001, () => {});
app.use(router);
