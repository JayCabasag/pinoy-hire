import admin from "../../../services/firebaseConfig"
const db = admin.firestore()

type AllJobsType = {
  limit: number
  status?: string
}

type AllJobsCallback = (error: null | string, response: any) => void;

export const getAllJobsServices = async (body: AllJobsType, callBack: AllJobsCallback) => {
    const { limit, status } = body

    const jobsRef = db.collection('jobs')

    let query = jobsRef.where('status', '==', status)
    query = query.limit(limit)
    await query.get().then(snapshots => {
        const jobs = snapshots.docs.map(doc => doc.data())
        callBack(null, jobs)
    }).catch(() => {
        callBack('Firebase error', null)
    })
    
}