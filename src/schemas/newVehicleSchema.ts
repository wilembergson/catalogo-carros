import Joi from "joi"

export type VehicleBody = {
    name: string;
    brand: string;
    model: string;
    price: string;
    picture: string;
}

export const newVehicleSchema = Joi.object<VehicleBody>({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    price: Joi.string().required(),
    picture: Joi.string().required()
})