import React from 'react'
import Navbar from './navbar'

export default function Header() {
  return (
    <div className='flex max-w-full h-16 items-center bg-[#3ebfff]'>
      <div className='text-neutral-50 font-bold text-center ml-6 text-3xl'>
        sunnyside
      </div>
      <Navbar />
    </div>
  )
}
