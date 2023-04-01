import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]"
import { ExtendedNavbar, Navbar } from "@/components/navbar";
import { AccountContainer } from "@/containers/account";
import { useEffect, useRef } from "react";

export default function AccountPage() {

  const { data: session } = useSession()

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <AccountContainer />
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