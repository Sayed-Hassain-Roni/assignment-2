"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ecom_route_1 = require("./app/modules/ecommerce/ecom.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//this is using for product..
app.use("/api", ecom_route_1.ProductRouter);
// this is using for order...
app.use("/api", order_route_1.OrderRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
