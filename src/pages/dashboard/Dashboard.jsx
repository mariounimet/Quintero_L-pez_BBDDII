import { collection, doc, getDoc, onSnapshot, query, where } from "@firebase/firestore"
import { async } from "q"
import { useEffect, useState } from "react"
import { db } from "../../app/firebase"
import { useUser } from "../../Context/userContext"


export default function Dashboard() {
    const [isLoading, setIsloading] = useState(true)
    const [movies, setMovies] = useState([])
    const { user, isLoandingUser } = useUser()

    useEffect(() => {

    }, [])

    const moviesRef = collection(db, "movies")

    return (
        <div>
            <h1>Mis peliculas</h1>
        </div>
    )
}