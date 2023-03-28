"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validateToken(req, res, next) {
    // Get the token from the request header
    const token = req.headers.authorization;
    // If no token is provided, return an error response
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        // Verify the token using the secret key
        const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey';
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        // Add the decoded token to the request object for use in subsequent middleware
        req.user = decoded;
        // Call the next middleware in the chain
        next();
    }
    catch (err) {
        // If an error occurs during token verification, return an error response
        return res.status(400).json({ error: 'Invalid token.' });
    }
}
exports.default = validateToken;
