import React from 'react'
import Image from 'next/image';
import { Playfair_Display } from "next/font/google";
import { Dancing_Script } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})


function Welcome() {
  return (
    <div className='mt-12 flex justify-center'>
        <div>
            <p className='text-red-500 font-bold'>Book Now</p>
            <p className={`text-[35px] max-w-[38%] font-bold ${playfair.className}`}>Most Safe and Rated Hotel In Cairo</p>
            <p className='text-red-400 max-w-[42%]'>Welcome to the best five-star resort hotel in New York. The experience elementum sesue the aucan vestibulum alesun usto in sapien rutrum volutan donec fermen.</p>
            <p className='text-red-400 max-w-[42%]'>Lorem ipsum quisque sodales miss in the varius drana miss turpis softtiton tellus in the fermen.</p>
            <div className='flex gap-5 mt-5 items-center'>
                <button className='bg-[rgb(216,178,141)] duration-200 px-3 py-3 rounded-[5px]'>Discover More</button>
                <p className={`${dancingScript.className}`}>Sara Emilton</p>
            </div>
        </div>
        <div className='flex gap-20'>
            <Image src='/r1.png' width={200} height={250} alt='r1' className='w-[250px] rounded-[5px]' />
            <Image src='/r2.png' width={200} height={250} alt='r2' className='translate-y-[-7%] w-[250px] rounded-[5px]' />
        </div>
    </div>
  )
}

export default Welcome