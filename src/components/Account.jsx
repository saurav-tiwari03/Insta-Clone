/* eslint-disable no-unused-vars */
import Profile from './../assets/Homeimg/profile.jpg'
import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout";
import { useState } from 'react';


export const Account = () => {
  const {logout} = useLogout();
  const user = JSON.parse(localStorage.getItem('insta-user'))
  const [userName,setUserName] = useState(user.userName)
  const [fullName,setFullName] = useState(user.fullName)
  return (
    <div className='text-white flex items-center'>
      {/*Image Div*/}
      <div>
        <img className='w-[50px] rounded-full' src={Profile} alt="" />
      </div>
      {/*UserName Div*/}
      <div>
        <Link to={`/${userName}`}>{userName}</Link>
        <p className='text-[#929292]'>{fullName}</p>
      </div>
      {/*Logout div */}
      <div className='flex items-start justify-end'>
        <button className='text-blue-400' onClick={logout}>Log out</button>
      </div>
    </div>
  )
}
