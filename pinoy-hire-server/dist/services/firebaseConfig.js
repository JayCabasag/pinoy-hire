"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//firebase
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const pinoy_hire_firebase_adminsdk_4ifc1_293417957a_json_1 = __importDefault(require("./pinoy-hire-firebase-adminsdk-4ifc1-293417957a.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(pinoy_hire_firebase_adminsdk_4ifc1_293417957a_json_1.default)
});
exports.default = firebase_admin_1.default;
