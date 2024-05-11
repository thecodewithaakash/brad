import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Account from "./pages/Account"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import { createClient } from '@supabase/supabase-js'
import NameForm from "./components/NameForm"
import EmailForm from "./components/EmailForm"




const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)


const App = () => {
  const [session, setSession] = useState<any>(null)
  let navigate = useNavigate();

  const logOut = async () => {
    await supabase.auth.signOut();
    navigate('/')
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
        <Route path="/account" element={<Account logOut={logOut} session={session} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/name" element={<NameForm />} />
        <Route path="/email" element={<EmailForm />} />
      </Routes>
    </>
  )
}

export default App