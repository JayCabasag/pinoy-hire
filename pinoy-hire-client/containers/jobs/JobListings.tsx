import { JobsCard } from '@/components/jobs'
import { getJobs } from '@/services/jobs/getJobs'
import { useQuery } from '@tanstack/react-query'
import { JobType } from '@/utils/types'
import React from 'react'

export default function JobListings() {

  const jobsResponse = useQuery({ queryKey: ['jobs'], queryFn: () => getJobs() })

  if (jobsResponse.isLoading) {
    return (
    <div className='w-full md:w-3/5 flex flex-col gap-2'>
      <div className="flex items-center justify-center h-full">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
      </div>
    </div>
  )}

  if (jobsResponse.isError) {
    return (
      <div className='w-full md:w-3/5 flex flex-col gap-2'>
        Error occured...
      </div>
    )}

  const jobsList = jobsResponse?.data?.data as JobType[]  ?? [] as JobType[]
  return (
    <div className='w-full md:w-3/5 flex flex-col gap-2'>
      <h1 className="mb-3 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl dark:text-white mt-2"><mark className="px-3 py-2 text-white bg-orange-400 rounded dark:bg-blue-500">Popular</mark> <span className='text-orange-400'> job listing</span></h1>
      {jobsList?.map((job: JobType, index: number) => {
        return <JobsCard job={job} key={index}/>
      })}
    </div>
  )
}
