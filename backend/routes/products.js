const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController.js");

//GET ALL PRODUCTS
router.get("/api/products", productsController.findAll);

//GET ONE PRODUCTS BY ID
router.get("/api/products/:id", productsController.findOne);

//PUT ONE PRODUCT BY ID
router.put("/api/products/:id", productsController.update);

//PUT INVENTORY PRODUCT BY ID
router.put("/api/products/inventory/:id", productsController.updateInventory);

//POST ONE PRODUCT
router.post("/api/products", productsController.create);

//DELETE ONE PRODUCT BY ID
router.delete("/api/products/:id", productsController.delete);

module.exports = router;
