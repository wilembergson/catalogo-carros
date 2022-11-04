import { Router } from "express"

import { deleteVehicle, getVehicleById, listVehicles, newVehicle, updateVehicle } from "../controller/vehicleController.js"
import { validateSchemaAndToken } from "../middleware/validateSchemaAndToken.js"
import { validateToken } from "../middleware/validateToken.js"
import { newVehicleSchema } from "../schemas/newVehicleSchema.js"
import { updateVehicleSchema } from "../schemas/updateVehicleSchema.js"

const vehicleRouter = Router()

vehicleRouter.get("/vehicles", listVehicles)
vehicleRouter.get("/vehicles/:id", getVehicleById)
vehicleRouter.post("/vehicles",validateSchemaAndToken(newVehicleSchema), newVehicle)
vehicleRouter.delete("/vehicles/:id", validateToken(), deleteVehicle)
vehicleRouter.put("/vehicles/:id", validateSchemaAndToken(updateVehicleSchema), updateVehicle)

export default vehicleRouter