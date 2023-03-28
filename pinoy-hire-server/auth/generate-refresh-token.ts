import { sign } from 'jsonwebtoken';
import { User } from "../models/user";

export const generateRefreshToken = (user: User) => {
    const tokenPayload = {
        sub: user.sub,
        email: user.email,
        iat: user.iat,
        type: user.type
      }
    
      // generate a new JWT token using the payload and your secret key
      const token = sign(tokenPayload, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '7d', // set the expiration time of the token
      })
    
      return token
}