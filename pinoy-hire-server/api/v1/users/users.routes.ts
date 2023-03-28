import express from 'express'
import { loginUser, logoutUser, verifyToken } from './users.controller'
import validateToken from '../../../auth/verify-token'
const userRouter = express.Router()

userRouter.post('/user/verify', validateToken, verifyToken)
userRouter.post('/user/login', loginUser)
userRouter.post('/user/logout', validateToken, logoutUser)

export default userRouter