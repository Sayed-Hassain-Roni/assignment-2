import { Product } from "./ecom.interface";
import { productModel } from "./ecom.shemaModel";

// Creating post...
const createProductInDB = async (product: Product) => {
  const results = await productModel.create(product);
  return results;
};
// Find all product by  ..
const getProductFromDB = async () => {
  const product = await productModel.find();
  return product;
};

// Find single product by id  ..
const getSingleProductFromDB = async (_id: string) => {
  const product = await productModel.findOne({ _id });
  return product;
};

//update Product..
const updateUserById = async (_id: string, updateData: {}) => {
  const updatedUser = await productModel.findByIdAndUpdate(_id, updateData, {
    new: true,
  });
  return updatedUser;
};

// delete Product...

const deleteUserById = async (_id: string) => {
  const deletedUser = await productModel.findByIdAndDelete({ _id });
  return deletedUser;
};

// serch by catagories
const searchByCategory = async (category: any) => {
  const products = await productModel.find({ category });
  return products;
};

export const productServices = {
  createProductInDB,
  getProductFromDB,
  getSingleProductFromDB,
  updateUserById,
  deleteUserById,
  searchByCategory,
};
