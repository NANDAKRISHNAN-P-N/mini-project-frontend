import  React from 'react'
import axios from 'axios'
const userid = localStorage.getItem('mgitsid')

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
          Position:["Certificate Of Participation","Certificate of Recognition"]
        },
        {
          name:"Paper Publication", 
          Position:["Certificate Of Participation","Certificate of Recognition"]
        },
        {
          name:"Poster Presentation", 
          Position:["Certificate Of Participation","Certificate of Recognition"]
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
  const [docname,setDocname] = React.useState();
  const [year,setYear] = React.useState();
  const [ActivityHead, setActivityHead] = React.useState();
  const [Activity, setActivity] = React.useState();
  const [Position, setPosition] = React.useState();
  const [level,setLevel] = React.useState();
  const [organizer,setOrganizer] = React.useState();
  const [startdate,setStartdate] = React.useState();
  const [enddate,setEnddate] = React.useState();
  const [description,setDescription] = React.useState();

  const [ fileInputState, setFileInputState] = React.useState('');
  const [ selectedFile, setSelectedFile ] = React.useState();
  const [ previewSource, setPreviewSource ] = React.useState();

  const userid = localStorage.getItem('mgitsid');

   let selectedActivity = data.ActivityHead.find((c) => c.name === ActivityHead);
   let selectedPosition = selectedActivity?.Activity?.find((s) => s.name === document.getElementById("pos").value);
  // console.log(Activity);
  
  const  handleFileChange = (e) =>{
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
 }

 const previewFile = (file) =>{
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onloadend = () =>{
     setPreviewSource(reader.result);
   }
 }

 const handleSubmitFile = (e) =>{
    if(!selectedFile) 
        return;
    //const reader = new FileReader();
    uploadImage(previewSource);
 }

 const uploadImage = async(base64EncodedImage) =>{
    console.log(base64EncodedImage);
    try{
        await axios.post("http://localhost:4000/Imageupload",{
           method: 'POST',
           body:base64EncodedImage,
           userId:userid, 
           headers:{'Content-type': 'application/json'},
           'Access-Control-Allow-Origin': '*',
        }).then((res) =>{
           console.log(res,res.status,res.data.message);
        });
    }catch(error){
      console.log(error);
    }
 }

  const Uploaddata = async(e) =>{
    e.preventDefault();
    const File = selectedFile;
    const Docname = docname;
    const Year = year;
    const Activity_Head = ActivityHead ;
    const Acti_vity = Activity;
    const Rank = Position ;
    const Level = level;
    const Organizer = organizer;
    const Startdate = startdate;
    const Enddate = enddate;
    const Description = description;

    const data = {
    "mgitsid":userid,
    "file_url":userid + "url",
    "doc_name":Docname,
    "year":parseInt(Year),
    "Activity_head":Activity_Head,
    "Activity":Acti_vity,
    "Position":Rank,
    "Level":Level,
    "Organizer":Organizer,
    "Start_date":Date(Startdate),
    "End_date":Date(Enddate),
    "Description":Description
    }
    console.log("before file");
    handleSubmitFile(File);
    console.log(data);
    try{
      await axios.post("http://localhost:4000/Upload",data).then((res) => {
         console.log(data,res,res.status);
         if(res.data.status === "SUCCESS"){
            window.alert("Details uploaded successfully");
            console.log(res.data.message)
         }else if (res.data.status === "FAILURE"){
             console.log(res.error)
         }
      })
    }catch(error){
      console.log(error);
    }
  }
  
  
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
              type="File" onChange={ handleFileChange } value={ fileInputState }
              placeholder="Upload Document"
              className="w-72 ml-3  text-md italic focus:outline-none border-2 border-black rounded-full"
            />
            <label
               htmlFor=""
               className="text-md font-bold ml-24 text-2xl">
              Document Name*
            </label>
            <input type="text" placeholder="Document Name" onChange={(e) => setDocname(e.target.value)}
               className="w-72 ml-3 text-md italic focus:outline-none border-2 border-black rounded-full"
               />
            </div>
            <div className="ml-24 mt-5">
            <label
               htmlFor=""
               className="text-md font-bold ml-24 text-2xl">
              Year*
            </label>
            <select className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
             onChange={(e) => setYear(e.target.value)} >
              <option>---Choose Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
                      placeholder="Select Level" onChange={(e) => setLevel(e.target.value)}>
             <option>---Choose Level</option>
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
                      placeholder="Conducted by" onChange={(e) => setOrganizer(e.target.value)}>
               <option>---Choose an option</option>
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
            <input type="Date" className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                onChange={(e) => setStartdate(e.target.value)}>
            </input>
            <label
                    htmlFor=""
                    className="text-md font-bold ml-24 text-2xl">
              End Date*
            </label>
            <input type="Date" className="px-4 w-72 mx-3 text-md italic focus:outline-none border-2 border-black rounded-full"
                onChange={(e) => setEnddate(e.target.value)}>
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
            <textarea className='px-4 w-96 mx-3 h-24  text-md italic focus:outline-none border-2 border-black'
              onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className='mt-5 ml-136 flex justify-center items-center'>
            <button class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800"
                onClick = { Uploaddata }>Submit</button>
            </div>
            </form>
            {previewSource && (
              <img src={previewSource} alt=" "></img> 
            )}
          </div>
        </div>
    </div>
  )
}

export default Upload