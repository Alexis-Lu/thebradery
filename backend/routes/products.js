const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const connection = require("../configs/db.js");

//GET ALL PRODUCTS
router.get("/api/products", function (req, res) {
  connection.query("SELECT * FROM products", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

//GET ONE PRODUCTS BY ID
router.get("/api/products/:id", function (req, res) {
  connection.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
});

//PUT ONE PRODUCT BY ID
router.put("/api/products/:id", function (req, res) {
  connection.query(
    "UPDATE products SET name = ?, price = ?, inventory = ? WHERE id = ?",
    [req.body.name, req.body.price, req.body.inventory, req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
});

//POST ONE PRODUCT
router.post("/api/products", function (req, res) {
  console.log(req.body);
  connection.query(
    "INSERT INTO products (name, price, inventory) VALUES (?, ?, ?)",
    [req.body.name, req.body.price, req.body.inventory],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
});

//DELETE ONE PRODUCT BY ID
router.delete("/api/products/:id", function (req, res) {
  connection.query(
    "DELETE FROM products WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
});

module.exports = router;
