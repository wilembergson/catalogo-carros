import Joi from "joi"

export type NewVehicleBody = {
    name: string;
    brand: string;
    model: string;
    price: string;
    picture: string;
}

export const newVehicleSchema = Joi.object<NewVehicleBody>({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    price: Joi.string().required(),
    picture: Joi.string().required()
})