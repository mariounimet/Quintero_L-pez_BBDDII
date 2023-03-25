import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth"
import { auth} from "./firebaseConfig"
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

export const USERS_COLLECTION = "users";

export const registerWithEmail = async (data) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const u = {
            name: data.name,
            email: data.email,
            id: result.user.uid
        }
        setDoc(doc(db, 'users', result.user.uid), u)        

    } catch (error) {
        console.log({ error })
    }
}


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