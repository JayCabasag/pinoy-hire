import { Footer } from '@/components/footer'
import { ExtendedNavbar, Navbar } from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { SessionProvider } from "next-auth/react"

const queryClient = new QueryClient()

export default function App({ 
  Component, pageProps: { session, ...pageProps}}: AppProps) {
  return <>
     <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
     </SessionProvider>
  </>
}
