import express, { Request, Response, NextFunction } from "express";
import { orderController } from "./order.controler";
const router = express.Router();

router.post("/orders", orderController.createOrder);

router.get("/orders", orderController.getOrder);

export const OrderRouter = router;
