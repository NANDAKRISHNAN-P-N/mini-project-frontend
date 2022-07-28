import React,{ useState } from 'react'
//import { Link } from 'react-router-dom'
import MaterialTable from 'material-table'
import axios from 'axios'

const FsView = () => {
  const [tableData,setTableData]=useState([])
    const columns=[
      {title:"Document",field:"doc_name"},
      {title:"Category",field:"Activity"},
      {title:"Conducted By",field:"Organizer"},
      {title:"Verify",field:"Status"},
      {title:"Points",field:"Points"},
      ]

    const getDetails = async(e) =>{
        try{
               await axios.post("http://localhost:4000/fetchUploads",{
                 method:'POST',
                 batch:localStorage.getItem("Batch"),
                 branch:localStorage.getItem("Branch"),
                 name:localStorage.getItem("name"),
                 year:localStorage.getItem("year"),
                 headers:{'Content-type':'application/json'}
               }).then((res) =>{
                   setTableData(res.data.data);
                   console.log(res,res.data.message,res.data.data);
               })
        }catch(error){
                 console.log(error);
        }
    }
  return (
  <div>
    <div class="flex space-x-2 justify-center ">
        <button className=" mt-2 bg-indigo-800 hover:bg-indigo-500 text-white font-semibold hover:text-white py-2 px-10  border border-blue-500 hover:border-transparent rounded"
                   onClick={ getDetails }>
        View List
      </button>
    </div>
      <MaterialTable title="CERTIFICATE LIST" columns={columns} data={tableData} />
  </div>
  )
}
export default FsView