import React from 'react'
import Header from './Header'
const Home = () => {
  return (
    // <div className="w-screen h-screen flex items-center justify-between px-20 bg-stone-500">
    //   <div className="w-full content-start">
    //     <Header/>
    //   </div>
       
    //     <div className="h-64 flex-items-center justify-between px-20 py-20 rounded-md bg-amber-500 ">
    //        <h1 className="text-3xl text-center text-blue-800 font-bold underline ">
    //                ACTIVITY POINT MANAGEMENT SYSTEM
    //        </h1>
    //     </div>
    // </div>
    <div className="h-screen flex justify-center  bg-gray-600">
      <div className="mt-5">
      <Header/>
      </div>
      <div className="flex justify-center items-center mt-36 h-64 rounded-md bg-blue-500">
        <h1 className="text-3xl text-center text-blue-800 font-bold underline">
        ACTIVITY POINT MANAGEMENT SYSYTEM </h1>
      </div>
    </div>
  )
}

export default Home;