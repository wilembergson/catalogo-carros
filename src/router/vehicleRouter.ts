import { Router } from "express"

import { getVehicleById, listVehicles, newVehicle } from "../controller/vehicleController.js"
import { validateSchemaAndToken } from "../middleware/validateSchemaAndToken.js"
import { validateToken } from "../middleware/validateToken.js"
import { newVehicleSchema } from "../schemas/newVehicleSchema.js"

const vehicleRouter = Router()

vehicleRouter.get("/vehicles", listVehicles)
vehicleRouter.get("/vehicles/:id", validateToken(), getVehicleById)
vehicleRouter.post("/vehicles",validateSchemaAndToken(newVehicleSchema), newVehicle)

export default vehicleRouter