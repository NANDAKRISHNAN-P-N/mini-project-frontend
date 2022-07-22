import { Link } from 'react-router-dom';
import { React, useState }from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { data } from 'autoprefixer';
const StudentLogin = () => {
       const navigate = useNavigate();
       const [username , setUsername] = useState();
       const [password , setPassword] = useState();
       let value;

       const handleInputs =(e) =>{
        value = e.target.value;
        setUsername(value);
       }
       const handlePassword =(e) =>{
          value = e.target.value;
           setPassword(value);
       }
       const Loginnow = async (e) =>{
         e.preventDefault();
         const user  = username;
         const passkey = password;
         data = {
            "username":user,
            "password":passkey
        }
        try{ 
            await axios.post("http://localhost:4000/Login",data).then((res)=>{
            console.log(data,res,res.status)
            console.log(res.data.userid)
            localStorage.setItem("mgitsid",res.data.userid)
            if(res.data.status === "SUCCESS" ){
                    window.alert("Login Successful");
                    console.log(res.data.message);
                    if(res.data.role === "Faculty"){
                        navigate("/Facultyform");
                    }else if(res.data.role === "Student"){
                        navigate("/Yearselect");
                    }else{
                        console.log("error");
                    }
                  }else if(res.data.status==="FAILED"){
                    console.log("Invalid username or password")
                    window.alert("Invalid username or password")
                }
        })
    }catch(error){
        if(error.response.status===400){
            console.log("Invalid username or password")
            window.alert("Invalid username or password")
        }
    }
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='bg-gray-900 flex flex-cols justify-center'>
            <form className='max-w-[400] w-full mx-auto bg-gray-400 p-4' method='GET'>
                <h2 className='text-4xl font-bld text-center py-6'>Login</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text"  onChange={handleInputs} />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2'  type="password"  onChange={handlePassword} />
                </div>
                {/* <Link to='/YearSelect'> */}
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white' onClick = { Loginnow }>
                    {/* <input type='submit' name='signin' id='signin' value='signin' 
                    onClick = { Loginnow }>

                    </input> */}
                Sign In
                </button>
                {/* </Link> */}
                <div className='flex justify-between'>
                    <Link to='/Forgotpass'>
                        <label className="text-underline">Forgot Password??</label>
                    </Link>
                </div>
            </form>
        </div>
        <form className='max-w-[400] w-96 mx-auto bg-gray-400 p-4' method='GET'>
            <div class="mb-6">
                <label class="block mb-2 font-extrabold" for="">Username</label>
                <input className='inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded' type="text"  onChange={handleInputs} />
            </div>
            <div class="mb-6">
                <label class="block mb-2 font-extrabold" for="">Password</label>
                <input className='inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded' type="password" />
            </div>
            {/* <Link to='/YearSelect'> */}
            <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200" onClick = { Loginnow }>
                {/* <input type='submit'>
                 </input> */}
            Sign in
            </button>
            {/* </Link> */}
            <div className='flex justify-between'>
                <Link to='/Forgotpass'>
                    <label className="w-full lg:w-auto px-4"><a class="inline-block font-extrabold hover:underline" href="#">Forgot Password?</a></label>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default  StudentLogin ;