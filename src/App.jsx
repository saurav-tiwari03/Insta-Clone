import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Auth/Login';
import { Signup } from './pages/Auth/SignUp';
import { Search } from './pages/Search/Search';
import { User } from './pages/User/User';
import { Loader } from './components/Loader';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from './config/firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
  const [authStatus, setAuthStatus] = useState(null);

  const getUserData = async (uid) => {
    try {
      const userDocRef = doc(firestore, "users", uid);
      const userData = await getDoc(userDocRef);
      if (userData.exists()) {
        const data = userData.data();
        return data
      } else {
        console.log('User does not exist');
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await getUserData(user.uid);
      }
      setAuthStatus(user ? true : false);
    });

    return () => unsubscribe();
  }, []);

  if (authStatus === null) {
    return <div><Loader /></div>;
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={authStatus ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authStatus ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<User />} />
      </Routes>
    </div>
  );
}
