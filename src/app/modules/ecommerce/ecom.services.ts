import { Product } from "./ecom.interface";
import { productModel } from "./ecom.shemaModel";

const createProductInDB = async (product: Product) => {
  const results = await productModel.create(product);
  return results;
};

export const productServices = {
  createProductInDB,
};
