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
exports.removeRefreshTokenService = exports.setRefreshTokenService = exports.getRefreshTokenService = exports.loginUserService = void 0;
const firebaseConfig_1 = __importDefault(require("../../../services/firebaseConfig"));
const db = firebaseConfig_1.default.firestore();
const loginUserService = (body, callBack) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, provider, password } = body;
    const usersRef = db.collection('users');
    const query = usersRef
        .where('email', '==', email)
        .where('provider', '==', provider)
        .where('password', '==', password)
        .get();
    query.then(snapshot => {
        if (snapshot.empty) {
            callBack('Email or password is incorrect', null);
            return;
        }
        snapshot.forEach(doc => {
            return callBack(null, {
                id: doc === null || doc === void 0 ? void 0 : doc.id,
                data: doc === null || doc === void 0 ? void 0 : doc.data()
            });
        });
    })
        .catch(err => {
        callBack('Firebase error', null);
        return;
    });
});
exports.loginUserService = loginUserService;
const getRefreshTokenService = (refreshToken, callBack) => __awaiter(void 0, void 0, void 0, function* () {
    const tokensRef = db.collection('tokens');
    const query = tokensRef
        .where('token', '==', refreshToken)
        .get();
    query.then(snapshot => {
        if (snapshot.empty) {
            callBack('Invalid token', null);
            return;
        }
        snapshot.forEach(doc => {
            return callBack(null, {
                id: doc === null || doc === void 0 ? void 0 : doc.id,
                data: doc === null || doc === void 0 ? void 0 : doc.data()
            });
        });
    })
        .catch(err => {
        callBack('Firebase error', null);
        return;
    });
});
exports.getRefreshTokenService = getRefreshTokenService;
const setRefreshTokenService = (refreshToken, callBack) => __awaiter(void 0, void 0, void 0, function* () {
    const tokensRef = db.collection('tokens');
    const query = tokensRef.where('token', '==', refreshToken).limit(1); // Query to check if token already exists
    const existingToken = yield query.get(); // Perform the query and await the results
    if (!existingToken.empty) { // If the query returns a document, the token already exists
        callBack(null); // Callback with the existing document ID
        return;
    }
    const newTokenRef = tokensRef.doc(); // Create a new document reference
    const newTokenData = {
        token: refreshToken,
        created_at: firebaseConfig_1.default.firestore.Timestamp.now(),
    }; // Set the data to be written to Firestore
    newTokenRef.set(newTokenData) // Write data to Firestore
        .then(() => {
        callBack(null); // Callback with the new document ID
    })
        .catch(err => {
        callBack('Firebase error');
    });
});
exports.setRefreshTokenService = setRefreshTokenService;
const removeRefreshTokenService = (token, callBack) => __awaiter(void 0, void 0, void 0, function* () {
    const tokensRef = db.collection('tokens');
    const query = tokensRef.where('token', '==', token).limit(1); // Query to find the document with the specified token
    const snapshot = yield query.get(); // Perform the query and await the results
    if (snapshot.empty) { // If the query returns no documents, the token was not found
        callBack('Invalid token');
        return;
    }
    const tokenDoc = snapshot.docs[0]; // Get the document from the query snapshot
    tokenDoc.ref.delete() // Delete the document
        .then(() => {
        callBack(null); // Callback with no error if delete is successful
    })
        .catch(err => {
        callBack('Firebase error'); // Callback with error message if there's an error
    });
});
exports.removeRefreshTokenService = removeRefreshTokenService;
