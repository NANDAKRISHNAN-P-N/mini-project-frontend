import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Yearselect = () => {
  const nav = useNavigate()
  const logout=()=>{
    localStorage.removeItem("mgitsid")
    nav("/StudentLogin")
  }
  

  return(

    <div className ='min-h-screen bg-indigo-100'>
    
      <Link to='/Resetpass'>
        <button className="w-41 py-2 px-5 mt-2 ml-2 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"> Reset Password 
        </button>
        </Link>
        <button className=" rounded-2xl bg-gray-800 hover:bg-gray-500 text-white" onClick={logout}> logout
       </button>
        <div className='flex items-center justify-center '>
    <div class='w-full max-w-max px-10 py-8 mb-60 mt-40 mx-auto bg-white rounded-lg shadow-xl'>
        <div class='max-w-md mx-auto space-y-6'></div>
        
        <div class="flex flex-col"></div>
        <h1 class="mb-3 text-3xl font-extrabold text-center">Choose Year</h1>
      <Link to="/Studentstat">       
      <div class=" text-indigo-100 transition-colors duration-150
       bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg 
        inline-flex items-center justify-center">1st Year</div>
        </Link> 
        <Link to="/Studentstat">
        <div class=" text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center justify-center">2nd Year</div>
        </Link>
        <Link to="/Studentstat">
        <div class=" text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center justify-center">3rd Year</div>
        </Link>
        <Link to="/Studentstat">
        <div class=" text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center justify-center">4th Year</div>
        </Link>
    </div>
     </div>
    </div>
  )
}

export default Yearselect