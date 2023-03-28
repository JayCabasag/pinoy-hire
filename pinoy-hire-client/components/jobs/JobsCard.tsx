import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function JobsCard() {
  return (
    <article className="container rounded-xl border-2 border-gray-100 bg-white">
    <div className="flex items-start gap-4 p-2 sm:p-2 lg:p-4">
        <a href="#" className="block shrink-0">
        <Image
            alt="Speaker"
            src="/favicon.ico"
            className="h-14 w-14 rounded-lg object-cover"
            height={50}
            width={50}
        />
        </a>

        <div>
        <h3 className="font-medium sm:text-md">
            <Link href='/jobs/2' className="hover:underline text-md">
             1 month contract as React JS Dev
            </Link>
        </h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">React JS</span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Node JS</span>

        <p className="line-clamp-2 text-xs text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            accusantium temporibus iure delectus ut totam natus nesciunt ex?
            Ducimus, enim.
        </p>

        <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
            </svg>

            <p className="text-xs">14 comments</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
            Posted by
            <a href="#" className="font-medium underline hover:text-gray-700">
                John
            </a>
            </p>
        </div>
        </div>
    </div>
    <div className='flex flex-row gap-2'>
      <div className="flex justify-end">
        <strong
        className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-orange-400 py-1.5 px-3 text-white"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path id="primary" d="M13,15H11V13h2ZM16,4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7h8Zm5,16V8a1,1,0,0,0-1-1H4A1,1,0,0,0,3,8V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20Z" fill='none' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5}></path><path id="primary-2" data-name="primary" d="M11,14H8.64A4,4,0,0,1,5,11.58L3.18,7.43" fill='none' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5}></path><path id="primary-3" data-name="primary" d="M20.82,7.43,19,11.58A4,4,0,0,1,15.36,14H13" fill='none' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5}></path>
        </svg>

        <span className="text-[10px] font-medium sm:text-xs">1 Total Applicants</span>
        </strong>
      </div>
    
      <div className="flex justify-end">
        <strong
        className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
        </svg>

        <span className="text-[10px] font-medium sm:text-xs">Looking!</span>
        </strong>
      </div>
    </div>
    </article>
  )
}
