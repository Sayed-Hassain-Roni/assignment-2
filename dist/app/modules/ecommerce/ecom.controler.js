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
//Get all Product
const getallProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield ecom_services_1.productServices.getProductFromDB();
        res.status(200).json({
            success: true,
            message: "Successfully Retrive Data",
            data: results,
        });
    }
    catch (err) {
        console.log(err);
    }
});
//Get single Product
const getsingleallProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const results = yield ecom_services_1.productServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Successfully get Single Product",
            data: results,
        });
    }
    catch (err) {
        console.log(err);
    }
});
//updsate user by id ...
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const updateData = req.body;
    try {
        const updatedUser = yield ecom_services_1.productServices.updateUserById(productId, updateData);
        res.json(updatedUser);
    }
    catch (err) {
        console.log(err);
    }
});
// delete product by id...
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const deletedUser = yield ecom_services_1.productServices.deleteUserById(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: deletedUser,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.productControler = {
    createProduct,
    getallProduct,
    getsingleallProduct,
    updateUser,
    deleteUser,
};
