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
exports.productServices = void 0;
const ecom_shemaModel_1 = require("./ecom.shemaModel");
// Creating post...
const createProductInDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield ecom_shemaModel_1.productModel.create(product);
    return results;
});
// Find all product and single product..
const getProductsFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    if (_id) {
        // this is for single product
        return yield ecom_shemaModel_1.productModel.findOne({ _id });
    }
    else {
        // this is for all products
        return yield ecom_shemaModel_1.productModel.find();
    }
});
exports.productServices = {
    createProductInDB,
    getProductsFromDB,
};
