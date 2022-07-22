import React from 'react'

const data={
  ActivityHead:[
    {
      name:"National Initiatives",
      Activity:[
        {
          name:"NSS",
          Position:["C Certification","Best NSS Volunteer","Pre REpublic Day Camp","Republic Day Camp"]
        },
        {
          name:"NCC",
          Position:["C Certification","Pre REpublic Day Camp","Republic Day Camp"]
        }
      ]
    },
    {
      name:"Sports and Games",
      Activity:[
        {
          name:"Sports",
          Position:["1","2","3","Participation"]
        },
        {
          name:"Games",
          Position:["1","2","3","Participation"]
        }
      ]
    },
    {
      name:"Cultural Activities",
      Activity:[
        {
          name:"Music",
          Position:["1","2","3","Participation"]
        },
        {
          name:"Performing Arts",
          Position:["1","2","3","Participation"]
        },
        {
          name:"Literary Arts",
          Position:["1","2","3","Participation"]
        }
      ]
    },
    {
      name:"Proffessional Self Initiatives",
      Activity:[
        {
          name:"Tech Fest" ,
          Position:["Certificate Of Participation"]
        },
        // {
        //   name:["Tech Fest", "Tech Quiz", "MOOC","Competion conducted by Proffessional Scieties","Attending Conference",
        //        "Attending Seminar","Attending Exhibition","Attending Workshop","Short Term Training Program","Paper Presentation",
        //         "Paper publication","Poster Presentation","Industrial training/Internship(5days)","Industrial/Exhibition Visit",
        //          "Foreign Language Skills(IELTS,BEC,TOEFL)"],
        //   Position:["Certicate of Participation","Certificate of Recognition"]
        // },
        {
           name:"Tech Quiz" , 
           Position:["Certificate Of Participation"]
        },
        {
          name:"MOOC" , 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Competition conducted by Proffessional societies", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Attending Conference/Seminar/Workshop/Exhibition", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Short Term Training Program", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Paper presentation", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Paper Publication", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Competition conducted by Proffessional societies", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Poster Presentation", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Industrial Training/Internship(5days)", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Industrial/Exhibition Visit", 
          Position:["Certificate Of Participation"]
        },
        {
          name:"Foreign Language Skills(IELTS,BEC,TOEFL)", 
          Position:["Certificate Of Participation"]
        }
      ]
    },
    {
      name:"Entrepreneurship and Innovation",
      Activity:[
        {
          name:"StartUpCompany",
          Position:["Achievement"]
        },
        // {
        //   name:["StartUpCompany","Patent-Filed","Patent-Published","Patent-Approved","Patent-Licensed","Prototype Developed and Tested",
        //         "Awards for Product Developed","Innovative Technologies developed","Got Venture Capital Funding for Innovative idea/Products",
        //          "Start Employment","Societal Innovations"],
        //   Position:"Achievement"
        // },
        {
          name:"Patent-Filed", 
          Position:["Achievement"]
        },
        {
          name:"Patent-Published", 
          Position:["Achievement"]
        },
        {
          name:"Patent-Approved", 
          Position:["Achievement"]
        },
        {
          name:"Patent-Licensed", 
          Position:["Achievement"]
        },
        {
          name:"Prototype developed and tested", 
          Position:["Achievement"]
        },
        {
          name:"Awards for product developed", 
          Position:["Achievement"]
        },
        {
          name:"Innovative Technologies Developed", 
          Position:["Achievement"]
        },
        {
          name:"Got Venture Capital Funding for Innovative idea/Products", 
          Position:["Achievement"]
        },
        {
          name:"Start Employment", 
          Position:["Achievement"]
        },
        {
          name:"Societal Innovations", 
          Position:["Achievement"]
        },
      ]
    },
    {
      name:"Leadership and Management",
      Activity:[
        // {
        //   name:["Student Proffessional Societies","College Association Chapters","Festival or Technical Events",
        //         "Hobby Clubs","Elected Student Representatives"],
        //   Position:["Core Coordinator","Sub Coordinator","Volunteer"]
        // },
        {
          name:"Student Proffessional Societies", 
          Position:["Core Coordinator","Sub Coordinator","Volunteer"]
        },
        {
          name:"College Association Chapters", 
          Position:["Core Coordinator","Sub Coordinator","Volunteer"]
        },
        {
          name:"Festival or Technical Events", 
          Position:["Core Coordinator","Sub Coordinator","Volunteer"]
        },
        {
          name:"Hobby Clubs", 
          Position:["Core Coordinator","Sub Coordinator","Volunteer"]
        },
        {
          name:"Elected Student Representatives", 
          Position:["Chairman","Secretary","Council Member"]
        },
      ]
    }
  ]
};

