import { Routes, Route } from 'react-router-dom'
import SignIn from './modules/signIn'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='sign_in' element={<SignIn />} />
    </Routes>
  )
}

export default App
