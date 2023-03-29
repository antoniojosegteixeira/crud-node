import express from "express";
import {
  readProductController,
  addProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", readProductController);

router.post("/add-product", addProductController);

router.put("/edit-product", updateProductController);

router.delete("/delete-product", deleteProductController);

export default router;
