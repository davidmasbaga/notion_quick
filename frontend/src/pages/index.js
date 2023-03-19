import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [name, setName]=useState("")
  const [description, setDescription]=useState("")
  const [tag, setTag]=useState("")
  const [reload, setReload] = useState(false);

  
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
    }).then(response=> response.json())
    .then(data=>{
      console.log('Enviado', data)
    }).catch((error)=>{
      console.log('Error:', error)
    });
    setReload(!reload)

  }
  

  return (
    <div className='flex flex-col gap-3.5 items-center justify-center content-center h-screen'>
    <h1 className='font-sans text-3xl font-bold mb-10'>QuickNotion</h1>
    <p className='text-[#94a3b8]'>Write the title of your quick note</p>
    <input type="text" placeholder="Name" className="bg-primary-content input w-full max-w-xs font-sans text-l" onChange={(e)=>setName(e.target.value)}/>
    <p className='text-[#94a3b8]'>Write the content of your quick note</p>
    <textarea className="textarea bg-primary-content w-80 h-36 font-sans text-base" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
    <p className='text-[#94a3b8]'>Write the tagt of your quick note</p>
    <input type="text" placeholder="Tag" className="bg-primary-content input w-full max-w-xs w-96 font-sans text-l" onChange={(e)=>setTag(e.target.value)}/>
    <button className="btn btn-accent btn-wide px-10 w-80 " onClick={submitToNotion}>Send To Notion</button>

    </div>
  )
}
