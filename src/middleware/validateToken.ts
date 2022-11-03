import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export function validateToken() {
    return (req: Request, res: Response, next: NextFunction) => {
      const authorization = req.headers.authorization
      const token = authorization?.replace("Bearer", "").trim()
      jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) return res.status(401).json({ message: 'Falha na autenticação da operação.' })
      })
      res.locals.token = token
      next()
    };
  }