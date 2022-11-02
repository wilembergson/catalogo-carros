import { Request, Response } from "express"

import vehicleService from "../service/vehicleService.js"

export async function listVehicles(req:Request, res:Response){
    const result = await vehicleService.listVehicles()
    return res.status(200).json(result)
}