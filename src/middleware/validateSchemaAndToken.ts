import { NextFunction, Request, Response } from "express"
import { ObjectSchema } from "joi"
import jwt from "jsonwebtoken"

export function validateSchemaAndToken(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const authorization = req.headers.authorization
      const token = authorization?.replace("Bearer", "").trim()
      jwt.verify(token, process.env.JWT_SECRET, function(err) {
        if (err) return res.status(500).json({ message: 'Falha na autenticação da operação.' })
      })
      const validation = schema.validate(req.body);
      if (validation.error) {
        return res.status(422).send({ error: validation.error.message });
      }
      res.locals.body = req.body
      res.locals.token = token
      next();
    };
  }