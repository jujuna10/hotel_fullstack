import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import HeroText from './HeroText'

function HeroSection() {
  return (
    <div className='w-full h-screen'>
         <Image src='/mainphoto.jpg' width={10000000} height={11000000000} className='w-full h-[80%]' />
         <Navbar />
         <HeroText />
    </div>
  )
}

export default HeroSection