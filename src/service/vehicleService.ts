import { Vehicle } from "@prisma/client"

import vehicleRepository from "../repository/vehicleRepository.js"
import ErrorMessage from "../utils/erroMessage.js"

async function listVehicles(){
    const vehicles = await vehicleRepository.listVehicles()
    return vehicles.sort(function(a:Vehicle, b:Vehicle):number{
        return a.price < b.price ? -1 : a > b ? 1 : 0
    })
}

async function getVehicleById(id:number){
    const vehicle = await vehicleRepository.getVehicleById(id)
    if(!vehicle) ErrorMessage(404, "ID do veículo não existente ou inválido!")
    return vehicle
}

const vehicleService = {
    listVehicles,
    getVehicleById
}
export default vehicleService