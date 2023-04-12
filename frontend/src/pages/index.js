import { useSession, signOut } from 'next-auth/react'
import Form from '../components/Form'
import { Router, useRouter } from 'next/router'
import Navbar from '@/components/Navbar'





function Home() {
    const router = useRouter()
    

     const {data:session,status} = useSession()
    console.log(session?.user)
    const userName = session?.user.name.split(" ")[0]

    if (status === 'loading'){
        return <p>Loading...</p>
    }

  if (status === 'unauthenticated' ){
  router.push('/login')

  }
    
  return (
<>
    { session ? ( <>
      <Navbar image={session.user.image} />
         
      
      <div><Form name={userName}/></div>
      </>):("Estamos cargando el contenido")}

 </>
   
  )
  
}

export default Home