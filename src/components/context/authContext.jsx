import { createContext, useContext, useEffect,useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("asd");
  return context;
};

export function AuthProvider({ children }) {

    const [user, setuser] = useState(null)
    const [loading,setLoading] = useState(true)

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async(email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth)

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged (auth, currentUser => {
        setuser(currentUser)
        setLoading(false)
    })

    return ()=>{
        unsuscribe()
    }
  },[])

  return (
    <authContext.Provider value={{ signup, login,user,logout,loading }}>
      {children}
    </authContext.Provider>
  );
}
