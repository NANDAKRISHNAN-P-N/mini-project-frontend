import React,{ useState } from 'react'
//import { Link } from 'react-router-dom'
import MaterialTable from 'material-table'

//import {Link} from '@material-ui/core'
//import { forwardRef } from 'react'
import axios from 'axios'

const FsView = () => {
  const [tableData,setTableData]=useState([])
  //const [verify,setVerify]=useState([false])
 // let [document,setDocument] = useState()
    const columns=[
      {title:"Document",field:"doc_name"},
      {title:"Category",field:"Activity"},
      {title:"Conducted By",field:"Organizer"},
      {title:"Verify",field:"Status"},
      {title:"Certificate",field:"file_url",
             render:rowData => ( <a href={rowData.file_url}>view</a>)},
      {title:"Points",field:"Points"},
      ]
    

     const calculatePoints = async(e,b) =>{
         e.preventDefault();
         //localStorage.setItem("doc_name",rowData);
         try{
               console.log("Inside calcu");
               // console.log(rowData.doc_name);
             await axios.post("http://localhost:4000/calculateAP",{
               method:'POST',
               batch:localStorage.getItem('Batch'),
               branch:localStorage.getItem('Branch'),
               name:localStorage.getItem("name"),
               year:localStorage.getItem('year'),
               document:b.doc_name,
               headers:{'Content-type':'application/json'}
             }).then((res) =>{
               console.log(res.data.message);
             })
         }catch(error){
           console.log(error);
         }
     }

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
      <MaterialTable title="CERTIFICATE LIST" columns={columns} data={tableData} options={{exportButton:true}}
                 actions={[
                  {
                       icon:'V',
                       tooltip:'Verify and Assign Points',
                       onClick: (calculatePoints)
                  }
                 ]} />
  </div>
  )
}
export default FsView