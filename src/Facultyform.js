import { React, useState }from 'react'
import { useNavigate } from 'react-router-dom';

const Facultyform = () => {
  const nav = useNavigate()
  const logout = (e) => {
    localStorage.removeItem("mgitsid");
    localStorage.removeItem("Batch");
    localStorage.removeItem("Branch");
    localStorage.removeItem("name");
    localStorage.removeItem("year");
    localStorage.removeItem("doc_name");
    nav('/StudentLogin');
  }
    const [batch,setBatch] = useState();
    const [branch,setBranch] = useState();
    
    const handleBatch = (e) =>{
      setBatch(e.target.value);
      localStorage.setItem("Batch",e.target.value);
    }
    const handleBranch = (e) =>{
      setBranch(e.target.value);
      localStorage.setItem("Branch",e.target.value);
    }
    const filter = (e) =>{
      nav('/Studentlist');
    }
  return (
    <div class="h-screen flex flex-col items-center justify-center w-screen bg-indigo-100">
      <button className="absolute right-2 top-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  border border-blue-500 hover:border-transparent rounded" onClick={logout}>
        logout
      </button>
      <div class="flex h-auto w-screen justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">FILTER</h1>
          <label for="Branch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Batch</label>
          <select class=" w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                          onChange = { handleBatch }>

            <option>2018-22</option>
            <option>2019-23</option>
            <option>2020-24</option>
            <option>2021-25</option>
            <option>2022-26</option>
            <option>2023-27</option>
          </select>
          <label for="Branch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Branch</label>
          <select class=" w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange = { handleBranch }>

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
            <button class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800"
                           onClick = { filter }>Search</button>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          </div>
        </div>
      </div>
    </div>
 )
}
 export default Facultyform