const Upload = () => {
  const [ActivityHead, setActivityHead] = React.useState();
  const [Activity, setActivity] = React.useState();
  const [Position, setPosition] = React.useState();

   let selectedActivity = data.ActivityHead.find((c) => c.name === ActivityHead);
   let selectedPosition = selectedActivity?.Activity?.find((s) => s.name === document.getElementById("pos").value);
  //let selectedPosition = data.Activity?.Position?.find((s) => s.name === selectedActivity);
  console.log(Activity);
  return (
    <div>
        <div className="bg-black">
          <div className="bg-gray-700 w-full h-99 flex flex-col">
            <form className="flex flex-col  xs:w-80 sm:w-97.85 sm:h-98 h-full rounded-sm bg-white">
            <h1 className="text-2xl text-center mb-2 sm:text-4xl sm:py-3 font-semibold mt-4 uppercase">
              UPLOAD FORM
            </h1>
            <div className="ml-48">
            <label
              htmlFor="File"
              className="text-md  font-bold  text-2xl"
            >
              File*
            </label>
            <input
              type="File"
              placeholder="Upload Document"
              className="w-72 ml-3  text-md italic focus:outline-none border-2 border-black rounded-full"
            />
            <label
               htmlFor=""
               className="text-md font-bold ml-24 text-2xl">
              Document Name*
            </label>
            <input type="text" placeholder="Document Name"
               className="w-72 ml-3 text-md italic focus:outline-none border-2 border-black rounded-full"
               />
            </div>
            <div className="ml-24 mt-5">
            <label
               htmlFor=""
               className="text-md font-bold ml-24 text-2xl">
              Year*
            </label>
            <select className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full">
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
            <label
               htmlFor=""
               className="text-md font-bold ml-24 text-2xl">
              Activity Head*
            </label>
            <select className="ml-5 px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                     placeholder="Activity Head" value={ActivityHead}
                     onChange={(e) => setActivityHead(e.target.value)}>
                <option>--Choose ActivityHead</option>
                {data.ActivityHead.map((value,key) => {
                  return(
                    <option value={value.name} key={key}>
                      {value.name}
                    </option>
                  );
                })}
              {/* <option value="National Initiatives">National Initiatives</option>
              <option value="Sports & Games">Sports & Games</option>
              <option value="Cultural Activities">Cultural Activities</option>
              <option value="Proffessional self initiatives">Proffesional Self Initiatives</option>
              <option value="Entrepreneurship & Initiatives">Entrepreneurship and Initiatives</option>
              <option value="Leadership and Management">Leadership and Management</option> */}
            </select>
            </div>
            <div className="ml-24 mt-5">
              <label 
                 htmlFor=""
                 className="text-md font-bold ml-24 text-2xl">Activity*
              </label>
              <select id="pos" className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                      placeholder="Activity" value={Activity}
                      onChange={(e) =>setActivity(e.target.value)}>
              <option>--Choose Activity</option>    
              {selectedActivity?.Activity.map((e,key) => {
                return (
                  <option value={e.name} key={key}>
                    {e.name}
                  </option>
                );
              })}             
              </select>
              <label
                    htmlFor=""
                    className="text-md font-bold ml-24 text-2xl">
              Position*
              </label>
              <select className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                      placeholder="Rank" value={Position}
                      onChange={(e) => setPosition(e.target.value)}>
              <option>--Choose Position--</option>
              {selectedPosition?.Position.map((e,key) =>{
                        return (
                          <option value={e.name} key={key}>
                            {e}
                          </option>
                        );
                     })}
              </select>
            </div>
            <div className="ml-24 mt-5">
            <label 
                 htmlFor=""
                 className="text-md font-bold ml-24 text-2xl">Level*
            </label> 
            <select className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                      placeholder="Select Level">
             <option>Level 1</option>
             <option>Level 2</option>
             <option>Level 3</option>
             <option>Level 4</option>
             <option>Level 5</option>
            </select>
            <label
                    htmlFor=""
                    className="text-md font-bold ml-24 text-2xl">
              Organizer*
              </label>
            <select className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                      placeholder="Conducted by">
               <option>KTU Affilliated colleges</option>
               <option>IITS</option>
               <option>NITS</option>
               <option>National Coleges</option>
               <option>International Colleges</option>
            </select>
            </div>
            <div className="mt-5 ml-24">
            <label
                    htmlFor=""
                    className="text-md font-bold ml-24 text-2xl">
              Start Date*
            </label>
            <input type="Date" className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full">
            </input>
            <label
                    htmlFor=""
                    className="text-md font-bold ml-24 text-2xl">
              End Date*
            </label>
            <input type="Date" className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full">
            </input>
            </div>
            <div className="mt-5 ml-24">
            <label
                    htmlFor=""
                    className="text-md font-bold ml-24 text-2xl">
              Description:
            </label>
            </div>
            <div className='mt-5 ml-48 '>
            <textarea className='px-4 w-96 mx-3 h-24  text-md italic focus:outline-none border-2 border-black'></textarea>
            </div>
            <div className='mt-5 ml-136 flex justify-center items-center'>
            <button class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800">Submit</button>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Upload