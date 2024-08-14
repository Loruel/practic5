import React from 'react'
import Testimonies from './testimonies'

export default function Testimonials() {
  return (
    <div className=' h-[600px] flex items-center flex-col'>
      <h2 className=' flex items-center flex-col mt-16 font-bold text-2xl text-[#c8c6c7]'>
        CLIENT TESTIMONIALS
      </h2>
      <div className='flex'>

        {dataTestimonies.map((data, i) =>
          <Testimonies key={i} data={data} />
        )}

      </div>



    </div>
  )
}


const dataTestimonies = [{
  photo: '/image-emily.jpg',
  text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
  nombre: 'Emily R.',
  puesto: 'Marketing Director'
},
{
  photo: '/image-thomas.jpg',
  text: 'Sunnyside´s enthusiasm coupled with their keen interest in our brand´s success made it a satisfyng and enjoyable experience.',
  nombre: 'Thomas S.',
  puesto: 'Chief Operating Office'
},
{
  photo: '/image-jennie.jpg',
  text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!.',
  nombre: 'Jennie R.',
  puesto: 'Business Owner'
}]