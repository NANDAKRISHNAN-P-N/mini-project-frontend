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
      <div class='flex items-end justify-end space-y-2'>
        <div>
      <Link to='/Resetpass'>
        <button className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Reset Password 
        </button>
        </Link>
        </div>
        <div>
        <button className="ml-2 mr-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-500 hover:border-transparent rounded" onClick={logout}>
        logout
       </button>
       </div></div>
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