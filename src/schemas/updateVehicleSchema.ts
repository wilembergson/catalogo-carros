import Joi from "joi"
import { VehicleBody } from "./newVehicleSchema.js"

export const updateVehicleSchema = Joi.object<VehicleBody>({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    price: Joi.string().required(),
    picture: Joi.string().required()
})