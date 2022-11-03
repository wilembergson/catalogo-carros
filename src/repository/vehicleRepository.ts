import { Vehicle } from "@prisma/client"

import prisma from "../config/database.js"

export type VehicleInsertBody = Omit<Vehicle, "id">

async function listVehicles(){
    return await prisma.vehicle.findMany()
}

async function getVehicleById(id:number){
    return await prisma.vehicle.findFirst({
        where:{
            id
        }
    })
}

async function newVehicle(vehicle:VehicleInsertBody){
    return await prisma.vehicle.create({
        data: vehicle
    })
}

async function findExistingVehicle(vehicle:VehicleInsertBody){
    return await prisma.vehicle.findFirst({
        where:{
            name: vehicle.name,
            brand: vehicle.brand,
            model: vehicle.model
        }
    })
}

async function deleteVehicle(id:number){
    return await prisma.vehicle.delete({
        where:{
            id
        }
    })
}

async function updateVehicle(vehicle:Vehicle){
    return await prisma.vehicle.update({
        where:{
            id:vehicle.id
        },
        data: vehicle
    })
}

const vehicleRepository = {
    listVehicles,
    getVehicleById,
    newVehicle,
    findExistingVehicle,
    deleteVehicle,
    updateVehicle
}
export default vehicleRepository