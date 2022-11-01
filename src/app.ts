import express, { json } from "express"
import cors from "cors"
import "express-async-errors"

import routerIndex from "./router/routerIndex.js"
import errorHandler from "./middleware/errorHandlerMiddleware.js"

const app = express()

app.use(json())
app.use(cors())

app.use(routerIndex)
app.use(errorHandler)

export default app