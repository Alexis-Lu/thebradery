const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");

router.post("/api/users", usersController.create);

router.post("/api/users/login", usersController.login);

router.get("/api/users", usersController.findAll);

router.get("/api/users/:id", usersController.findOne);

router.put("/api/users/:id", usersController.update);

router.delete("/api/users/:id", usersController.delete);

module.exports = router;
