import Image from 'next/image'
import React from 'react'

export default function TalentCard() {
  return (
    <div className="flex items-center space-x-4 border-b p-2">
        <div className="relative">
          <Image className="w-11 h-10 rounded-full" src="/favicon.ico" alt="" width={50} height={50}/>
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="font-medium dark:text-white w-full">
            <div className='flex justify-between w-full'>
              <div className='flex gap-2'>
                <p className='font-semibold text-sm'>John Doe</p>
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Developer
                </span>
            </div>
              <div className='flex items-center justify-center text-slate-400'>
                <p className='text-sm'>{1}</p>
                <svg id="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon line" width="23" height="23">
                  <polygon
                    id="primary"
                    points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
                    fill='none'
                    stroke='#000'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={0.5}
                  >
                  </polygon>
                </svg>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
        </div>
    </div>
  )
}
