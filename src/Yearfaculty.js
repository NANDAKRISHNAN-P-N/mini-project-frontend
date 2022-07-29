import React from 'react'
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Yearfaculty = () => {
    const nav = useNavigate();
    const view1det = (e) =>{
        localStorage.setItem("year",1);
        nav("/Fsview")
    }
    const view2det = (e) =>{
        localStorage.setItem("year",2);
        nav("/Fsview")
    }
    const view3det = (e) =>{
        localStorage.setItem("year",3);
        nav("/Fsview")
    }
    const view4det = (e) =>{
        localStorage.setItem("year",4);
        nav("/Fsview")
    }
  return (
    <div className='bg-indigo-100 min-h-screen flex items-center justify-center '>
    <div class='w-full max-w-max px-10 py-8 mb-60 mt-40 mx-auto bg-white rounded-lg shadow-xl'>
        <div class='max-w-md mx-auto space-y-6'></div>
        
        <div class="flex flex-col"></div>
        <h1 class="mb-3 text-3xl font-extrabold text-center">Choose Year</h1>
      <div class=" text-indigo-100 transition-colors duration-150
       bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg 
        inline-flex items-center justify-center" onClick = { view1det }>1st Year</div>
        <div class=" text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg
         hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center justify-center" onClick={view2det}>2nd Year</div>
        <div class=" text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg
         hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center justify-center" onClick={view3det}>3rd Year</div>
        <div class=" text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg
         hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center justify-center" onClick={view4det}>4th Year</div>
    </div>
     </div>
  )
}

export default Yearfaculty