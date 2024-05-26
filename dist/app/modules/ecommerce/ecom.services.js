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
// Find all product by  ..
const getProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield ecom_shemaModel_1.productModel.find();
    return product;
});
// Find single product by id  ..
const getSingleProductFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield ecom_shemaModel_1.productModel.findOne({ _id });
    return product;
});
//update Product..
const updateUserById = (_id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield ecom_shemaModel_1.productModel.findByIdAndUpdate(_id, updateData, {
        new: true,
    });
    return updatedUser;
});
// delete Product...
const deleteUserById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield ecom_shemaModel_1.productModel.findByIdAndDelete({ _id });
    return deletedUser;
});
// serch by catagories
const searchByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield ecom_shemaModel_1.productModel.find({ category });
    return products;
});
exports.productServices = {
    createProductInDB,
    getProductFromDB,
    getSingleProductFromDB,
    updateUserById,
    deleteUserById,
    searchByCategory,
};
