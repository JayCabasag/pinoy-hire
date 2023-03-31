import { JobsCard } from '@/components/jobs'
import TalentCard from '@/components/jobs/TalentCard'
import React from 'react'
import JobListings from './JobListings'
import TopTalents from './TopTalents'

export default function Jobs() {
  return (
    <div className=' flex items-center justify-center w-full h-auto p-1 md:p-2 flex-row gap-1 '>
      <div className='container flex flex-col md:flex-row gap-4'>
        <JobListings />
        <div className='w-full md:w-2/5 px-2 pt-2 md:pt-0'>
        <h1 className="mb-3 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl dark:text-white mt-2"><mark className="px-3 py-2 text-white bg-orange-400 rounded dark:bg-blue-500">Top</mark> <span className='text-orange-400'>talents</span></h1>
        <p className="text-sm font-normal text-gray-500 lg:text-md dark:text-gray-400 py-5 px-2">
          Our focus is on markets where top-notch skills, ingenuity, and expertise can bring long-term value to businesses and drive economic progress.
        </p>
        <TopTalents />
        </div>
        </div>
    </div>
  )
}
