import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { getUserProfile } from "../firebase/authServices";

export const UserContext = createContext(null)

export function UserContentProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoandingUser, setIsLoadingUser] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            setIsLoadingUser(true);
            if (firebaseUser && !user) {
                const userProfile = await getUserProfile(firebaseUser.email);

                setUser(userProfile);
            } else {
                setUser(null);
            }
            setIsLoadingUser(false);
        });
    }, []);


    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLoandingUser,
                setIsLoadingUser,
            }}>
            {children}
        </UserContext.Provider >
    )
}

export function useUser() {
    return useContext(UserContext);
}