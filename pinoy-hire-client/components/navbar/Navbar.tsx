import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {

  const router = useRouter()
  const isOnAccountRoute = router.asPath === '/account'

  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false) 
  
  const handleToggleSearch = () => {
    setShowMobileSearchBar(!showMobileSearchBar)
  }

  const handleToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 md:py-8 rounded dark:bg-gray-900 z-20 border-b">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link href="/" className="flex items-center gap-2">
    <Image 
      src='/logo-no-background.svg'
      height={50}
      width={180}
      alt='logo'
    />
    </Link>
    <div className="flex md:order-2">
            <button onClick={handleToggleSearch} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon line" width="24" height="24">
                <path id="primary" d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Zm4,11-6-6" fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.5' />
              </svg>
               <span className="sr-only">Search</span>
            </button>
              <div className={ isOnAccountRoute ? "hidden" : "relative hidden md:block" }>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon line" width="24" height="24">
                 <path id="primary" d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Zm4,11-6-6" fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.5' />
              </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
        <button onClick={handleToggleMenu} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open menu</span>
        <svg id="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon line" width="32" height="32">
          <path id="primary" d="M9,18H21M3,12H21M3,6H15" fill="none" stroke='#000' strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}>
          </path>
        </svg>
        </button>
    </div>
        <div className={`relative mt-3 ${showMobileSearchBar ? 'block' : 'hidden'} md:hidden w-full`}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd">
                </path>
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 py-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        </div>
        <div className={`items-center justify-between ${showMobileMenu ? 'hidden' : 'block'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
        <ul className="flex flex-col p-0 mt-2 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link href="/jobs" className="block py-2 pl-3 pr-4 text-md text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Jobs</Link>
            </li>
            <li>
            <Link href="/employers" className="block py-2 pl-3 pr-4 text-md text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Employer</Link>
            </li>
            <li>
            <Link href="/talents" className="block py-2 pl-3 pr-4 text-md text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Talents</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}
