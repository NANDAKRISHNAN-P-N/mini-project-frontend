import axios from 'axios'
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Resetpass = () => {
      const [ username , setUsername ] = useState()
      const [ password , setPassword ] = useState()
      const [ cpassword , setCpassword] = useState()

      const userid = localStorage.getItem('mgitsid')
      const nav = useNavigate();

      const handleUsername = (e) =>{
        setUsername(e.target.value);
      }
      const handlePassword = (e) =>{
        setPassword(e.target.value);
      }
      const handleCpassword = (e) =>{
        setCpassword(e.target.value);
      }

      const resetPassword = async(e) =>{
        e.preventDefault();
        try{
            console.log(cpassword);
            if(userid === username && password === cpassword ){
                 await axios.patch("http://localhost:4000/resetPassword",{
                    method:'PATCH',
                    username: userid,
                    password: password,
                    cpassword: cpassword,
                    headers:{'Content-type':'application/json'}
           }).then((res) => {
            console.log(res);
            window.alert("Password changed successfully");
            nav('/StudentLogin');
           })
        }else{
            window.alert("Password or Username mismatches");
            console.log("retype password");
        }
        }catch(error){
             console.log(error);
        }
    }
  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div>
            <form>
        <h1 class="text-center text-2xl mb-10 text-gray-600 font-bold font-sans">RESET PASSWORD</h1>
        <div>
        <label>Username</label>
        <input type="text" placeholder='Username' className="border mx-20" onChange = { handleUsername }></input>
        </div>
        <div className="mt-4">
        <label>New Password</label>
        <input type="password" placeholder='New Password' className="border-gray-500 mx-12" onChange = {handlePassword}></input>
        </div>
        <div className="mt-4">
        <label>Confirm Password</label>
        <input type="password" placeholder="Retype Password" className="border-gray-500 mx-6" onChange = {handleCpassword}></input>
        </div>
        <div>
            {/* <Link to='/StudentLogin'> */}
            <button className="h-10 px-5 ml-36 mt-4  text-indigo-100 bg-indigo-700 rounded-full hover:bg-indigo-800"
                      onClick = {resetPassword}>
                Submit
            </button>
            {/* </Link> */}
        </div>
            </form>
        </div>
    </div>
  )
}

export default Resetpass