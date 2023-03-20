import { useState,useEffect  } from 'react'
import { GrSend } from "react-icons/gr";


export default function Home() {

  const [name, setName]=useState("")
  const [description, setDescription]=useState("")
  const [tag, setTag]=useState("")
  const [submitStatus, setSubmitStatus] = useState("")
  

  useEffect(() => {
    if (submitStatus === "success") {
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    }
  }, [submitStatus])

  

  
  function submitToNotion(){
    console.log(`I'm ${name}`)
    
    fetch('http://localhost:3001/submitToNotion',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        description:description,
        tag:tag
      })
     
    }
    
    )
    
    .then(setSubmitStatus("success"))    
   
    .catch((error)=>{
      setSubmitStatus("error")
      console.log('Error:', error)
      
    });
    

   
  

  }


  
  

  return (
    <div className='flex flex-col gap-3.5 items-center justify-center content-center h-screen'>
    
    <h1 className='text-[#5B17CE] font-sans text-3xl font-bold mb-10 tracking-normal'> Notes to Notion 🏃‍♂️ </h1>
    <p className='text-[#4b5565]'>Write the title of your quick note</p>
    <input type="text" placeholder="Name" className="bg-primary-content input w-full max-w-xs font-sans text-l" onChange={(e)=>setName(e.target.value)}/>
    <p className='text-[#4b5565]'>Write the content of your quick note</p>
    <textarea className="textarea bg-primary-content w-80 h-36 font-sans text-base" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
    <p className='text-[#4b5565]'>Write the tagt of your quick note</p>
    <input type="text" placeholder="Tag" className="bg-primary-content input max-w-xs w-full font-sans text-l mb-6" onChange={(e)=>setTag(e.target.value)}/>
        {
      submitStatus === "success" ? (<button className="btn loading  btn-success  px-10 w-80 gap-2 ">
      Enviando
    </button>)
     : submitStatus === "error" ?(<button className="btn btn-error  px-10 w-80 gap-2 " onClick={submitToNotion}>Send To Notion </button>)
    :  (<button className="btn btn-primary  px-10 w-80 gap-2 " onClick={submitToNotion}>Send To Notion </button>)
    }


    {
      submitStatus === "success" ? (<div className="badge badge-accent">¡Tarea Guardada!</div>) : submitStatus === "error" ?(<div className="badge badge-error gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      error
    </div>):  (null)
    }

  


    

    </div>
  )
}
