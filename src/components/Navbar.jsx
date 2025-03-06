'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const navbarItem = [
        'Home',
        'About',
        'Our Rooms',
        'Facility',
        'Blog',
        'Contact'
    ]

    const router = useRouter()
    const handleClick = () => {
        router.push('/registration')
    }
    const login = () => {
        router.push('/login')
    }

    return (
        <div className='absolute top-11 w-full'>
            <div className='absolute inset-0 bg-[rgba(100,67,35,0.8)] blur-sm'></div>

            <div className='relative flex justify-around items-center gap-12 text-white pb-7 mt-5'>
                <div className='flex justify-center gap-12'>
                    {navbarItem.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                <div className='flex gap-12 group'>
                    <button className='bg-[rgb(216,178,141)] px-3 py-3 rounded-[5px] duration-200 group-hover:bg-transparent' onClick={handleClick}>Register</button>
                    <button className='hover:bg-[rgb(216,178,141)] duration-200 px-3 py-3 rounded-[5px]' onClick={login}>Login</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
