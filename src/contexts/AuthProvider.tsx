import { createContext, ReactElement, useEffect, useState, useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext<unknown>(null);
// export const AuthContext = createContext<Partial<IAuth>>({});
const auth: any = getAuth(app)

export const useAuth = () => {
    return useContext(AuthContext);
}
// export interface IAuth {
// 	createUser;
// 	createUserWithGoogle;
// 	updateUser;
// 	loginUser;
// 	passwordReset;
// 	signOutUser;
// 	user;
// 	loading;
// 	setLoading;
// }


const AuthProvider = ({ children }: { children: ReactElement }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    type UserInfoType = {
        displayName: string
    }

    const updateUser = (userInfo: UserInfoType) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const loginUser = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const passwordReset = (email: string) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = { createUser, createUserWithGoogle, updateUser, loginUser, passwordReset, signOutUser, user, loading, setLoading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;