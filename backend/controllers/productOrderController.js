const e = require("express");
const connection = require("../configs/db.js");

exports.findAll = (req, res) => {
  connection.query(
    "SELECT * FROM ProductOrder",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.findOne = (req, res) => {
  connection.query(
    "SELECT * FROM ProductOrder WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.findAllByOrder = (req, res) => {
  connection.query(
    "SELECT * FROM ProductOrder WHERE idOrder = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.update = (req, res) => {
  const { idProduct, quantity, price } = req.body;
  connection.query(
    "UPDATE ProductOrder SET quantity = ?, price = ? WHERE id = ? AND idProduct = ?",
    [quantity, price, req.params.id, idProduct],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.create = (req, res) => {
  const { idOrder, idProduct, quantity, price } = req.body;
  connection.query(
    "INSERT INTO ProductOrder (idOrder, idProduct, quantity, price) VALUES (?, ? ,? ,?)",
    [idOrder, idProduct, quantity, price],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.delete = (req, res) => {
  connection.query(
    "DELETE FROM ProductOrder WHERE id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};
