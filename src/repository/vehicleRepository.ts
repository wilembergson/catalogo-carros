import prisma from "../config/database.js"

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

const vehicleRepository = {
    listVehicles,
    getVehicleById
}
export default vehicleRepository