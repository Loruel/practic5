import React from 'react'

export default function Footer() {
  return (
    <footer className='flex w-full h-64 items-center bg-[#90d4c5] flex-col '>
        <h2 className='text-[#2a7163] font-bold text-2xl mt-12'>
            sunnyside
        </h2>
        <div className='flex space-x-6 mt-6'>
            <p className='text-[#2a7163] hover:text-white cursor-pointer'>About</p>
            <p className='text-[#2a7163] hover:text-white cursor-pointer'>Services</p>
            <p className='text-[#2a7163] hover:text-white cursor-pointer'>Projects</p>
        </div>
        <div className='flex space-x-6 mb-4 mt-14'>
            <img className='cursor-pointer' src="./public/icon-facebook.svg" alt="" />
            <img className='cursor-pointer' src="./public/icon-instagram.svg" alt="" />
            <img className='cursor-pointer' src="./public/icon-twitter.svg" alt="" />
            <img className='cursor-pointer' src="./public/icon-pinterest.svg" alt="" />
        </div>
    </footer>
  )
}
