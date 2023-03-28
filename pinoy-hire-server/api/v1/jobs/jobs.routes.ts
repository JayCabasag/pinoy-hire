import express from 'express'
import { getAllJobs } from './jobs.controller'
const jobsRouter = express.Router()

jobsRouter.get('/jobs', getAllJobs)

export default jobsRouter