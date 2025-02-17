import React from 'react'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

function HeroText() {
  return (
    <div className='absolute top-[22%] left-[35%] flex flex-col gap-5'>
        <h1 className={`text-white text-[65px] max-w-[50%] font-bold ${playfair.className}`}>Enjoy A Luxuary Experience</h1>
        <p className='max-w-[55%] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit laboriosam tenetur facere? Velit laborum, ipsa officia facere distinctio id amet optio eum voluptate saepe et hic deleniti, possimus autem.</p>
        <div className='flex gap-20 group'>
            <button className='hover:bg-[rgb(216,178,141)] duration-200 px-3 py-3 rounded-[5px] border-[1px] border-white hover:border-none text-white'>Discover More</button>
            <button className='bg-[rgb(216,178,141)] px-3 py-3 rounded-[5px] duration-200 group-hover:bg-transparent text-white'>Book Now</button>
        </div>
    </div>
  )
}

export default HeroText