import jwt from 'jsonwebtoken';

export const refreshToken = () => {
  const refreshTokenSecret =  process.env.JWT_SECRET_KEY as string;
  const refreshToken = jwt.sign({}, refreshTokenSecret, { expiresIn: '7d' });
  return refreshToken;
}