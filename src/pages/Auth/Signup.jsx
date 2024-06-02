import logo from './../../assets/AuthImages/insta.png';
import playstore from './../../assets/AuthImages/googlePlay.png';
import microstore from './../../assets/AuthImages/microStore.png';
import { Spinner } from '../../components/Loader.jsx';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import {useSignup}  from './../../hooks/useSignup.js';

export const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    fullName: '',
    userName: '',
  });
  const [spinStatus,setSpinStatus] = useState();
  const {signup} = useSignup();
  const [showPassword, setShowPassword] = useState(false);

  const signUpHandler = () => {
    setSpinStatus(!spinStatus);
    console.log(inputs)
    signup(inputs)
    setSpinStatus(!spinStatus);
  }

  return (
    <div className="mt-8">
      {/*Main div */}
      <div className='flex flex-col items-center justify-center gap-2'>
        {/*1st Div */}
        <div className='flex flex-col items-center justify-center border-2 w-[325px]'>
          <div className='flex flex-col items-center justify-center mb-4'>
            <img src={logo} width={200} alt="" className='mt-4'/>
            <p className='text-center text-sm w-[250px] text-[#737373] font-semibold'>Sign up to see photos and videos from your friends.</p>
            <div className='mt-4 bg-[#4f97fd] hover:bg-[#1877f2] px-4 py-1 rounded-lg transition-all duration-300'>
              <a href="https://www.facebook.com/" className='flex items-center text-[#fff] '><span><FaFacebookSquare/></span>Log in with Facebook</a>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <input className='w-[250px] h-[35px] pl-2 mb-1 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs' type="text" placeholder='Email' onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
            <input className='w-[250px] h-[35px] pl-2 mb-1 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs' type="text" placeholder='Full Name' onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
            <input className='w-[250px] h-[35px] pl-2 mb-1 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs' type="text" placeholder='Username' onChange={(e) => setInputs({...inputs, userName: e.target.value})}/>
            <div className='flex items-center relative'>
              <input className='w-[250px] h-[35px] pl-2 mb-4 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs relative' type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
              <button className='absolute right-2 pb-3' onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
          </div>
          <button className='bg-[#4cb5f9] text-white rounded w-[250px] h-[35px] mb-8 flex items-center justify-center' onClick={signUpHandler}>{spinStatus ? <Spinner /> : 'Sign Up'}</button>
        </div>
        {/*2nd Div */}
        <div className='w-[325px] border-2 px-8 py-4 text-[14px] flex items-center justify-center'>
          <p>Have an account? 
            <span>
              <Link className='text-[#4f97fd] font-semibold' to='/login'> Log in</Link>
            </span>
          </p>
        </div>
        {/*3rd Div */}
        <p>Get the app.</p>
        <div className='flex items-center justify-center p-4 gap-4'>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN" target='_blank'>
            <img src={playstore} width={111} alt="playstore img" />
          </a>
          <a href="https://apps.microsoft.com/en-gb/detail/9nblggh5l9xt" target='_blank'>
            <img src={microstore} width={100} alt="microsoftstore img" />
          </a>
        </div>
      </div>
    </div>
  );
};
