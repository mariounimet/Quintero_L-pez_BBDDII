import { collection, query, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../app/firebase";
import MovieList from "../../components/MovieList/MovieList";

export default function Admin() {
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(true)
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const mo = []
            const c = collection(db, 'movies')
            const d = await getDocs(c)
            d.forEach((doc) => {
                mo.push(doc)
            })
            setMovies(mo)
            setIsloading(false)

        }
        fetchData()
    }, [])

    return (
        <>
            {!isLoading && <><div className="d-flex justify-content-center">
                <h1>Administrador de Películas</h1>
                </div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={() => { navigate('/create'); } }>Nueva Pelicula</button>
                </div>
            <div className="">
                    {movies.map(m => (
                        <MovieList movie={m} key={m.id} />
                    ))}

                </div></>}
        </>
    )
}
