import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import {Home} from './pages/Home/Home'
import {Login} from './pages/Auth/Login'
import {Signup} from './pages/Auth/Signup'

export default function App() {
  const authStatus = true
  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={authStatus ? <Home /> : <Navigate to='/login' />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </div>
    </>
  )
}
