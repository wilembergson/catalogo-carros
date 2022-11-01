import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import sessionRepository, { SessionInsertData } from "../repository/sessionRepository.js"
import userRepository from "../repository/userRepository.js"
import ErrorMessage from "../utils/erroMessage.js"

export type LoginBody = {
    userLogin: string,
    password: string
}

async function login(login: LoginBody){
    const { userLogin, password } = login
    const user = await userRepository.findUser(userLogin)
    if(!user) return ErrorMessage(401, "Usuário inexistente. Tente novamente.")
    const checkPassword = bcrypt.compareSync(password, user.password)
    if(!checkPassword) return ErrorMessage(401, "Senha incorreta. Tente novamente.")
    const token = jwt.sign(
        {
            userId: user.id,
            userLogin
        },
        process.env.JWT_SECRET
    )
    const newSession: SessionInsertData = {
        userId: user.id,
        date: new Date()
    }
    await sessionRepository.insert(newSession)
    return {token}
}

const authService = {
    login
}
export default authService