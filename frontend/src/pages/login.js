import React from 'react'
import { useRouter } from 'next/router'
import { BsGithub } from "react-icons/bs";

function Login() {

  const router = useRouter()
  
  return (
    <div className='flex flex-col gap-3.5 items-center justify-center content-center h-screen'>
     <h1 className='text-black font-sans text-3xl font-bold mb-10 tracking-normal'> Notes to Notion</h1>

  <button className="btn btn-outline text-black" onClick={() => router.push('/api/auth/signin/github') }>Login with GitHub <BsGithub className='ml-5 text-2xl text-black'/></button>
    </div>
  )
}

export default Login