'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function registration() {

    const [user,setUser] = useState({
        email: '',
        password: ''
    })
    const [userInfo,setUserInfo] = useState([])
    const [message, setMessage] = useState('')
    const router = useRouter()
    const toRegistration = () => {
        router.push('/registration')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:3002/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            const data = await response.json();
            if (!response.ok) {
                console.log(data.message, 'response')
                setMessage(data.message) 
                return
            }
    
            router.push('/profile')

        }catch(error){
            console.error('Error:', error)
        }
    }
    console.log(userInfo)

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
                <div className='flex gap-5 items-center translate-x-[-175%]'>
                    <Image src='/gmail-logo.png' width={10000000} height={100} alt='bg photo' className='w-[35px] h-[35px] invert' />
                    <p className='text-white'>Email</p>
                </div>
                <input type="email" name="email" onChange={handleChange} className={`border-[4px] text-white pl-5 w-[25%] bg-transparent outline-none hover:bg-transparent ${message === 'noemail' ? 'border-red-500 focus:border-red-500' : 'border-white focus:border-yellow-500'}`}  />
                <div className='flex gap-5 items-center translate-x-[-125%]'>
                    <Image src='/padlock.png' width={10000000} height={100} alt='bg photo' className='w-[35px] h-[35px] invert' />
                    <p className='text-white'>Password</p>
                </div>
                <input type="password" name="password" onChange={handleChange} className={`border-[4px] text-white pl-5 w-[25%] bg-transparent outline-none hover:bg-transparent ${message === 'nopass' ? 'border-red-500 focus:border-red-500' : 'border-white focus:border-yellow-500'}`} />
                <div className='flex items-center gap-24'>
                    <button type='submit' className='text-white hover:bg-blue-700 px-4 py-2 rounded-[10px] hover:cursor-pointer'>Submit</button>
                    <p className='text-white hover:text-blue-700 hover:bg-white px-4 py-2 rounded-[10px] hover:cursor-pointer' onClick={toRegistration}>Registration</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default registration