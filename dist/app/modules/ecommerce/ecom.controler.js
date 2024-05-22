"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControler = void 0;
const ecom_services_1 = require("./ecom.services");
// Create POST  controller...
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const results = yield ecom_services_1.productServices.createProductInDB(product);
        // sending response..
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: results,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        let product;
        if (productId) {
            // single product
            product = yield ecom_services_1.productServices.getProductsFromDB(productId);
        }
        else {
            // all products
            product = yield ecom_services_1.productServices.getProductsFromDB();
        }
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!!",
            data: product,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
        });
    }
});
exports.productControler = {
    createProduct,
    getProducts,
};
