"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_routes_1 = __importDefault(require("./api/v1/users/users.routes"));
const jobs_routes_1 = __importDefault(require("./api/v1/jobs/jobs.routes"));
const PORT = 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
dotenv_1.default.config();
const apiHolder = 'v1';
app.use(`/api/${apiHolder}`, users_routes_1.default);
app.use(`/api/${apiHolder}`, jobs_routes_1.default);
app.listen(PORT, () => {
    console.log("Server up and running on port: ", PORT);
});
