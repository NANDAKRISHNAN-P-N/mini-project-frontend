import React from 'react'
import { Link } from 'react-router-dom'
const Studentlist = () => {
  return (
    <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full mt-4 ml-2 mr-2">
            <thead class="bg-white border-b">
              <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Sl No.
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Student Name
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  View
                </th>
              </tr>
            </thead>
           
          </table>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Studentlist