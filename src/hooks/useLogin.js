import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (inputs) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
      console.log('User signed in:', userCredential.user.uid);
      setLoading(false);
      navigate('/')
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  return { login, loading, error };
};
