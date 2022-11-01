import prisma from "../config/database.js"

async function findUser(userLogin:string){
    return await prisma.user.findUnique({
        where: {
            userLogin
        }
    })
}

const userRepository = {
    findUser
}
export default userRepository