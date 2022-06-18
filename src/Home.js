import React from 'react'
import Header from './Header'
const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-between px-20 bg-stone-500">
      
       <Header/>
        <div className="h-64 flex-items-center justify-between px-20 py-20 rounded-md bg-amber-500 ">
           <h1 className="text-3xl text-center text-blue-800 font-bold underline ">
                   ACTIVITY POINT MANAGEMENT SYSTEM
           </h1>
        </div>
    </div>
  )
}

export default Home;