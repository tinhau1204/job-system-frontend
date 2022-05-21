import Joi from "joi";

const loginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .message("Invalid email"),
    password: Joi.string(),
});

export default loginSchema;
