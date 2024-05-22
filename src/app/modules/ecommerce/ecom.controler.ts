import { Request, Response } from "express";
import { productServices } from "./ecom.services";

// Create POST  controller...
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const results = await productServices.createProductInDB(product);
    // sending response..
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    let product;

    if (productId) {
      // single product
      product = await productServices.getProductsFromDB(productId);
    } else {
      // all products
      product = await productServices.getProductsFromDB();
    }

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!!",
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

export const productControler = {
  createProduct,
  getProducts,
};
