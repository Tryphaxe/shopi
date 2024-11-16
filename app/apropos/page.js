import HeroAbout from '@/components/Heros/HeroAbout'
import HeroCit from '@/components/Heros/HeroCit'
import SectionStat from '@/components/Stats/SectionStat'
import React from 'react'

function page() {
  return (
    <div>
        <div className='w-5/6 mx-auto mt-6 text-center text-6xl text-orange-500'>A propos de nous</div>
        <HeroCit />
        <SectionStat />
        <HeroAbout />
    </div>
  )
}

export default page
