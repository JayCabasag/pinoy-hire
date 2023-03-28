"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.loginUser = exports.logoutUser = void 0;
const generate_access_token_1 = require("../../../auth/generate-access-token");
const generate_refresh_token_1 = require("../../../auth/generate-refresh-token");
const users_services_1 = require("./users.services");
const logoutUser = (req, res) => {
    var _a, _b;
    const token = (_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) !== null && _b !== void 0 ? _b : '';
    (0, users_services_1.removeRefreshTokenService)(token, (error) => {
        if (error) {
            return res.status(500).json({
                message: error
            });
        }
        return res.status(200).json({
            message: 'Logged out'
        });
    });
};
exports.logoutUser = logoutUser;
const loginUser = (req, res) => {
    var _a, _b, _c;
    const body = req.body;
    const email = (_a = body === null || body === void 0 ? void 0 : body.email) !== null && _a !== void 0 ? _a : '';
    const provider = (_b = body === null || body === void 0 ? void 0 : body.provider) !== null && _b !== void 0 ? _b : '';
    const password = (_c = body === null || body === void 0 ? void 0 : body.password) !== null && _c !== void 0 ? _c : '';
    if (email === '' || provider === '' || password === '') {
        return res.status(400).json({
            message: 'One or more required attributes are missing or invalid.'
        });
    }
    (0, users_services_1.loginUserService)(body, (error, response) => {
        if (error) {
            return res.status(401).json({
                message: error
            });
        }
        const userPayload = {
            sub: response.id,
            email: response.email,
            iat: Math.floor(Date.now() / 1000),
            type: 'user'
        };
        const accessToken = (0, generate_access_token_1.generateAccessToken)(userPayload);
        const refreshToken = (0, generate_refresh_token_1.generateRefreshToken)(userPayload);
        (0, users_services_1.setRefreshTokenService)(refreshToken, (error) => {
            if (error) {
                return res.status(500).json({
                    message: error
                });
            }
            return res.status(200).json({
                data: Object.assign(Object.assign({}, userPayload), { accessToken: accessToken, refreshToken }),
            });
        });
    });
};
exports.loginUser = loginUser;
const verifyToken = (req, res) => {
    var _a;
    const token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
    (0, users_services_1.getRefreshTokenService)(token, (error, response) => {
        if (error) {
            return res.status(400).json({
                error: error
            });
        }
        return res.status(200).json({
            type: 'user',
            token: token,
        });
    });
};
exports.verifyToken = verifyToken;
