import React,{ useState } from 'react'
//import { Link } from 'react-router-dom'
import MaterialTable from 'material-table'
const Studentlist = () => {
  const [tableData,setTableData]=useState([])
    const columns=[
      {title:"SlNo.",field:"slno"},
      {title:"Student Name",field:"name"},
      {title:"View",field:"view"},
      ]
  return (
  <div>
    <div class="flex space-x-2 justify-center ">
        <button className=" mt-2 bg-indigo-800 hover:bg-indigo-500 text-white font-semibold hover:text-white py-2 px-10  border border-blue-500 hover:border-transparent rounded">
        View List
      </button>
    </div>
    <MaterialTable title="STUDENT LIST" columns={columns} data={tableData} />
  </div>
  )
}
export default Studentlist