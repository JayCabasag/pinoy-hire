//firebase
import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from './pinoy-hire-firebase-adminsdk-4ifc1-293417957a.json'
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

export default admin