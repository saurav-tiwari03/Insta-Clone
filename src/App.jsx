import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Auth/Login';
import { Signup } from './pages/Auth/Signup';
import { Search } from './pages/Search/Search';
import { User } from './pages/User/User';
import { Loader } from './components/Loader';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from './config/firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
  const [authStatus, setAuthStatus] = useState(null);
  const [userData, setUserData] = useState(null);

  const getUserData = async (uid) => {
    try {
      const userDocRef = doc(firestore, "users", uid);
      const userData = await getDoc(userDocRef);
      if (userData.exists()) {
        const data = userData.data();
        localStorage.setItem('insta-user', JSON.stringify(data));
        setUserData(data);
      } else {
        console.log('User does not exist');
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await getUserData(user.uid);
        setAuthStatus(true);
      } else {
        setAuthStatus(false);
        localStorage.removeItem('insta-user');
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (authStatus === null) {
    return <div><Loader /></div>;
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={authStatus ? <Home userName={userData.userName} /> : <Navigate to='/login' />} />
        <Route path='/login' element={authStatus ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authStatus ? <Navigate to='/' /> : <Signup />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<User userData={userData} />} />
      </Routes>
    </div>
  );
}
