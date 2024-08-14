import React from 'react'

export default function Fruits() {
  return (
    <div className='flex'>

    <div className='w-1/2 relative'>
        <img className='' src="../public/image-graphic-design.jpg" alt="" />
        <div className='w-full absolute top-80 flex items-center flex-col'>
        <h4 className='absolute top-8 font-bold text-3xl'>Graphic Design</h4>
        <p className='absolute top-24 w-2/3 text-sm'>Grat design makes your memorable. We deliver artwork that underscores your brand message and captures potencial client´s attention.</p>
        </div>
    </div>

    <div className='w-1/2 relative'>
        <img className='' src="../public/image-photography.jpg" alt="" />
        <div className='w-full absolute top-80 flex items-center flex-col'>
        <h4 className='absolute top-8 font-bold text-3xl'>Photography</h4>
        <p className='absolute top-24 w-2/3 text-sm'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
    </div>

</div>
  )
}
