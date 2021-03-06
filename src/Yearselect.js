//import axios from 'axios'
import { React } from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import { data } from 'autoprefixer';

const Yearselect = () => {
  const nav = useNavigate()
  const logout=()=>{
    localStorage.removeItem("mgitsid")
    localStorage.removeItem("year")
    nav("/StudentLogin")
  }
  
  //const [details, setDetails] = useState([]);
  const setFirstyear = (e) =>{
    localStorage.setItem("year",1);
    nav('/Studentstat');
  }
  const setSecondyear = (e) =>{
    localStorage.setItem("year",2);
    nav('/Studentstat');
  }
  const setThirdyear = (e) =>{
    localStorage.setItem("year",3);
    nav('/Studentstat');
  }
  const setFourthyear = (e) =>{
    localStorage.setItem("year",4);
    nav('/Studentstat');
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
      <div class=" text-indigo-100 transition-colors duration-150
       bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg 
        inline-flex items-center justify-center" onClick = { setFirstyear }>1st Year</div>
        <div class=" text-indigo-100 transition-colors duration-150
         bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg 
         inline-flex items-center justify-center" onClick = { setSecondyear }>2nd Year</div>
        <div class=" text-indigo-100 transition-colors duration-150
         bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg 
         inline-flex items-center justify-center" onClick = { setThirdyear }>3rd Year</div>
        <div class=" text-indigo-100 transition-colors duration-150 bg-indigo-700 
        rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg inline-flex items-center 
        justify-center" onClick = { setFourthyear }>4th Year</div>
    </div>
     </div>
    </div>
  )
}

export default Yearselect