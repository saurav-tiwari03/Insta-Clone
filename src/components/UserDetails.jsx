/* eslint-disable react/prop-types */
import { useState } from 'react';
import profileImg from './../assets/userimg.png';
import { IoMdSettings } from "react-icons/io";
import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from './../config/firebase'; // adjust the path as necessary

const UserDetails = ({ profileData }) => {
  const [editProfile, setEditProfile] = useState(false);
  const [profile, setProfile] = useState(profileData);
  const updateBio = async (newBio) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      bio: newBio
    }));

    const userDocRef = doc(firestore, "users", profileData.uid);
    try {
      await updateDoc(userDocRef, { bio: newBio });
      console.log('Bio updated successfully in the database');
    } catch (error) {
      console.error('Error updating bio:', error);
    }
  };

  return (
    <div className='flex items-center justify-center mx-0 md:mx-[50px] w-[50vw]'>
      <div className='overflow-hidden'>
        {editProfile && <UpdateProfile profileData={profile} updateBio={updateBio} editProfile={editProfile} setEditProfile={setEditProfile} />}
      </div>
      <div className='w-[50vw]'>
        <div className='flex'>
          <div>
            <img className='w-[100px] rounded-full' src={profileImg} alt="User Profile" />
          </div>
          <div className='ml-12'>
            <div className='text-white flex gap-4'>
              <div>
                <p className='text-2xl'>{profile.userName}</p>
                <p className='text-xl'>{profile.bio}</p>
              </div>
              <div>
                <button className='text-3xl' onClick={() => setEditProfile(!editProfile)}><IoMdSettings /></button>
              </div>
            </div>
            <div className='text-white flex gap-8'>
              <p>Following: {profile.following.length}</p>
              <p>Followers: {profile.followers.length}</p>
            </div>
          </div>
        </div>
        <div className='text-white my-8 w-full'>
          <p className='text-4xl text-center'>Posts</p>
          <hr />
          <div className='text-xl text-center'>
            {profile.posts.length > 0 ? '' : 'No Posts'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

const UpdateProfile = ({ profileData, updateBio,editProfile,setEditProfile }) => {
  const [bio, setBio] = useState(profileData.bio);

  const submitHandler = (e) => {
    e.preventDefault();
    updateBio(bio);
    setEditProfile(!editProfile)
  };

  return (
    <div className='absolute bg-[#333] p-4 rounded'>
      <div>
        <p className='text-white text-3xl text-center'>Edit Profile</p>
        <form className='flex flex-col m-auto' onSubmit={submitHandler}>
          <input
            type="text"
            value={bio}
            placeholder='Edit bio'
            className='p-2 rounded mb-2'
            onChange={(e) => setBio(e.target.value)}
          />
          <button type='submit' className='bg-[#ccc] text-black p-2 rounded'>Update</button>
        </form>
      </div>
    </div>
  );
};

