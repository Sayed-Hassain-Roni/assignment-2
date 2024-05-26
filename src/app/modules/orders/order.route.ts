import express from "express";
import { orderController } from "./order.controler";

const router = express.Router();

router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getOrder);

router.get("/orders/email=:emailId", orderController.getsbyEmail);

export const OrderRouter = router;
