'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function registration() {

    const [user,setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const router = useRouter()
    const toLogin = () => {
        router.push('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:3002/users/registration',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            console.log('Success')
            router.push('/login')
            setUser({
                name: '',
                email: '',
                password: ''
            })
        }catch(error){
            console.error('Error:', error)
        }
    }

    const handleChange = (e) => {
            const {name,value} = e.target
            setUser(prev => ({
                ...prev,
                [name]: value
            }))
            console.log(user)
        }
    

  return (
    <div className='w-full h-screen'>
        <Image src='/formbg.webp' width={10000000} height={100} alt='bg photo' className='w-full h-full relative opacity-85' />
        <div className='absolute top-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50'>
            <form className='w-full h-screen flex flex-col justify-center items-center gap-5' onSubmit={handleSubmit}>
                <div className='flex gap-5 items-center translate-x-[-110%]'>
                    <Image src='/user.png' width={10000000} height={100} alt='name' className='w-[35px] h-[35px] invert' />
                    <p className='text-white'>User Name</p>
                </div>
                <input type="text" name='name' onChange={handleChange} className='border-[4px] text-white border-white pl-5 w-[25%] bg-transparent outline-none hover:bg-transparent focus:bg-transparent focus:border-yellow-500' />
                <div className='flex gap-5 items-center translate-x-[-175%]'>
                    <Image src='/gmail-logo.png' width={10000000} height={100} alt='email' className='w-[35px] h-[35px] invert' />
                    <p className='text-white'>Email</p>
                </div>
                <input type="email" name="email" onChange={handleChange} className='border-[4px] text-white border-white pl-5 w-[25%] bg-transparent outline-none hover:bg-transparent focus:bg-transparent focus:border-yellow-500' />
                <div className='flex gap-5 items-center translate-x-[-125%]'>
                    <Image src='/padlock.png' width={10000000} height={100} alt='password' className='w-[35px] h-[35px] invert' />
                    <p className='text-white'>Password</p>
                </div>
                <input type="password" name="password" onChange={handleChange} className='border-[4px] text-white border-white pl-5 w-[25%] bg-transparent outline-none hover:bg-transparent focus:bg-transparent focus:border-yellow-500' />
                <div className='flex items-center gap-24'>
                    <button type='submit' className='text-white hover:bg-blue-700 px-4 py-2 rounded-[10px] hover:cursor-pointer'>Submit</button>
                    <p className='text-white hover:text-blue-700 hover:bg-white px-4 py-2 rounded-[10px] hover:cursor-pointer' onClick={toLogin}>Login</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default registration