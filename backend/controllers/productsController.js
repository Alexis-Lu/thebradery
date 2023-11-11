const express = require("express");
const connection = require("../configs/db.js");

exports.findAll = (req, res) => {
  connection.query("SELECT * FROM Products", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
};

exports.findOne = (req, res) => {
  connection.query(
    "SELECT * FROM Products WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.update = (req, res) => {
  const { name, description, price, image } = req.body;
  connection.query(
    "UPDATE Products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?",
    [name, description, price, image, req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.updateInventory = (req, res) => {
  const { inventory } = req.body;
  connection.query(
    "UPDATE Products SET inventory = ? WHERE id = ?",
    [inventory, req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.create = (req, res) => {
  const { name, price, inventory } = req.body;
  connection.query(
    "INSERT INTO Products (name, price, inventory) VALUES (? ,? ,?)",
    [name, price, inventory],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.delete = (req, res) => {
  connection.query(
    "DELETE FROM Products WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};
