"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const verify_token_1 = __importDefault(require("../../../auth/verify-token"));
const userRouter = express_1.default.Router();
userRouter.post('/user/verify', verify_token_1.default, users_controller_1.verifyToken);
userRouter.post('/user/login', users_controller_1.loginUser);
userRouter.post('/user/logout', verify_token_1.default, users_controller_1.logoutUser);
exports.default = userRouter;
