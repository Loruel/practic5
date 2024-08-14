import React from 'react'


export default function Creative() {
  return (
    <div className='relative max-w-full h-200 bg-orange-400'>



      <img className='w-full h-full ' src="../public/image-header.jpg" alt="" />
      <img className='absolute top-80 left-1/2' src="../public/icon-arrow-down.svg" alt="" />
      <h2 className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl'>
        WE ARE CREATIVES
      </h2>
    </div>
  )
}
