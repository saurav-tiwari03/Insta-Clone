import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "./../config/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const signup = async (inputs) => {
    console.log(inputs);
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.userName ||
      !inputs.fullName
    ) {
      console.log("Error", "Please fill all the fields", "error");
      return;
    }
    try {
      const newUserCredential = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUserCredential) {
        console.log("Error while creating user");
        return;
      }
      const user = newUserCredential.user;
      const userDoc = {
        uid: user.uid,
        email: user.email,
        userName: inputs.userName,
        fullName: inputs.fullName,
        bio: "",
        followers: [],
        following: [],
        posts: [],
        createdAt: Date.now(),
      };
      await setDoc(doc(firestore, "users", user.uid), userDoc);
      localStorage.setItem("insta-user", JSON.stringify(userDoc));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, error, signup };
};
