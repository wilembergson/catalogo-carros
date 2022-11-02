import { Router } from "express"

import authRouter from "./authRouter.js"
import vehicleRouter from "./vehicleRouter.js"

const routerIndex = Router()

routerIndex.use(authRouter)
routerIndex.use(vehicleRouter)

export default routerIndex