import { Vehicle } from "@prisma/client"

import vehicleRepository from "../repository/vehicleRepository.js"


async function listVehicles(){
    const vehicles = await vehicleRepository.listVehicles()
    return vehicles.sort(function(a:Vehicle, b:Vehicle):number{
        return a.price < b.price ? -1 : a > b ? 1 : 0
    })
}

const vehicleService = {
    listVehicles
}
export default vehicleService