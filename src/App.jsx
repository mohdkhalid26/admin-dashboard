import "./App.scss"
import { Routes, Route } from 'react-router-dom'
import SignIn from './modules/signIn'
import AdminPanel from './modules/admin-panel'

function App() {

  return (
    <Routes>
      <Route path='sign_in' element={<SignIn />} />
      <Route path='admin_panel/*' element={<AdminPanel/>} />
    </Routes>
  )
}

export default App
