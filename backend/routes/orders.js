const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController.js");

//FIND ALL ORDERS
router.get("/api/orders", ordersController.findAll);

//GET ONE ORDER BY ID
router.get("/api/orders/:id", ordersController.findOne);

//GET ALL ORDERS BY USER ID
router.get("/api/orders/user/:id", ordersController.findAllByUser);

//PUT STATUS ORDER BY ID
router.put("/api/orders/:id", ordersController.update);

//PUT ADDRESS ORDER BY ID
router.put("/api/orders/address/:id", ordersController.updateAddress);

//POST ONE ORDER
router.post("/api/orders", ordersController.create);

//DELETE ONE ORDER BY ID
router.delete("/api/orders/:id", ordersController.delete);

module.exports = router;
