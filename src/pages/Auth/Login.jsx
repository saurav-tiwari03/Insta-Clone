import authImg from './../../assets/AuthImages/authImg.png';
import playstore from './../../assets/AuthImages/googlePlay.png';
import microstore from './../../assets/AuthImages/microStore.png';
import logo from './../../assets/AuthImages/insta.png';
import { FaFacebookSquare } from "react-icons/fa";


import { Link } from 'react-router-dom';
export const Login = () => {
  return (
  <>
    <div className='flex items-center justify-center mt-8 gap-8 '>
      {/*Left Side */}
      <div className='w-[30%] hidden lg:flex'>
        <img src={authImg} alt="" />
      </div>
      {/*Right Side */}
      <div className='flex flex-col items-center justify-between gap-2 '>
        {/*Upper div */}
        <div className='border-2 w-[325px] h-[350px] mt-4'>
          {/*Logo */}
          <div className='flex items-center justify-center m-8'>
            <img src={logo} width={200} alt="" />
          </div>  
          <div className='flex flex-col items-center justify-center'>
            {/*Input Field */}
            <div className='flex flex-col items-center justify-center' >
              <input className='w-[250px] h-[35px] pl-2 mb-1 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs' type="text" placeholder='Email'/>
              <input className='w-[250px] h-[35px] pl-2 mb-4 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs' type="text" placeholder='Password'/>
              <button className='bg-[#4cb5f9] text-white font-semibold w-[250px] rounded-md py-1'>Login</button>
            </div>
            <div className='mt-4'>
              <a href="https://www.facebook.com/" className='flex items-center text-[#385185]'><span><FaFacebookSquare/></span>Log in with Facebook</a>
            </div>
            {/*Forget Password block */}
            <div className='mt-2'>
              <a href="/" className='text-[12px] text-[#00376b]'>Forget Password?</a>
            </div>
          </div>
        </div>
        
        {/*Don't Have account div */}
        <div className='w-[325px] border-2 px-8 py-4 text-[14px] flex items-center justify-center'>
          <p>
            Dont have an account?  
            <span>
              <Link to='/signup' className='text-blue-500 font-semibold '> Signup</Link>
            </span>
          </p>
        </div>
        <p className='text-sm'>Get the app</p>
        {/*Download options div*/}
        <div className='flex items-center justify-center  p-4 gap-4' >
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN" target='_blank'>
            <img src={playstore} width={111} alt="playstore img" />
          </a>
          <a href="https://apps.microsoft.com/en-gb/detail/9nblggh5l9xt" target='_blank'>
            <img src={microstore} width={100} alt="microsoftstore img" />
          </a>
        </div>
      </div>
    </div>
  </>
  )
}