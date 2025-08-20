import React from 'react'
import {Link} from 'react-router-dom'
const Welcome = () => {
  return (
    <div className='max-h-screen flex flex-col items-center justify-center space-y-4 p-10'>
        <h1 className=' text-3xl justify-center font-poppins text-center md:text-5xl'>Welcome to GIF World✨</h1>
        <p className=' text-center text-2xl md:text-3xl font-Bungee text-white'>Search Your Funny Gif's</p>
        <Link to='/App' className='bg-orange-600 rounded font-poppins md:text-2xl mt-4 px-4 py-2 text-white shadow-orange-300
        transform hover:scale-110 duration-150'>Lets Search</Link>
    </div>
  )
}

export default Welcome
