import { Link } from 'react-router-dom';
import { React, useState }from 'react'
import { useNavigate } from 'react-router-dom';
const StudentLogin = () => {
       const navigate = useNavigate();
       const [username , setUsername] = useState({
         username: " ",password: " "
       });

       let name,value;

       const handleInputs =(e) =>{
        name = e.target.username;
        value = e.target.value;
        console.log(value);
        setUsername({ ...username, [name]:value});
       }
      const Loginnow = async (e) =>{
         e.preventDefault();
         const [ user , password ] = username;
         const res = await fetch('/Login', {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user, password
            })
         });
        //   const data = await res.json();
          if(res.status === "SUCCESS" ){
            window.alert("Login Successful");
            console.log("Successfull Login");
            if(res.role === "Faculty"){
                navigate.push("/Yearselect");
            }else if(res.role === "Student"){
                navigate.push("/Yearselect");
            }else{
                console.log("error");
            }
          }else{
            window.alert("Log");
            console.log("Successful Login");
            

          }
      }
    //   const Login=(e)=>{
    //     e.preventDefault()
    //     setLoading(true)
    //     const data ={
    //         username:document.getElementById("username").value,
    //         password:document.getElementById("password").value
    //     }
    //     axios.post("/Login",data)
    //     .then((response)) => {
    //         setLoading(false)
    //         if()
    //     }
    //   }
  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
    <div className="container px-4 mx-auto">
         <div class="text-center mb-8">
            <h2 className='text-3xl md:text-4xl font-extrabold mb-2'>Login</h2>
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
</div>
  )
}

export default StudentLogin;