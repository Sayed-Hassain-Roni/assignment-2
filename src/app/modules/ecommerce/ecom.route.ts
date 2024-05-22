import express from "express";
import { productControler } from "./ecom.controler";

const router = express.Router();

// Router calling controller function
router.post("/", productControler.createProduct);

router.get("/:productId?", productControler.getProducts);

export const ProductRouter = router;
