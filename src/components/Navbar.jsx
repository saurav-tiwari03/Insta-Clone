import { FiInstagram } from "react-icons/fi";
import { FaClapperboard } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import logo from './../assets/Homeimg/logo.png'
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useEffect, useState } from "react";


export const Navbar = ({userName}) => {
  const [name,setName] = useState(userName)
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('insta-user'))
    setName(name.userName)
  },[])
  const {logout} = useLogout();
  return (
    <div className="mt-4">
      {/*Main div */}
      <div className="text-white">
        {/*Instagram Logo */}
        <div className="flex items-center justify-start ml-6 my-4">
          <img src={logo} width={130} className="hidden md:flex" />
          <FiInstagram className="flex md:hidden ml-4"/>
        </div>
        {/*Routes */}
        <div className="flex flex-col items-center justify-start gap-4 w-[100px] md:w-full md:ml-6 text-lg mb-24 ">
          <div className=""><Link to='/' className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"><GoHome /><p className="hidden md:flex">Home</p></Link></div>
          <div className=""><Link to='/search' className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"><IoSearch /><p className="hidden md:flex">Search</p></Link></div>
          <div className=""><Link to='/reels' className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"><FaClapperboard /><p className="hidden md:flex">Reels</p></Link></div>
          <div className=""><Link to='/messages' className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"><FaFacebookMessenger /><p className="hidden md:flex">Messages</p></Link></div>
          <div className=""><Link to='/notifications' className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"><FaRegHeart /><p className="md:flex hidden">Notification</p></Link></div>
          <div className=""><button className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"><FaRegPlusSquare /><p className="md:flex hidden">Create</p></button></div>
          <div className=""><Link to={`/${name}`} className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"><FaRegUserCircle /><p className="md:flex hidden">Profile</p></Link></div>
        </div>
        {/*Logout */}
        <div className="ml-6 text-lg absolute bottom-10 left-0">
          <div className="">
            <button className="flex items-center justify-start hover:bg-[#1a1a1a] pl-2 md:pl-4 md:pr-6 py-2 rounded w-[40px] md:w-[200px] gap-2"
            onClick={logout}>
              <BiLogOut className="flex"/>
              <p className="hidden md:flex">Logout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
