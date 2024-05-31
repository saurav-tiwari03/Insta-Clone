import './App.css'
import { Routes,Route } from 'react-router-dom'
import {Home} from './pages/Home/Home'
import {Login} from './pages/Auth/Login'
import {Signup} from './pages/Auth/Signup'

export default function App() {
  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </div>
    </>
  )
}
