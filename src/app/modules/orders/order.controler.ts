import { Request, Response } from "express";
import { orderServices } from "./order.services";
import Joi from "joi";
import { error } from "console";
import orderItemValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const { error, value } = orderItemValidationSchema.validate(order);

    if (error) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        error: error.details,
      });
    }

    const results = await orderServices.OrderIntoDB(value);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const results = await orderServices.OrderGetFromDB();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

const getsbyEmail = async (req: Request, res: Response) => {
  try {
    const { emailId } = req.params;
    const results = await orderServices.getOrderbyEmail(emailId);
    res.status(200).json({
      success: true,
      message: "Successfully get order by email",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const orderController = {
  createOrder,
  getOrder,
  getsbyEmail,
};
