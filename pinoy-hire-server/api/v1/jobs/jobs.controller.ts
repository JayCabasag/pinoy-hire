import { Request, Response } from "express"
import { JOBS_DEFAULT_LOAD_STATUS, JOBS_INITIAL_LOAD_LIMIT } from "../../../utils/constants"
import { getAllJobsServices } from "./jobs.services"

export const getAllJobs = (req: Request, res: Response) => {
    const query = req.query
    const limit = query?.limit ? parseInt(query.limit as string, 10) : JOBS_INITIAL_LOAD_LIMIT
    const status = query?.status as string ?? JOBS_DEFAULT_LOAD_STATUS

    getAllJobsServices({ limit, status}, (error, response) => {
      if (error){
        return res.status(500).json({
            message: error
        })
      }

      return res.status(200).json({
        data: response
      })
    })
}