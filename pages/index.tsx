import {useSession, signIn, signOut} from 'next-auth/react'
import Image from 'next/image'
 
export default function Home() {
  const { data: session } = useSession()
  return (
    <div style={{width:"full"}}>
    <div style={{display: "flex", justifyContent: "center", flexDirection:"column", alignContent: "center", textAlign: "center", height: "100vh"}}>
      {session ? (
        <div>
        Signed in as {session?.user?.email} <br />
        <Image src={session?.user?.image!}  alt="fdsf" width={100} height={100}/>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
      </div>
      </div>
  )
}
