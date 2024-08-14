import React from 'react'

export default function Stand() {
    return (
        <div className='flex w-full'>

            <div className='w-1/2'>
                <img src="../public/image-stand-out.jpg" alt="" />
            </div>

            <div className='w-1/2  p-28'>
                <h3 className=' w-2/3 font-bold text-4xl'>Stand out to the right</h3>
                <p className=' mt-12'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we´ll build and extend your brand in digital places.</p>

                <div className='relative cursor-pointer w-32 h-9 mt-12'>
                    <div className='bg-[#ff7163] bg-opacity-40 w-32 h-2 rounded-xl absolute bottom-3 left-0 hover:bg-opacity-100'></div>
                    <p className='w-28 ml-3 inline-block font-bold'>LEARN MORE</p>
                </div>

            </div>

        </div>
    )
}
