import { Router } from "express"

import { listVehicles } from "../controller/vehicleController.js"

const vehicleRouter = Router()

vehicleRouter.get("/vehicles", listVehicles)

export default vehicleRouter