import express, { Request, Response, NextFunction } from "express";
import { orderController } from "./order.controler";
const router = express.Router();

router.post("/create-order", orderController.createOrder);

const handleEmail = async (req: Request, res: Response) => {
  // if email provdide
  if (req.params.email) {
    await orderController.fetchOrdersByEmail(req, res);
  } else {
    // if email not provide..
    await orderController.getOrder(req, res);
  }
};

router.get("/", handleEmail);
router.get("/email=:email", handleEmail);

export const OrderRouter = router;
