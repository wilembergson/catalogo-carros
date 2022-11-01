import { Request, Response } from "express"

import authService, { LoginBody } from "../service/authService.js"

export async function login(req:Request, res:Response){
    const loginData:LoginBody = req.body
    const result = await authService.login(loginData)
    return res.status(200).json(result)
}