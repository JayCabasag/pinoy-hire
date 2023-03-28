"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const refreshToken = () => {
    const refreshTokenSecret = process.env.JWT_SECRET_KEY;
    const refreshToken = jsonwebtoken_1.default.sign({}, refreshTokenSecret, { expiresIn: '7d' });
    return refreshToken;
};
exports.refreshToken = refreshToken;
