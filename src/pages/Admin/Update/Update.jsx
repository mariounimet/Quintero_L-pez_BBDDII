import { async } from "@firebase/util";
import { collection, doc, getDoc, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../app/firebase";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export function Update() {
    const { movieID } = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovie() {
            const q = await getDoc(doc(db, 'movies', movieID))
            setMovie(q)
            setIsloading(false)
        }
        fetchMovie()
    }, [movieID])



    const onSubmit = async (data) => {
        const newMovie = {
            titulo: data.titulo != "" ? data.titulo : movie.data().titulo,
            sinopsis: data.sinopsis != "" ? data.sinopsis :  movie.data().sinopsis,
            genero: data.genero,
            estreno: data.year != "" ? data.year :  movie.data().estreno
        }
        await updateDoc(doc(db, 'movies', movie.id), newMovie)
        alert('Pelicula actualizada!')
        navigate("/admin")
    }


    return (
        <>
            {!isLoading && (
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <label for="formGroupExampleInput" className="form-label">Título</label>
                            <input type="text" className="form-control" name='titulo' {...register('titulo')}/>
                            {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
                        </div>
                        
                        <div className='mb-3'>
                            <label for="formGroupExampleInput2" className="form-label">Sinopsis</label>
                            <textarea type="text" name="sinopsis" {...register('sinopsis')} className="form-control" />
                        </div>
                        
                        <div className="row g-3">
                            <div className="col">
                                <input type="number" className="form-control" placeholder="Año de Estreno YYYY" aria-label="Año de Estreno YYYY" name='year' {...register("year")} />
                            </div>
                                
                            <div className="col">
                                <select className="form-select" {...register("genero")} >
                                    <option disabled selected>Selecciona el genero</option>
                                    <option value="Terror">Terror</option>
                                    <option value="Accion">Accion</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Comedia">Comedia</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Misterio">Misterio</option>
                                </select>
                            </div>
                            
                        </div>

                        <input className='createAccount btn btn-success' type="submit" value="Actualizar pelicula" />
                    </form>
                    <a className="display-6" href="/admin">Volver a Admin </a>
                </div>
            )}
        </>
    )
}