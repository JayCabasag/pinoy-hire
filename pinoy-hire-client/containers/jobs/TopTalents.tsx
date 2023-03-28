import TalentCard from '@/components/jobs/TalentCard'
import React from 'react'

export default function TopTalents() {
  return (
    <div className='h-auto mt-2 pt-2 gap-2 flex flex-col border rounded-md max-h-96 overflow-auto'>
      <TalentCard />
      <TalentCard />
      <TalentCard />
      <TalentCard />
      <TalentCard />
      <TalentCard />
    </div>
  )
}
