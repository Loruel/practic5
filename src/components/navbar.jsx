import React from 'react'

export default function Navbar() {
  return (
    <div className='flex w-full justify-end mr-14'>
      <ul className='flex text-neutral-50 list-none space-x-6 ' >
        <li className='hover:bg-[#6eceff] cursor-pointer rounded-xl h-8 w-20 flex items-center justify-center active:bg-white active:text-black'>About</li>
        <li className='hover:bg-[#6eceff] cursor-pointer rounded-xl h-8 w-20 flex items-center justify-center active:bg-white active:text-black'>Services</li>
        <li className='hover:bg-[#6eceff] cursor-pointer rounded-xl h-8 w-20 flex items-center justify-center active:bg-white active:text-black'>Projects</li>
        <li className='hover:bg-[#6eceff] cursor-pointer rounded-xl h-8 w-20 flex items-center justify-center active:bg-white active:text-black'>Contact</li>
      </ul>
    </div>
  )
}
