const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const router = express.Router();
const connection = require("../configs/db.js");
const e = require("express");

exports.create = (req, res) => {
  const { firstname, lastname, email, password, address } = req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    connection.query(
      "INSERT INTO Users (firstname, lastname, email, password, address, role) VALUES (?, ? ,? ,? ,? ,? )",
      [firstname, lastname, email, hash, address, 1],
      function (error, results) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  connection.query(
    "SELECT * FROM Users WHERE email = ?",
    [email],
    function (error, results) {
      if (error) throw error;
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function (err, result) {
          if (result) {
            res.send(results);
          } else {
            res.send({ message: "Wrong combination of email/password!" });
          }
        });
      } else {
        res.send({ message: "User not found!" });
      }
    }
  );
};

exports.findAll = (req, res) => {
  connection.query("SELECT * FROM Users", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
};

exports.findOne = (req, res) => {
  connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.update = (req, res) => {
  connection.query(
    "UPDATE Users SET firstname = ?, lastname = ?, email = ?, password = ?, address = ? WHERE id = ?",
    [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password,
      req.body.address,
      req.params.id,
    ],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.delete = (req, res) => {
  connection.query(
    "DELETE FROM Users WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};
