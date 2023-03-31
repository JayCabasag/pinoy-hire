import { Navbar } from '@/components/navbar'
import { LoginContainer } from '@/containers/social/login'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';

export default function LoginPage({ providers } : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <>
  <Navbar />
  <LoginContainer />
  </>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  
  if (session) {
    return { redirect: { destination: "/jobs" } };
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}