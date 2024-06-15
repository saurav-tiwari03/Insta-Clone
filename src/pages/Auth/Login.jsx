/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import authImg from './../../assets/AuthImages/authImg.png';
import logo from './../../assets/AuthImages/insta.png';
import playstore from './../../assets/AuthImages/googlePlay.png';
import microstore from './../../assets/AuthImages/microStore.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from '../../components/Loader';
import { useLogin } from '../../hooks/useLogin';

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [spinStatus, setSpinStatus] = useState(false);
  const { login, loading, error } = useLogin();
  const [user,setUser] = useState();
  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();

  const authHandler = async () => {
    if (!inputs.email || !inputs.password) {
      toast.error('Please enter valid details');
      return;
    }
    setSpinStatus(true);
    const data = await login(inputs)
    console.log(data)
    navigate('/')
  };

  return (
    <>
      <div className='flex items-center justify-center mt-8 gap-8'>
        {/* Left Side */}
        <div className='w-[30%] hidden lg:flex'>
          <img src={authImg} alt='' />
        </div>
        {/* Right Side */}
        <div className='flex flex-col items-center justify-between gap-2'>
          {/* Upper div */}
          <div className='border-2 w-[325px] h-[350px] mt-4'>
            {/* Logo */}
            <div className='flex items-center justify-center m-8'>
              <img src={logo} width={200} alt='' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              {/* Input Field */}
              <div className='flex flex-col items-center justify-center'>
                <input
                  className='w-[250px] h-[35px] pl-2 mb-1 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs'
                  type='text'
                  placeholder='Email'
                  onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                />
                <div className='flex relative'>
                  <input
                    className='w-[250px]  h-[35px] pl-2 mb-4 rounded outline-[#8e8e8e] bg-[#f4f4f4] border-[2px] text-xs'
                    type={`${showPassword ? 'text' : 'password'}`}
                    placeholder='Password'
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                  />
                  <button className='absolute right-2 top-1'  onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
                <button
                  onClick={authHandler}
                  className='flex items-center justify-center bg-[#4cb5f9] text-white font-semibold w-[250px] rounded-md py-1'
                >
                  {spinStatus ? <Spinner className='text-[22px]' /> : 'Login'}
                </button>
              </div>
              <div className='mt-4'>
                <a href='https://www.facebook.com/' className='flex items-center text-[#385185]'>
                  <span>
                    <FaFacebookSquare />
                  </span>
                  Log in with Facebook
                </a>
              </div>
              {/* Forget Password block */}
              <div className='mt-2'>
                <a href='/' className='text-[12px] text-[#00376b]'>
                  Forget Password?
                </a>
              </div>
            </div>
          </div>

          {/* Don't Have account div */}
          <div className='w-[325px] border-2 px-8 py-4 text-[14px] flex items-center justify-center'>
            <p>
              Don't have an account?
              <span>
                <Link to='/signup' className='text-blue-500 font-semibold'>
                  {' '}
                  Signup
                </Link>
              </span>
            </p>
          </div>
          <p className='text-sm'>Get the app</p>
          {/* Download options div */}
          <div className='flex items-center justify-center p-4 gap-4'>
            <a
              href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN'
              target='_blank'
              rel='noreferrer'
            >
              <img src={playstore} width={111} alt='playstore img' />
            </a>
            <a
              href='https://apps.microsoft.com/en-gb/detail/9nblggh5l9xt'
              target='_blank'
              rel='noreferrer'
            >
              <img src={microstore} width={100} alt='microsoftstore img' />
            </a>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};
