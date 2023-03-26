import { collection, doc, getDoc, query, where } from "@firebase/firestore"
import { async } from "q"
import { useEffect, useState } from "react"
import { db } from "../../app/firebase"
import { useUser } from "../../Context/userContext"


export default function Dashboard() {
    const [isLoading, setIsloading] = useState(true)
    const [movies, setMovies] = useState(null)
    const { user, isLoandingUser } = useUser()
    const mov = []

    useEffect(() => {
        async function fetchData() {

            const d = await getDoc(doc(db, 'users', user.id))

            const m = d.data().movies
            m.forEach((movie) => {
                loadMovie(movie)
            })
        }

        async function loadMovie(movie) {
            const movidDOc = await getDoc(doc(db, 'movies', movie.idMovie))
            mov.push(movidDOc.data())
        }



    }, [])


    return (
        <div>
            {/* {!isLoading && console.log("H")} */}
            {/* {console.log(isLoandingUser)} */}
        </div>
    )
}