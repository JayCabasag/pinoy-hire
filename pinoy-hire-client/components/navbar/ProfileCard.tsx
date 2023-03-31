import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfileCard() {
  const { data: session } = useSession()
  const profileImage = session?.user?.image ?? '/favicon.ico'

  return (
    <div>
      <div id="tooltip-bonnie" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Bonnie Green
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <Link href='/account'>
        <Image
            className="w-10 h-10 rounded" 
            src={profileImage}
            alt="Medium avatar"
            height={120}
            width={120}
        />
      </Link>
    </div>
  )
}
