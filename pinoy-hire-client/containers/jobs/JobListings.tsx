import { JobsCard } from '@/components/jobs'
import React from 'react'

export default function JobListings() {
  return (
    <div className='w-full md:w-3/5 flex flex-col gap-2'>
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
    </div>
  )
}
