import { Product } from "./ecom.interface";
import { productModel } from "./ecom.shemaModel";

// Creating post...
const createProductInDB = async (product: Product) => {
  const results = await productModel.create(product);
  return results;
};
// Get Product   ..
const getProductFromDB = async (query: Record<string, unknown>) => {
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const product = await productModel.find({
    $or: ["name", "category"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });
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
  const deletedUser = await productModel.deleteOne({ _id });
  return deletedUser;
};

export const productServices = {
  createProductInDB,
  getProductFromDB,
  getSingleProductFromDB,
  updateUserById,
  deleteUserById,
};
