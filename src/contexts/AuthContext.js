import { createContext, useContext, useEffect, useState } from "react"
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const register = async (email, password, name) => {

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, {
                displayName: name
            })
            return user;


        } catch (error) {
            toast.error(error.message)
        }
    }

    const login = async (email, password) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            return user;
        } catch (error) {
            toast.error(error.message)
        }
    }
        
    const logout = async () => {
        try {
            await signOut(auth)
            return true;
        } catch (error) {
            toast.error(error.message)
        }
    }

    const signWithGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const { user } = await signInWithPopup(auth, googleProvider);
            return user;
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        register,
        login,
        logout,
        signWithGoogle
    }
    return (
    <AuthContext.Provider value={value}>
        { !loading && children }
    </AuthContext.Provider>

  )
}
