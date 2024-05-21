import { Request, Response } from "express";
import { productServices } from "./ecom.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const results = await productServices.createProductInDB(product);
    // sending response..
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productControler = {
  createProduct,
};
