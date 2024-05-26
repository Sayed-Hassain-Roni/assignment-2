import Joi from "joi";

// Variant Schema
const variantSchema = Joi.object({
  type: Joi.string().required().messages({
    "any.required": "Type is required",
  }),
  value: Joi.string().required().messages({
    "any.required": "Value is required",
  }),
});

// Inventory Schema
const inventorySchema = Joi.object({
  quantity: Joi.number().required().messages({
    "any.required": "Quantity is required",
  }),
  inStock: Joi.boolean().required().messages({
    "any.required": "InStock status is required",
  }),
});

// Product Schema
const productSchema = Joi.object({
  name: Joi.string().required().max(20).messages({
    "any.required": "Name is required",
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is required",
  }),
  price: Joi.number().required().messages({
    "any.required": "Price is required",
  }),
  category: Joi.string().required().messages({
    "any.required": "Category is required",
  }),
  tags: Joi.array().items(Joi.string()).required().messages({
    "any.required": "Tags are required",
  }),
  variants: Joi.array().items(variantSchema).required().messages({
    "any.required": "Variants are required",
  }),
  inventory: inventorySchema.required().messages({
    "any.required": "Inventory is required",
  }),
});

export default productSchema;
