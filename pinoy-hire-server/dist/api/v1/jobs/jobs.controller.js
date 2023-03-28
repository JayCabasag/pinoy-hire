"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobs = void 0;
const constants_1 = require("../../../utils/constants");
const jobs_services_1 = require("./jobs.services");
const getAllJobs = (req, res) => {
    var _a;
    const query = req.query;
    const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query.limit, 10) : constants_1.JOBS_INITIAL_LOAD_LIMIT;
    const status = (_a = query === null || query === void 0 ? void 0 : query.status) !== null && _a !== void 0 ? _a : constants_1.JOBS_DEFAULT_LOAD_STATUS;
    (0, jobs_services_1.getAllJobsServices)({ limit, status }, (error, response) => {
        if (error) {
            return res.status(500).json({
                message: error
            });
        }
        return res.status(200).json({
            data: response
        });
    });
};
exports.getAllJobs = getAllJobs;
