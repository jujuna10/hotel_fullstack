import React from 'react'
import Image from 'next/image'
import e1 from '../../public/e1.png'
import e2 from '../../public/e2.png'
import e3 from '../../public/e3.png'
import e4 from '../../public/e4.png'
import e5 from '../../public/e1.png'
import e6 from '../../public/e6.png'

import e11 from '../../public/e11.png'
import e22 from '../../public/e22.png'
import e33 from '../../public/e33.png'
import e44 from '../../public/e44.png'
import e55 from '../../public/e55.png'
import e66 from '../../public/e66.png'
import { Playfair_Display } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})



function Explore() {

    const titles = [
        "Quality Room",
        "Private Beach", 
        "Best Accommodation",
        "Wellness & Spa",
        "Restaurants & Bars",
        "Special Offers"
    ];

    const images = [
        e1,
        e2,
        e3,
        e4,
        e5,
        e6
    ]

    const images2 = [
        e11,
        e22,
        e33,
        e44,
        e55,
        e66
    ]

  return (
    <div className='flex flex-col justify-center items-center bg-[rgb(249,242,236)] py-20'>
        <div className='flex justify-center flex-col items-center'>
            <p className='text-red-500 font-bold'>Explore</p>
            <p className={`text-[35px] font-bold ${playfair.className}`}>The Hotel</p>
            <p className='text-red-400 max-w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi harum nemo repellat hic distinctio assumenda.</p>
        </div>
        <div className='grid grid-cols-3 gap-5 w-[55%]'>
            {images.map((item,index) => (
                <div className='bg-white w-[100%] p-5 flex flex-col gap-5'>
                    <div className='flex gap-16'>
                        <Image src={item} width={120} height={120} />
                        <Image src={images2[index]} width={100} height={100} />
                    </div>
                    <p className='text-[20px] font-bold'>{titles[index]}</p>
                    <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex gap-20 items-center'>
                        <p className='text-red-400'>Read More</p>
                        <Image src='/right-down.png' width={35} height={35} className='rotate-[315deg]' />
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Explore