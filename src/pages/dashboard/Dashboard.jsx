import { collection, doc, getDoc, onSnapshot, query, where } from "@firebase/firestore"
import { async } from "q"
import { useEffect, useState } from "react"
import { db } from "../../app/firebase"
import { useUser } from "../../Context/userContext"


export default function Dashboard() {
    const [isLoading, setIsloading] = useState(true)
    const [movies, setMovies] = useState(null)
    const { user, isLoandingUser } = useUser()

    useEffect(() => {
        
    }, [])


    return (
        <div>
            {
                !isLoading && (
                    <div>
                        {
                            movies.map((m, key) => {
                                return(
                                    <div>
                                        aaa
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                console.log(isLoandingUser)
            }
        </div>
    )
}