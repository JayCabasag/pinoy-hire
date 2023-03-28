import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { CustomRequest } from '../models/custom-request';

interface TokenPayload {
  userId: string
  email: string
  iat: number
}
  

function validateToken(req: CustomRequest, res: Response, next: NextFunction) {
  // Get the token from the request header
  const token = req.headers.authorization;

  // If no token is provided, return an error response
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token using the secret key
    const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey';
    const decoded = jwt.verify(token, secretKey) as TokenPayload;

    // Add the decoded token to the request object for use in subsequent middleware
    req.user = decoded;

    // Call the next middleware in the chain
    next();
  } catch (err) {
    // If an error occurs during token verification, return an error response
    return res.status(400).json({ error: 'Invalid token.' });
  }
}

export default validateToken;