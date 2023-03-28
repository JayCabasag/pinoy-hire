"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllJobsServices = void 0;
const firebaseConfig_1 = __importDefault(require("../../../services/firebaseConfig"));
const db = firebaseConfig_1.default.firestore();
const getAllJobsServices = (body, callBack) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, status } = body;
    const jobsRef = db.collection('jobs');
    let query = jobsRef.where('status', '==', status);
    query = query.limit(limit);
    yield query.get().then(snapshots => {
        const jobs = snapshots.docs.map(doc => doc.data());
        callBack(null, jobs);
    }).catch(() => {
        callBack('Firebase error', null);
    });
});
exports.getAllJobsServices = getAllJobsServices;
