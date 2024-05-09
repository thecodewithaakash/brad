import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Account from "./pages/Account"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)


const App = () => {

  const [session, setSession] = useState<any>(null)



  const logOut = async () => {
    const { error } = await supabase.auth.signOut();

  }


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])



  return (
    <>
      <Navbar logOut={logOut} session={session} />,
      <Routes>
        <Route path="/" element={<Login logOut={logOut} session={session} />} />
        <Route path="/account" element={<Account session={session} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App