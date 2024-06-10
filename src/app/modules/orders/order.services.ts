import { OrderItem } from "./order.interface";
import { orderModel } from "./order.schemaModel";

//Post in db..
const OrderIntoDB = async (order: OrderItem) => {
  const myorder = await orderModel.create(order);
  return myorder;
};

//Get from deb
const OrderGetFromDB = async (query: Record<string, unknown>) => {
  let email = "";
  if (query?.email) {
    email = query?.email as string;
  }

  const getorder = await orderModel.find({
    $or: ["email"].map((field) => ({
      [field]: { $regex: email, $options: "i" },
    })),
  });
  return getorder;
};

export const orderServices = {
  OrderIntoDB,
  OrderGetFromDB,
};
