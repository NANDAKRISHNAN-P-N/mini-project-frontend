import React from 'react'

const Yearselect = () => {
  return ( 
    <div className="h-screen bg-gray-400 flex flex-col">
    <div className="bg-indigo-600 mt-10 h-10">
       <button className=" rounded-2xl bg-gray-800 hover:bg-gray-500 text-white"> Reset Password 
       </button>
    </div>
    <div className="grid grid-cols-2 gap-4 content-around px-64 mt-24">
        <div className="flex flex-col justify-center bg-gray-600 h-48 w-96 text-5xl px-20 rounded-2xl">Ist Year</div>
        <div className="flex flex-col justify-center bg-gray-600 h-48 w-96 text-5xl px-20 rounded-2xl">2nd Year</div>
        <div className="flex flex-col justify-center bg-gray-600 h-48 w-96 text-5xl px-20 rounded-2xl">3rd Year</div>
        <div className="flex flex-col justify-center bg-gray-600 h-48 w-96 text-5xl px-20 rounded-2xl">4th Year</div>
    </div>
    </div>
  )
}

export default Yearselect