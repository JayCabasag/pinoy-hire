"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateAccessToken = (user) => {
    const tokenPayload = {
        sub: user.sub,
        email: user.email,
        iat: user.iat,
        type: user.type
    };
    // generate a new JWT token using the payload and your secret key
    const token = (0, jsonwebtoken_1.sign)(tokenPayload, process.env.JWT_SECRET_KEY, {
        expiresIn: '15s', // set the expiration time of the token
    });
    return token;
};
exports.generateAccessToken = generateAccessToken;
