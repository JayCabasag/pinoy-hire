import { JobsCard } from '@/components/jobs'
import TalentCard from '@/components/jobs/TalentCard'
import React from 'react'
import JobListings from './JobListings'
import TopTalents from './TopTalents'

export default function Jobs() {
  return (
    <div className=' flex items-center justify-center w-full h-auto p-1 md:p-2 flex-row gap-1 '>
      <div className='container flex flex-col md:flex-row'>
        <JobListings />
        <div className='w-full md:w-2/5 px-2 pt-2 md:pt-0'>
        <h1 className="mb-3 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white"><mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Top</mark> rated talents</h1>
        <p className="text-sm font-normal text-gray-500 lg:text-md dark:text-gray-400">
          Our focus is on markets where top-notch skills, ingenuity, and expertise can bring long-term value to businesses and drive economic progress.
        </p>
        <TopTalents />
        </div>
        </div>
    </div>
  )
}
