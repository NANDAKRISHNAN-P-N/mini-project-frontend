import React,{ useState } from 'react'
//import { Link } from 'react-router-dom'
import MaterialTable from 'material-table'
import {Link} from '@material-ui/core'
import axios from 'axios'

const Studentstat = () => {
  const [tableData,setTableData]=useState([])
    const columns=[
      {title:"SlNo.",field:"rowData.tableData.id"},
      {title:"Document",field:"doc_name"},
      {title:"View", field:"file_url",
            render: rowData=> ( <a href={rowData.file_url}>view</a>)},
      {title:"Status",field:"Status"},
      {title:"Points",field:"Points"},
      ]
      
      const userid = localStorage.getItem('mgitsid')
      const year = localStorage.getItem('year')
      const fetchYear = async(e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:4000/fetchFirstyear", {
              method:'POST',
              student: userid,
              year : year,
              headers:{'Content-type': 'application/json'}
            }).then((res) => {
                setTableData(res.data.data);
                console.log(res,res.status);
            })
        }catch(error){
            console.log("inside catch not fetched");
            console.log(error);
        }
      }

  return (
  <div>
    <div class="flex space-x-2 justify-center ">
        <button className=" mt-2 bg-indigo-800 hover:bg-indigo-500 text-white font-semibold hover:text-white py-2 px-10  border border-blue-500 hover:border-transparent rounded" onClick = { fetchYear }>
        View List
      </button>
    </div>
     <div class="flex space-x-2 justify-end mr-5">
    <Link to='/Upload'>
    <button type="button" i class="far fa-upload px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="far fa-upload"
        class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor"
          d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
        </path>
      </svg>
      Upload
    </button>
    </Link>
  </div>
    <MaterialTable title="CERTIFICATE LIST" columns={columns} data={tableData} />
  </div>
  )
}
export default Studentstat