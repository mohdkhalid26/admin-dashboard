import "./App.scss"
import { Routes, Route, useNavigation } from 'react-router-dom'
import SignIn from './modules/signIn'
import AdminPanel from './modules/admin-panel'
import Home from './modules/home/index'

function App() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='sign_in/*' element={<SignIn />} />
      <Route path='admin_panel/*' element={<AdminPanel/>} />
    </Routes>
    </>
  )
}

export default App
