import { Footer } from '@/components/footer'
import { ExtendedNavbar, Navbar } from '@/components/navbar'
import { Jobs } from '@/containers/jobs'
import React from 'react'

export default function JobsPage() {
  return <>       
  <Navbar />
  <ExtendedNavbar />
  <Jobs />
  <Footer />
  </>
}
