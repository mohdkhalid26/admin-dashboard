import { Routes, Route } from 'react-router-dom'
import SignIn from './modules/signIn'


function App() {

  return (
    <Routes>
      <Route path='sign_in' element={<SignIn />} />
    </Routes>
  )
}

export default App
