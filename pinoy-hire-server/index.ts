import express, { Express, Response, Request } from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from "./api/v1/users/users.routes"
import jobsRouter from "./api/v1/jobs/jobs.routes"

const PORT = 8080
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const apiHolder = 'v1'

app.use(`/api/${apiHolder}`, userRouter)
app.use(`/api/${apiHolder}`, jobsRouter)

app.listen(PORT, () => {
    console.log("Server up and running on port: ", PORT)
})