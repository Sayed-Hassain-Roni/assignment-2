"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const ecom_controler_1 = require("./ecom.controler");
const router = express_1.default.Router();
// Router calling controller function
router.post("/products", ecom_controler_1.productControler.createProduct);
exports.ProductRouter = router;
