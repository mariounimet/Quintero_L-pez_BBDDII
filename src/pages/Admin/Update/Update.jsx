import { async } from "@firebase/util";
import { collection, doc, getDoc, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../app/firebase";
import { useForm } from 'react-hook-form'

export function Update() {
    const { movieID } = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        async function fetchMovie() {
            const q = await getDoc(doc(db, 'movies', movieID))
            setMovie(q.data())
            setIsloading(false)
        }
        fetchMovie()
    }, [movieID])



    const onSubmit = async (data) => {
        const newMovie = {
            titulo: data.titulo != "" ? data.titulo : movie.titulo,
            sinopsis: data.sinopsis != "" ? data.sinopsis : movie.sinopsis,
            genero: data.genero,
            estreno: data.year != "" ? data.year : movie.estreno
        }
        await updateDoc(doc(db, 'movies', movie.titulo), newMovie)
        console.log(newMovie)
    }


    return (
        <>
            {!isLoading && (
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=''>
                            <div className=''>
                                <div className=''>
                                    <input type="text" className='' placeholder="Titulo" name='titulo' {...register('titulo')} />
                                    {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}

                                </div>
                                <br />
                                <label>Sinopsis</label>
                                <textarea name="sinopsis" {...register('sinopsis')} />

                                <br />

                            </div>

                        </div>

                        <div className='separator'>.</div>

                        <div className=''>
                            <input className='' type="number" placeholder='AAAA' name='year' {...register("year")} />
                            <p className='calendarText'>Fecha de estreno</p>
                        </div>
                        <div className='genero'>
                            <select className='' {...register("genero")}>
                                <option selected>{movie.genero}</option>
                                <option value="Terror">Terror</option>
                                <option value="Accion">Accion</option>
                                <option value="Drama">Drama</option>
                                <option value="Comedia">Comedia</option>
                                <option value="Romance">Romance</option>
                                <option value="Misterio">Misterio</option>
                            </select>

                        </div>
                        <br />
                        <input className='createAccount' type="submit" value="Actualizar pelicula" />
                    </form>
                </div>
            )}
        </>
    )
}