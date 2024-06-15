// import Profile from './../assets/Homeimg/profile.jpg';
import userimg from './../assets/userimg.png'
import { Link } from 'react-router-dom';
import { useLogout } from "../hooks/useLogout";
import { useState, useEffect } from 'react';

export const Account = () => {
  const { logout } = useLogout();
  const user = JSON.parse(localStorage.getItem('insta-user'));

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
      setFullName(user.fullName);
    }
  }, [user]);

  if (!user) {
    return <div className='text-white'>
      <button onClick={logout}>Sign out</button>
    </div>;
  }

  return (
    <div className='text-white flex items-center'>
      <div>
        <img className='w-[50px] rounded-full' src={userimg} alt="" />
      </div>
      <div>
        <Link to={`/${userName}`}>{userName}</Link>
        <p className='text-[#929292]'>{fullName}</p>
      </div>
      <div className='flex items-start justify-end'>
        <button className='text-blue-400' onClick={logout}>Log out</button>
      </div>
    </div>
  );
};
