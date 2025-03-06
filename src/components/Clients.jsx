import React from 'react'
import Image from 'next/image';
import star from '../../public/star.png'

import { Playfair_Display } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})



function Clients() {

    const names = ["John Smith", "Emily Johnson", "Michael Brown"];
    const reviews = [
    "The hotel was amazing! Clean rooms, friendly staff, and a great location near the city center. I had a wonderful experience and would definitely stay here again. Highly recommend to anyone visiting!",
    "Overall, a nice stay. The room was spacious, and the staff was helpful. However, the breakfast options were limited, and the Wi-Fi was slow. Still, a decent choice for a short visit to the city.",
    "A pleasant experience! The bed was very comfortable, and the service was excellent. The hotel is close to many attractions, making it easy to explore. I would book this hotel again without hesitation."
    ];

    const stars = [star, star, star, star, star];
    const people = ['/m1.jpg','/w1.jpg','/m2.jpg']


  return (
    <div className='flex flex-col justify-center gap-16 items-center py-20'>
        <div className='flex justify-center flex-col items-center gap-5'>
            <p className='text-red-500 font-bold'>Testemonials</p>
            <p className={`text-[35px] font-bold ${playfair.className}`}>What Our Clients Says</p>
            <p className='text-red-400 max-w-[65%] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione omnis ducimus perferendis, porro tempore iste.</p>
        </div>
        <div className='flex gap-12 w-[70%]'>
            {names.map((item,index) => (
                <div key={index} className='flex flex-col gap-7 bg-[rgb(249,242,236)] px-5 py-5'>
                    <div className='flex gap-5 items-center'>
                        <Image src={people[index]} alt='client' width={10000000000} height={85} className='rounded-[50%] w-[80px] h-[85px]' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[25px] font-bold'>{item}</p>
                            <p>Client</p>
                        </div>

                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            {stars.map((item, index) => (
                                <Image key={index} src={item} alt='star' width={25} height={25} />
                            ))}
                        </div>
                        <p className='text-gray-800'>{reviews[index]}</p>
                    </div>


                </div>

            ))}
        </div>
    </div>
  )
}

export default Clients