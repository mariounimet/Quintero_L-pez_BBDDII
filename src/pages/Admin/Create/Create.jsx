import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useForm } from 'react-hook-form'
import './Create.css'
import { db } from "../../../app/firebase";
import { v4 as uuid } from "uuid"

export default function Create() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const movie = {
            titulo: data.titulo,
            sinopsis: data.sinopsis,
            genero: data.genero,
            estreno: data.year
            
        }
        setDoc(doc(db, 'movies', uuid()), movie)
    }

    return (
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
                        <option disabled selected>--- Género ---</option>
                        <option value="Terror">Terror</option>
                        <option value="Accion">Accion</option>
                        <option value="Drama">Drama</option>
                        <option value="Comedia">Comedia</option>
                        <option value="Romance">Romance</option>
                        <option value="Misterio">Misterio</option>
                    </select>

                </div>
                <br />
                <input className='createAccount' type="submit" value="Crear pelicula" />
            </form>
        </div>
    )
}
