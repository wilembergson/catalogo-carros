import Joi from "joi"

import { LoginBody } from "../service/authService.js"

export const loginSchema = Joi.object<LoginBody>({
    userLogin: Joi.string().required(),
    password: Joi.string().required()
})