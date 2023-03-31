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
      {jobsList?.map((job: JobType, index: number) => {
        return <JobsCard job={job} key={index}/>
      })}
    </div>
  )
}
