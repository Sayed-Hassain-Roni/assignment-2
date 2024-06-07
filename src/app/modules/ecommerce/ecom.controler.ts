import { Request, Response } from "express";
import { productServices } from "./ecom.services";
import productSchema from "./ecom.validation";

// Create POST  controller...
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const { error, value } = productSchema.validate(product);

    if (error) {
      res.status(500).json({
        success: false,
        message: "something wrong",
        error: error.details,
      });
    }
    const results = await productServices.createProductInDB(value);
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

//Get all Product
const getallProduct = async (req: Request, res: Response) => {
  try {
    const results = await productServices.getProductFromDB();
    res.status(200).json({
      success: true,
      message: "Successfully Retrive Data",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};
//Get single Product
const getsingleallProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const results = await productServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Successfully get Single Product",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

//updsate user by id ...
const updateUser = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateData = req.body;

  try {
    const updatedUser = await productServices.updateUserById(
      productId,
      updateData
    );
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
  }
};

// delete product by id...
const deleteUser = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const deletedUser = await productServices.deleteUserById(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: deletedUser,
    });
  } catch (err) {
    console.log(err);
  }
};

//serach by catagorie...

const searchByCategory = async (req: Request, res: Response) => {
  const { searchTerm } = req.params;
  try {
    const products = await productServices.searchByCategory(searchTerm);
    res.json(products);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
};

export const productControler = {
  createProduct,
  getallProduct,
  getsingleallProduct,
  updateUser,
  deleteUser,
  searchByCategory,
};
