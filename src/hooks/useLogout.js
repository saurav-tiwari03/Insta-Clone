import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "./../config/firebase";
import { useNavigate } from "react-router-dom";
export const useLogout = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return { logout, loading, error };
};
