import React from 'react'
import Image from 'next/image'
import fb from '../../public/fb.png'
import twitter from '../../public/twitter.png'
import youtube from '../../public/youtube.png'
import instagram from '../../public/instagram.png'


function ContactTop() {

  const images = [fb,twitter,youtube,instagram,]  

  return (
    <div className='flex justify-around bg-[rgb(101,66,34)] py-3'>
        <div className='flex gap-2 items-center'>
            <Image src='/clock.png' width={20} height={20} alt='clock' className='invert' />
            <p className='text-white'>Mon - Fri: 9:00 - 19:00/closed o Weekend</p>
        </div>
        <div className='flex gap-2 items-center'>
          <Image src='/phone.png' width={20} height={20} alt='phone' className='invert' />
          <p className='text-white'>+201 123456789</p>
        </div>
        <div className='flex gap-5'>
          {images.map((item,index) => (
            <Image key={index} src={item} width={30} height={30} alt='social media' className='w-[20px] h-[20px] invert' />
          ))}
        </div>

    </div>
  )
}

export default ContactTop