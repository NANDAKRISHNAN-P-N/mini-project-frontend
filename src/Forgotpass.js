import React from 'react'
import {Link } from 'react-router-dom'
const Forgotpass = () => {
  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div>
            <form>
        <h1 class="text-center text-2xl mb-10 text-gray-600 font-bold font-sans">FORGOT PASSWORD?</h1>
        <div>
        <label>Username</label>
        <input type="text" placeholder='Username' className="border mx-20"></input>
        </div>
        <div className="mt-4">
        <label>Email</label>
        <input type="text" placeholder='Email' className="border-gray-500 mx-28"></input>
        </div>
        <div>
            <Link to='/StudentLogin'>
            <button className="h-10 px-5 ml-36 mt-4  text-indigo-100 bg-indigo-700 rounded-full hover:bg-indigo-800">
                Send new password
            </button>
            </Link>
        </div>
            </form>
        </div>
    </div>
  )
}

export default Forgotpass