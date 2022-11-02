import prisma from "../config/database.js"

async function listVehicles(){
    return await prisma.vehicle.findMany()
}

const vehicleRepository = {
    listVehicles
}
export default vehicleRepository