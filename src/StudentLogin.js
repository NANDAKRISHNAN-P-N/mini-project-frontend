import { Link } from 'react-router-dom';
import React from 'react'
const StudentLogin = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='bg-gray-900 flex flex-cols justify-center'>
            <form className='max-w-[400] w-full mx-auto bg-gray-400 p-4'>
                <h2 className='text-4xl font-bld text-center py-6'>Login</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>
                Sign in
                </button>
                <div className='flex justify-between'>
                    <a className='flex-items-center'>Forgot Password!</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default StudentLogin;