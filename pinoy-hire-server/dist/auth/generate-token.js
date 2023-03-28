"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJwtToken = (user) => {
    const tokenPayload = {
        sub: user.sub,
        email: user.email,
        iat: user.iat,
        type: user.type
    };
    // generate a new JWT token using the payload and your secret key
    const token = jsonwebtoken_1.default.sign(tokenPayload, process.env.JWT_SECRET_KEY, {
        expiresIn: '7d', // set the expiration time of the token
    });
    return token;
};
exports.generateJwtToken = generateJwtToken;
