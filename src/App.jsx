import React from 'react'
import Creative from './components/creative'
import Transform from './components/transform'
import Stand from './components/stand'
import Fruits from './components/fruits'
import Testimonials from './components/testimonials'
import Image from './components/image'
import Footer from './components/footer'
import Header from './components/header'
import './index.css'

export default function hola() {
  return (
    <div>
      <Header />
      <Creative />
      <Transform />
      <Stand />
      <Fruits />
      <Testimonials />
      <Image />
      <Footer />
    </div>
  )
}