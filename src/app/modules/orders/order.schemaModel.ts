import { Schema, model } from "mongoose";
import { OrderItem } from "./order.interface";

const orderItemSchema = new Schema<OrderItem>({
  email: {
    type: String,
    required: true,
  },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

orderItemSchema.pre("find", async function (next) {
  const query = this.getQuery();
  const isQueryOrderExists = await orderModel.findOne(query);

  if (!isQueryOrderExists) {
    throw new Error("Department dose not exits..");
  }
  next();
});

//creating model...
export const orderModel = model<OrderItem>("Order", orderItemSchema);
