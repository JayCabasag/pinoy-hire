import admin from "../../../services/firebaseConfig"
const db = admin.firestore()

type LoginBodyType = {
    email: string
    provider: string
    password: string
}

type LoginCallback = (error: null | string, response: any) => void;

export const loginUserService = async (body: LoginBodyType, callBack: LoginCallback) => {
    const { email, provider, password } = body
    const usersRef = db.collection('users')
    const query = usersRef
    .where('email', '==', email)
    .where('provider', '==', provider)
    .where('password', '==', password)
    .get()
    query.then(snapshot => {
      if (snapshot.empty) {
        callBack('Email or password is incorrect', null)
        return
      }    
      snapshot.forEach(doc => {
        return callBack(null, {
            id: doc?.id,
            data: doc?.data()
        })
      })
    })
    .catch(err => {
      callBack('Firebase error', null)
      return
    })
}

export const getRefreshTokenService = async (refreshToken: string , callBack: LoginCallback) => {
  const tokensRef = db.collection('tokens')
  const query = tokensRef
  .where('token', '==', refreshToken)
  .get()
  query.then(snapshot => {
    if (snapshot.empty) {
      callBack('Invalid token', null)
      return
    }    
    snapshot.forEach(doc => {
      return callBack(null, {
          id: doc?.id,
          data: doc?.data()
      })
    })
  })
  .catch(err => {
    callBack('Firebase error', null)
    return
  })
}

export const setRefreshTokenService = async (refreshToken: string , callBack: (error: null | string) => void) => {
  const tokensRef = db.collection('tokens');
  const query = tokensRef.where('token', '==', refreshToken).limit(1); // Query to check if token already exists
  const existingToken = await query.get(); // Perform the query and await the results

  if (!existingToken.empty) { // If the query returns a document, the token already exists
    callBack(null); // Callback with the existing document ID
    return;
  }

  const newTokenRef = tokensRef.doc(); // Create a new document reference
  const newTokenData = {
    token: refreshToken,
    created_at: admin.firestore.Timestamp.now(),
  }; // Set the data to be written to Firestore

  newTokenRef.set(newTokenData) // Write data to Firestore
    .then(() => {
      callBack(null); // Callback with the new document ID
    })
    .catch(err => {
      callBack('Firebase error')
    })
}

export const removeRefreshTokenService = async (token: string, callBack: (error: string | null) => void) => {
  const tokensRef = db.collection('tokens');
  const query = tokensRef.where('token', '==', token).limit(1); // Query to find the document with the specified token
  const snapshot = await query.get(); // Perform the query and await the results

  if (snapshot.empty) { // If the query returns no documents, the token was not found
    callBack('Invalid token')
    return
  }

  const tokenDoc = snapshot.docs[0]; // Get the document from the query snapshot
  tokenDoc.ref.delete() // Delete the document
    .then(() => {
      callBack(null); // Callback with no error if delete is successful
    })
    .catch(err => {
      callBack('Firebase error'); // Callback with error message if there's an error
    })
}