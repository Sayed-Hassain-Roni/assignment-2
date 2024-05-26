import Joi from "joi";

//making joi validiton..
const orderItemValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "{#label} is not a valid email",
    "any.required": "{#label} is required",
  }),
  productId: Joi.string().required().messages({
    "any.required": "{#label} is required",
  }),
  price: Joi.number().required().messages({
    "any.required": "{#label} is required",
  }),
  quantity: Joi.number().required().messages({
    "any.required": "{#label} is required",
  }),
});

export default orderItemValidationSchema;
