import { Footer } from '@/components/footer'
import { ExtendedNavbar, Navbar } from '@/components/navbar'
import { Jobs } from '@/containers/jobs'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function JobsPage() {
 
  const { data: session } = useSession()

  return <>       
  <Navbar />
  <ExtendedNavbar />
  <Jobs />
  <Footer />
  </>
}
