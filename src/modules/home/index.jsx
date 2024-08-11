import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

function Home() {
  
  let navigate = useNavigate()
  return (
    <div>
      
    <button onClick={()=>navigate("admin_panel")}>admin</button>
    <button onClick={()=>navigate("sign_in")}>sign in</button>
    </div>
  )
}

export default Home