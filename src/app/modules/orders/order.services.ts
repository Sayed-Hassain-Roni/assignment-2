import { OrderItem } from "./order.interface";
import { orderModel } from "./order.schemaModel";

//Post in db..
const OrderIntoDB = async (order: OrderItem) => {
  const myorder = await orderModel.create(order);
  return myorder;
};

//Get from deb
const OrderGetFromDB = async () => {
  const getorder = await orderModel.find();
  return getorder;
};

// Search by email...
const getOrderbyEmail = async (email: string) => {
  const product = await orderModel.find({ email });
  return product;
};

export const orderServices = {
  OrderIntoDB,
  OrderGetFromDB,
  getOrderbyEmail,
};