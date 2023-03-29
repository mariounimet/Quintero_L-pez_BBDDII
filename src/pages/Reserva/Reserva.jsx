import { collection, query, getDocs, getDoc, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../app/firebase";
import { useUser } from "../../Context/userContext";
import { useForm } from 'react-hook-form'

export default function Reserva() {
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(true)
    const [movies, setMovies] = useState(null)
    const { user, isLoandingUser } = useUser()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [movie, setMovie] = useState('')

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



    const onSubmit = async (data) => {

        const newMovie = {
            idMovie: data.movie,
            idUser: user.id
        }


        try {
            // const res = await getDoc(doc(db, 'compras', user.id))

            // if (!res.exists()) {
            //     await setDoc(doc(db, 'compras', user.id), { movies: [] })

            // }
            await updateDoc(doc(db, 'users', user.id), {
                movies: arrayUnion(newMovie)
            })



        } catch (error) {
            console.log(error)
        }




    }

    return (
        <div>

            {(!isLoading && !isLoandingUser) && <form onSubmit={handleSubmit(onSubmit)}>

                <div className='separator'>.</div>


                <div className='movie' >
                    <select className='' {...register("movie")}>
                        {movies.map(m => (
                            <option value={m.id} key={m.id}>{m.data().titulo}</option>
                        ))}


                    </select>

                </div>
                <br />
                <input className='createAccount' type="submit" value="Comprar pelicula" />
            </form>}

        </div>


    )
}