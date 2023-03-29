import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth"
import { auth} from "./firebase"
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import { db } from '../app/firebase';

export const USERS_COLLECTION = "users";


export const signInWithEmail = async (data) =>{
    try {
        const result = signInWithEmailAndPassword(auth,data.email,data.password)

       

    } catch (error) {
        console.log(error)
    }
}


export async function getUserProfile(email) {
    const userQuery = query(
        collection(db, USERS_COLLECTION),
        where("email", "==", email)
    );

    const results = await getDocs(userQuery);

    if (results.size > 0) {
        const [user] = results.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }));
        return user;
    }

    return null;
}

export const logout = async () => {

    try {
        await signOut(auth)
    } catch (error) {
        console.log({ error })
    }
}