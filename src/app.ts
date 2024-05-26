import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./app/modules/ecommerce/ecom.route";
import { OrderRouter } from "./app/modules/orders/order.route";

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors());

//this is using for product..
app.use("/api", ProductRouter);

// this is using for order...
app.use("/api", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
