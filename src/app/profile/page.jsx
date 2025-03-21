'use client'
import ContactTop from '@/components/ContactTop'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

function page() {

  const [roomsData,setRoomsData] = useState([])




  const images = [
    { level: 'medium', url: '/medium1.jpg' },
    { level: 'medium', url: '/medium2.jpg' },
    { level: 'medium', url: '/medium3.jpg' },
    { level: 'medium', url: '/medium4.jpeg' },
    { level: 'medium', url: '/medium5.jpg' },
    { level: 'high', url: '/high1.webp' },
    { level: 'high', url: '/high2.webp' },
    { level: 'high', url: '/high3.jpeg' },
    { level: 'high', url: '/high4.jpg' },
    { level: 'high', url: '/high5.jpg' },
  ];
  
  

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch('http://localhost:80/rooms', {
          method: 'GET',
        });
  
        const data = await response.json();

        if (!response.ok) {
          console.log(data.message, 'response');
          return;
        }

        setRoomsData(data);
        } catch (error) {
        console.error('Error:', error);
      }
    };
  
    loginUser();
  }, []);

  console.log(roomsData)
  



  return (
    <div className='w-full h-screen'>
        <ContactTop />
        <div className='flex'>
          <div className='w-[17%] h-screen bg-gray-400 flex flex-col gap-12 pl-5 pt-5'>
            {/* left */}
            <div className='flex flex-col gap-2'>
              <p className='text-[20px]'>Room type</p>
              <p>Medium Level</p>
              <p>High Level</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px]'>Location</p>
              <p>Tbilisi</p>
              <p>Batumi</p>
              <p>Kutaisi</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px]'>price</p>
              <p>Under 200</p>
              <p>Up 200</p>
            </div>
          </div>
          <div className='w-[83%] pl-12 pt-12 grid grid-cols-4'>
            {/* right */}
            {roomsData.map((room, index) => (
              <div key={index} className='w-[80%] h-[95%] bg-gray-200 flex flex-col items-center pt-5 rounded-[20px]'>
                <img src={images[index]?.url || ''} alt='rooms' className='object-cover w-[90%] h-[80%] rounded-[20px]' />
                <div className='flex gap-5'>
                  {room ? <p>{room.price}$</p> : <p></p>}
                  {room ? <p>{room.level}</p> : <p></p>}
                  {room ? <p>{room.location}</p> : <p></p>}
                </div>
                {room && (
                  <Link href={`/profile/${room.id}`} className='w-full flex justify-center'>
                    <button className='hover:bg-blue-600 hover:text-white px-5 py-2 rounded-[20px]'>Order</button>
                  </Link>
                )}
              </div>  
            ))}
          </div>
        </div>
    </div>
  )
}

export default page