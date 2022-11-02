import { Request, Response } from "express"

import vehicleService from "../service/vehicleService.js"

export async function listVehicles(req:Request, res:Response){
    const result = await vehicleService.listVehicles()
    return res.status(200).json(result)
}

export async function getVehicleById(req:Request, res:Response){
    const { id } = req.params
    const result = await vehicleService.getVehicleById(parseInt(id))
    return res.status(200).json(result)
}