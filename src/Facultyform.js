import axios from 'axios';
import { React, useState }from 'react'
import { useNavigate } from 'react-router-dom';

const Facultyform = () => {
    const [batch,setBatch] = useState();
    const [branch,setBranch] = useState();
    const nav = useNavigate();
    const handleBatch = (e) =>{
      setBatch(e.target.value);
    }
    const handleBranch = (e) =>{
      setBranch(e.target.value);
    }
    const filterStudents = async(e) =>{
    try{
             nav('/Studentlist');
             await axios.post("http://localhost:4000/filterStudents",{
               method:'POST',
               batch: batch,
               branch: branch,
               headers:{'Content-type': 'application/json'}
             }).then((res) => {
                  console.log(res,res.data.message,res.data.data);
             })
    } catch(error){
         console.log(error);
    }     
    }
  return (
    <div class="h-screen bg-indigo-100 flex justify-center items-center">
    <div class="lg:w-2/5 md:w-1/2 w-2/3">
      
    <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">FILTER</h1>
   <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Batch</label> 
   <select className=" w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8
                 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                 onChange = { handleBatch }>
    <option>--Select Batch</option>
    <option>2018-22</option>
    <option>2019-23</option>
    <option>2020-24</option>
    <option>2021-25</option>
    <option>2022-26</option>
    <option>2023-27</option>
  </select>
  <label for="Branch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Branch</label>
  <select className=" w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 
               rounded shadow leading-tight focus:outline-none focus:shadow-outline"
               onChange = { handleBranch }>
    <option>--Select Branch</option>
    <option>Electronics and Communication Engineering</option>
    <option>Electrical and Electronics Engineering</option>
    <option>Civil Engineering</option>
    <option>Mechanical Engineering</option>
    <option>Computer Science and Engineering</option>
    <option>Computer Science and Engineering A</option>
    <option>Computer Science and Engineering B</option>
    <option>Computer Science and Engineering Artificial Intelligence</option>
    <option>Artificial Intelligence and Data Science</option>
  </select>
  <button class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg
            hover:bg-indigo-800" onClick={ filterStudents }>
            Search</button>
</div>
</div>
 )
}

export default Facultyform