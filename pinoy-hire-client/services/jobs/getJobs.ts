import axios from "axios"
import { SERVER } from "../server/server"

export const getJobs = async () => {
    const response = await axios.get(`${SERVER}/jobs`)
    return response.data
}