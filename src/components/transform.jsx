import React from 'react'

export default function Transform() {
    return (
        <div className='flex w-full'>

            <div className='w-1/2 p-28'>
                <h3 className=' w-2/3 font-bold text-4xl'>Transform your brand</h3>
                <p className=' mt-12'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <div className='relative cursor-pointer w-32 h-9 mt-12'>
                
                    <div className='bg-[#ffd101] bg-opacity-40 w-32 h-2 rounded-xl absolute bottom-3 left-0 hover:bg-opacity-100'></div>
                    <p className='w-28 ml-3 inline-block font-bold'>LEARN MORE</p>

                </div>
            </div>

            <div className='w-1/2'>
                <img src="../public/image-transform.jpg" alt="" />
            </div>

        </div>
    )
}
