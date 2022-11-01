import { Router } from "express"

import { login } from "../controller/authController.js"
import { authSchemaValidate } from "../middleware/validateAuthSchemas.js"
import { loginSchema } from "../schemas/loginSchema.js"

const authRouter = Router()

authRouter.post("/login", authSchemaValidate(loginSchema), login)

export default authRouter