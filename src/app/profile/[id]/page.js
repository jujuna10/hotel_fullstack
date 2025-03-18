'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ContactTop from '@/components/ContactTop';
import Image from 'next/image';
import Link from 'next/link';

function RoomDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [room, setRoom] = useState(null);
  const [allRooms, setAllRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderForm,setOrderForm] = useState(false)

  const images = [
    { id: 1, level: 'medium', url: '/medium1.jpg' },
    { id: 2, level: 'medium', url: '/medium2.jpg' },
    { id: 3, level: 'medium', url: '/medium3.jpg' },
    { id: 4, level: 'medium', url: '/medium4.jpeg' },
    { id: 5, level: 'medium', url: '/medium5.jpg' },
    { id: 6, level: 'high', url: '/high1.webp' },
    { id: 7, level: 'high', url: '/high2.webp' },
    { id: 8, level: 'high', url: '/high3.jpeg' },
    { id: 9, level: 'high', url: '/high4.jpg' },
    { id: 10, level: 'high', url: '/high5.jpg' },
  ];

  const filteredImages = images.filter(image => image.id !== Number(id));

  const rooms = [
    "Medium size room with a price of 100 and capacity of 2 in Tbilisi. Located in a great area with modern furniture and a beautiful view.",
    "Medium size room with a price of 120 and capacity of 3 in Batumi. Cozy and fully furnished, just a few minutes from the beach.",
    "Medium size room with a price of 150 and capacity of 4 in Kutaisi. Spacious and well-lit, ideal for families or groups.",
    "Medium size room with a price of 130 and capacity of 2 in Tbilisi. Stylish interior with all necessary amenities, close to public transport.",
    "Medium size room with a price of 140 and capacity of 3 in Batumi. Comfortable and well-equipped, near shopping centers and restaurants.",
    "High size room with a price of 200 and capacity of 2 in Kutaisi. Luxury design, large windows, and located in a quiet neighborhood.",
    "High size room with a price of 220 and capacity of 3 in Tbilisi. Modern and elegant, fully furnished, with a balcony overlooking the city.",
    "High size room with a price of 250 and capacity of 4 in Batumi. Premium quality furniture, close to the seaside, perfect for a relaxing stay.",
    "High size room with a price of 230 and capacity of 2 in Kutaisi. Newly renovated, with a comfortable workspace and high-speed internet.",
    "High size room with a price of 240 and capacity of 3 in Tbilisi. Spacious and bright, featuring high-end appliances and security system."
  ];

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3002/rooms/details/${id}`);
        const data = await response.json();

        if (!response.ok) {
          console.error('error');
          return;
        }

        setRoom(data);
        console.log(data, 'data');
      } catch (error) {
        console.error('error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRoomDetails();
    }
  }, [id]);

  useEffect(() => {
    const fetchAllRooms = async () => {
      try {
        const response = await fetch('http://localhost:3002/rooms/allroom');
        const data = await response.json();

        if (!response.ok) {
          console.error('error');
          return;
        }

        setAllRooms(data);
        console.log(data, 'allrooms');
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchAllRooms();
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!room) {
    return <div>room not found</div>;
  }

  const filtered = allRooms ? allRooms.filter(room => room.id !== id) : [];
  console.log(filtered, 'filtered');

  console.log(room[0],'room0')
  console.log(room,'room')

  return (
    <div className='w-full'>
      <ContactTop />
      <div className='flex gap-20'>
        <div className='max-w-4xl mx-auto p-6'>
          <h1 className='text-3xl font-bold mb-4'>{room[0]?.location} - {room[0]?.level} Room type</h1>
          
          <div className='mb-6'>
            <img src={images[id - 1].url} alt={`${room[0]?.location} room`} width={20} height={20} className='w-full h-96 object-cover rounded-lg' />
          </div>
          
          <div className='bg-gray-100 p-6 rounded-lg'>
            <div className='flex justify-between mb-4'>
              <p className='text-2xl font-semibold'>{room[0]?.price}$ / Night</p>
              <p className='text-xl'>{room[0]?.level} type</p>
            </div>
            
            <div className='mb-6'>
              <h2 className='text-xl font-bold mb-2'>Room details</h2>
              <p>Location: {room[0]?.location}</p>
              <p>Type: {room[0]?.level}</p>
              <p>Kv: {room[0]?.id * 10 + 20}</p>
            </div>
            
            <div className='mb-6'>     
              <h2 className='text-xl font-bold mb-2'>Description</h2>
              <p>{rooms[id]}</p>
            </div>
            
            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full' onClick={() => setOrderForm(!orderForm)}>Order</button>
          </div>
        </div>
        <div className='w-[25%]'>
          {allRooms && (
            filteredImages.map((image, index) => {
              const roomInfo = filtered[index];
              if (!roomInfo) return null;
              return (
                <div key={index} className='flex items-center gap-12 bg-gray-200 my-5 w-[80%] py-5 rounded-[20px] px-5'>
                  <Image src={image.url} alt='room' width={200} height={200} />
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <p>{image.level}</p>
                    <p>{roomInfo.price}$</p>
                    <Link href={`/profile/${roomInfo.id}`} className='w-full flex justify-center'>
                      <button className='bg-blue-600 text-white px-6 py-1 rounded-lg hover:bg-blue-700 w-full'>Order</button>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {orderForm && (
        <div className='absolute top-[50%] right-[50%] w-full h-screen'>
          <form className='flex flex-col gap-2 bg-black w-full h-screen'>
            <input type='date' placeholder='order duration' />
            <input type='number' placeholder='peoples' className='border-[4px] text-white border-white pl-5 w-[25%] bg-transparent outline-none hover:bg-transparent focus:bg-transparent focus:border-yellow-500'></input>
            <input type='number' placeholder='days' className='border-[4px] text-white border-white pl-5 w-[25%] bg-transparent outline-none hover:bg-transparent focus:bg-transparent focus:border-yellow-500'></input>
          </form>
        </div>
      )}
      
    </div>
  );
}

export default RoomDetailPage;