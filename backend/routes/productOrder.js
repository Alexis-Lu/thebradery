const express = require("express");
const router = express.Router();
const productOrderController = require("../controllers/productOrderController.js");

//GET ALL PRODUCT ORDER
router.get("/api/productOrder", productOrderController.findAll);

//GET ONE PRODUCT ORDER BY ID
router.get("/api/productOrder/:id", productOrderController.findOne);

//GET ALL PRODUCT ORDER BY ORDER ID
router.get(
  "/api/productOrder/order/:id",
  productOrderController.findAllByOrder
);

//PUT ONE PRODUCT ORDER BY ID
router.put("/api/productOrder/:id", productOrderController.update);

//POST ONE PRODUCT ORDER
router.post("/api/productOrder", productOrderController.create);

//DELETE ONE PRODUCT ORDER BY ID
router.delete("/api/productOrder/:id", productOrderController.delete);

module.exports = router;
