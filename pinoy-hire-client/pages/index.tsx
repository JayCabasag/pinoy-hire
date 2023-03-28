import { ExtendedNavbar, Navbar } from '@/components/navbar'
import { Jobs } from '@/containers/jobs'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
interface Props {
  redirect: string
}

export default function Home(props: Props) {
  const router = useRouter()

  useEffect(() => {
    router.replace(`${props.redirect}`)
  }, [props.redirect, router])
  

  return (
    <>
      <Head>
        <title>Pinoy hire</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      redirect: '/jobs',
    }
  }
}