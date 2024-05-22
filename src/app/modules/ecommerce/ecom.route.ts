import express from "express";
import { productControler } from "./ecom.controler";

const router = express.Router();

// Router calling controller function
router.post("/", productControler.createProduct);
router.get("/", productControler.getallProduct);

router.get("/:productId", productControler.getsingleallProduct);
router.put("/:productId", productControler.updateUser);
router.delete("/:productId", productControler.deleteUser);

export const ProductRouter = router;
