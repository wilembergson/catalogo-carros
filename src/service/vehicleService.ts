import { Vehicle } from "@prisma/client"

import vehicleRepository, { VehicleInsertBody } from "../repository/vehicleRepository.js"
import { VehicleBody } from "../schemas/newVehicleSchema.js"
import ErrorMessage from "../utils/erroMessage.js"
import sucessMessage from "../utils/successMessage.js"

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

async function newVehicle(vehicle:VehicleBody){
    const newVehicle:VehicleInsertBody = {...vehicle, price:parseFloat(vehicle.price)}
    const existingVehicle = await vehicleRepository.findExistingVehicle(newVehicle)
    if(existingVehicle) ErrorMessage(401, "Este veículo já está cadastrado.")
    await vehicleRepository.newVehicle(newVehicle)
    return sucessMessage("Novo veículo cadastrado com sucesso!")
}

async function deleteVehicle(id:number){
    const vehicle = await vehicleRepository.getVehicleById(id)
    if(!vehicle) ErrorMessage(404, "ID do veículo não existente ou inválido!")
    await vehicleRepository.deleteVehicle(id)
    return sucessMessage("Veículo deletado!")
}

async function updateVehicle(id:string, vehicle: VehicleBody){
    const existingehicle = await vehicleRepository.getVehicleById(parseInt(id))
    if(!existingehicle) ErrorMessage(422, "ID do veículo inválido!")
    const updatedVehicle:Vehicle = {id:parseInt(id), ...vehicle, price:parseFloat(vehicle.price)}
    await vehicleRepository.updateVehicle(updatedVehicle)
    return sucessMessage("Dados do veículo atualizados com sucesso!")
}

const vehicleService = {
    listVehicles,
    getVehicleById,
    newVehicle,
    deleteVehicle,
    updateVehicle
}
export default vehicleService