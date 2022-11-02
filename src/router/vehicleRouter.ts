import { Router } from "express"

import { getVehicleById, listVehicles } from "../controller/vehicleController.js"
import { validateToken } from "../middleware/validateToken.js"

const vehicleRouter = Router()

vehicleRouter.get("/vehicles", listVehicles)
vehicleRouter.get("/vehicles/:id", validateToken(), getVehicleById)

export default vehicleRouter