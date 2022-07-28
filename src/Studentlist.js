import React,{ useState } from 'react'
//import { Link } from 'react-router-dom'
//import {Link} from '@material-ui/core'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MaterialTable from 'material-table'
const Studentlist = () => {
  const nav= useNavigate();
  const [tableData,setTableData]=useState([])
  
    const columns=[
      {title:"SlNo.",field:"slno"},
      {title:"StudentName",field:"name"},
      {title:"View",field:"view", render: rowData =>(<button onClick = { toyear }>view</button>)},
      ]

      const toyear = (e) =>{
        localStorage.setItem("name",rowData.StudentName);
        nav('/Yearfaculty')
      }

      const filterStudents = async(e) =>{
        try{
                 await axios.post("http://localhost:4000/filterStudents",{
                   method:'POST',
                   batch: localStorage.getItem('Batch'),
                   branch: localStorage.getItem('Branch'),
                   headers:{'Content-type': 'application/json'}
                 }).then((res) => {
                      setTableData(res.data.data);
                      //localStorage.setItem("name",res.data.data[0].name);
                      console.log(res,res.data.message,res.data.data);
                 })
        } catch(error){
             console.log(error);
        }     
        }
  return (
  <div>
    <div class="flex space-x-2 justify-center ">
        <button className=" mt-2 bg-indigo-800 hover:bg-indigo-500 text-white font-semibold hover:text-white py-2 px-10  border border-blue-500 hover:border-transparent rounded"
                           onClick={filterStudents}>
        View List
      </button>
    </div>
    <MaterialTable title="STUDENT LIST" columns={columns} data={tableData} />
  </div>
  )
}
export default Studentlist