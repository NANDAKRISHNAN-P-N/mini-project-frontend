import React from 'react'
import { Link } from "react-router-dom"
import image1 from './Background.jpg';
const Home = () => {
  return (
    <section class="h-screen bg-indigo-300">
    <div class="flex h-full w-full items-center justify-center container mx-auto px-8">
      <div>
    <img src={image1}/>
    </div>
      <div class="max-w-2xl text-center">
        <h1 class="text-3xl text-center text-blue-800 font-serif font-semibold tracking-wider">ACTIVITY  POINT  MANAGEMENT  SYSTEM</h1>
  
        <p class="mt-6 lg:text-sm text-blue-600">Manage all your college activity points under one roof</p>
  
        <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <Link to='/StudentLogin'>
          <button class="italic transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Get started</button>
          </Link>
         </div>
      </div>
    </div>
    
  </section>
  )
}

export default Home;