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
const getOrdersByEmail = async (email: string) => {
  try {
    const orders = await orderModel.find({ email });
    return orders;
  } catch (error) {
    throw new Error("Error fetching orders ");
  }
};
export const orderServices = {
  OrderIntoDB,
  OrderGetFromDB,
  getOrdersByEmail,
};
