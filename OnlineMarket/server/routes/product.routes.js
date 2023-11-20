import express from "express";
import productCtrl from "../controllers/product.controller.js";
const router = express.Router();

// get all info
router.get("/", productCtrl.getProducts);

// get info by id
router.get("/:id", productCtrl.getProduct);

// create product
router.post("/", productCtrl.createProduct);

// edit specific property
router.patch("/:id", productCtrl.updateProduct);

// delete product
router.delete("/:id", productCtrl.deleteProduct);

export default router;
