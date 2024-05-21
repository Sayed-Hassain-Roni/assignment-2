import express from "express";
import { productControler } from "./ecom.controler";

const router = express.Router();

// Router calling controller function
router.post("/products", productControler.createProduct);

export const ProductRouter = router;
