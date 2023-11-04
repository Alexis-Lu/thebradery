var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "thebradery",
});
