import express from "express";
import { productControler } from "./ecom.controler";

const router = express.Router();

// Router calling controller function
router.post("/products", productControler.createProduct);

router.get("/products", productControler.getallProduct);

router.get(
  "/products?/searchTerm=:searchTerm",
  productControler.searchByCategory
);

router.get("/products/:productId", productControler.getsingleallProduct);

router.put("/products/:productId", productControler.updateUser);
router.delete("/products/:productId", productControler.deleteUser);

export const ProductRouter = router;
