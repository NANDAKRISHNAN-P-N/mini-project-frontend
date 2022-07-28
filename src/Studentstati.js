import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
//import { MaterialTable } from 'material-table'
const Studentstati = () => {
    const [state, setStae] = useState();
    const columns=[
        { title:"s1No",field:"S1No"},
        { title:"Document Name",field:"Document Name"},
        { title:"Status",field:"Status"},
        { title:"Points", field:"Points"}
    ]
  return (
    <div className='bg-indigo-100 align-center'>
    <div class="flex space-x-2 justify-end mr-5">
      <Link to='/Upload'>
        <button type="button" i class="far fa-upload px-6 pt-2.5 pb-2 mt-4 bg-blue-600 text-white 
               font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700
                hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
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
    <h1 className='text-bold text-2xl text-center'>Your Uploads</h1>
    {/* <MaterialTable title="Student Uploads" 
                  columns={columns} /> */}
    </div>
  )
}

export default Studentstati