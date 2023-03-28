import jwt from 'jsonwebtoken';
import { User } from '../models/user';

export const generateJwtToken = (user: User): string => {
  const tokenPayload = {
    sub: user.sub,
    email: user.email,
    iat: user.iat,
    type: user.type
  }

  // generate a new JWT token using the payload and your secret key
  const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY as string, {
    expiresIn: '7d', // set the expiration time of the token
  })

  return token
}