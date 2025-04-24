const express = require("express");
const router = express.Router();
const {
  getProudcts,
  getProudct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/proudct.controller.js");

router.get("/", getProudcts);
router.get("/:id", getProudct);
router.post("/", createProduct);
// Update a product
router.put("/:id", updateProduct);
// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
