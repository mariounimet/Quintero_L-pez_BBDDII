import { collection, doc, getDoc, onSnapshot, query, where } from "@firebase/firestore"
import { async } from "q"
import { useEffect, useState } from "react"
import { db } from "../../app/firebase"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useUser } from "../../Context/userContext"
import styles from "./Dashboard.module.css"


export default function Dashboard() {
    const [isLoading, setIsloading] = useState(true)
    const [movies, setMovies] = useState([])
    const { user, isLoandingUser } = useUser()

    const [m, setm] = useState([
        "Mad Max", "About time",
    ])
    

    useEffect(() => {
        console.log(user)
        
    }, [])

    const moviesRef = collection(db, "movies")

    if(user != null){
        if(user.movies != []){
            const q = query(moviesRef, where("titulo", "in", user.movies))
            onSnapshot(q, (snapshot) => {
                let mov = []
                snapshot.forEach((doc) => {
                    mov.push(doc.data())
                })
                setMovies(mov)
            })
        }
    }

    return (
        <div>
            <h1 className={styles.dashTittle}>Mis peliculas</h1>
            <div className={styles.dashMovies}>
                {
                    movies.map((m, key) => {
                        return(
                            <div key={key}>
                                <MovieCard tittle={m.titulo} sinopsis={m.sinopsis} direction="/login"/>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}