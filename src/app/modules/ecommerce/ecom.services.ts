import { Product } from "./ecom.interface";
import { productModel } from "./ecom.shemaModel";

// Creating post...
const createProductInDB = async (product: Product) => {
  const results = await productModel.create(product);
  return results;
};
// Find all product and single product..

const getProductsFromDB = async (_id?: string) => {
  if (_id) {
    // this is for single product
    return await productModel.findOne({ _id });
  } else {
    // this is for all products
    return await productModel.find();
  }
};

export const productServices = {
  createProductInDB,
  getProductsFromDB,
};
