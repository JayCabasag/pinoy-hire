import { Request, Response } from 'express'
import { generateAccessToken } from '../../../auth/generate-access-token'
import { generateRefreshToken } from '../../../auth/generate-refresh-token'
import { Provider } from '../../../models/provider'
import { User } from '../../../models/user'
import { getRefreshTokenService, loginUserService, removeRefreshTokenService, setRefreshTokenService } from './users.services'

export const logoutUser = (req: Request, res: Response) => {
  const token = req?.headers?.authorization as string ?? ''

  removeRefreshTokenService(token, (error) => {
    if(error) {
      return res.status(500).json({
        message: error
      })
    }

    return res.status(200).json({
      message: 'Logged out'
    })
  })
}

export const loginUser = (req: Request, res: Response) => {
  const body = req.body
  const email = body?.email as string ?? ''
  const provider = body?.provider as Provider ?? ''
  const password = body?.password as string ?? ''

  if(email === '' || provider === '' || password === ''){
    return res.status(400).json({
      message: 'One or more required attributes are missing or invalid.'
    })
  }

  loginUserService(body, (error: null | string, response: any) => {
    if(error){
      return res.status(401).json({
        message: error
      })
    }

    const userPayload: User = {
        sub: response.id,
        email: response.email,
        name: response.name,
        iat: Math.floor(Date.now() / 1000),
        type: 'user'
    }
  
    const accessToken = generateAccessToken(userPayload)
    const refreshToken = generateRefreshToken(userPayload)

    setRefreshTokenService(refreshToken, (error) => {
      if(error){
        return res.status(500).json({
          message: error
        })
      }
      return res.status(200).json({
        data: {...userPayload, accessToken: accessToken, refreshToken },
      })
    })
  })
}

export const verifyToken = (req: Request, res: Response) => {
    const token = req?.headers?.authorization as string
    getRefreshTokenService(token, (error, response) => {
      if(error){
        return res.status(400).json({
          error: error
        })
      }

      return res.status(200).json({
        type: 'user',
        token: token,
    })
    })
}