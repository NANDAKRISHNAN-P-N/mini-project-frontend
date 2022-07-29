//import { Link } from 'react-router-dom';
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
    <div className='w-screen bg-indigo-100 flex items-center justify-center h-screen'>
        <div className='w-96 rounded-md h-96 bg-white'>
        <form className='w-96 mx-auto bg-white p-4' method='GET'>
                <h2 className='text-3xl text-center md:text-4xl font-extrabold mb-8'>Login</h2>
                <div className='block mb-2 font-extrabold'>
                    <label>Username</label>
                    <input className='inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded' type="text"  onChange={handleInputs} />
                </div>
                <div className='block mb-2 font-extrabold'>
                    <label>Password</label>
                    <input className='inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded'  type="password"  onChange={handlePassword} />
                </div>
                <button className='inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200' onClick = { Loginnow }>
                Sign In
                </button>
                </form>
        </div>

    </div>
  )
}
export default StudentLogin