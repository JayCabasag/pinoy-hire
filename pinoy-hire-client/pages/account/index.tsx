import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]"

export default function AccountPage() {

  const { data: session } = useSession()
  console.log(session)

  return (
    <div className='w-full  flex items-center justify-center'>
      <div className='container py-4 font-extrabold text-2xl text-slate-700'> Account Page This is restricted </div>
    </div>
  )
}

interface Props {
  restricted: boolean
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/jobs',
        permanent: true
      }
    }
  }

  return {
    props: { restricted: false }
  }
}