/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from "../../components/Navbar";
import { firestore } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import UserDetails from './../../components/UserDetails'

export const User = ({userData}) => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(userData);

  const fetchUserProfile = async (userId) => {
    try {
      const userDocRef = doc(firestore, "users", userId);
      const userData = await getDoc(userDocRef);
      if (userData.exists()) {
        setProfileData(userData.data());
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile(id);
  }, [id]);

  return (
    <div className="text-black bg-[#000] h-screen flex">
      <div className='flex items-start w-[12vh] md:w-[35vh]'>
        <Navbar />
      </div>
      <div className='h-screen w-[0.07px] bg-white'></div>
      <div className="p-4">     
        {profileData ? (
          <>
            <UserDetails profileData={profileData}/>
            {/* Display other user details here */}
          </>
        ) : (
          <p className="text-white">Loading profile...</p>
        )}
      </div>
    </div>
  );
};
