const express = require("express");
const connection = require("../configs/db.js");

exports.findAll = (req, res) => {
  connection.query("SELECT * FROM Orders", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
};

exports.findOne = (req, res) => {
  connection.query(
    "SELECT * FROM Orders WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.findAllByUser = (req, res) => {
  connection.query(
    "SELECT * FROM Orders WHERE userId = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.update = (req, res) => {
  const { status } = req.body;
  connection.query(
    "UPDATE Orders SET status = ? WHERE id = ?",
    [status, req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.updateAddress = (req, res) => {
  const { address } = req.body;
  connection.query(
    "UPDATE Orders SET address = ? WHERE id = ?",
    [address, req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.create = (req, res) => {
  const { userId, address, status } = req.body;
  connection.query(
    "INSERT INTO Orders (userId, address, status) VALUES (?, ? ,?)",
    [userId, address, status],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.delete = (req, res) => {
  connection.query(
    "DELETE FROM Orders WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};
