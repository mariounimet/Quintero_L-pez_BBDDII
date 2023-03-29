import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useForm } from 'react-hook-form'
import './Create.css'
import { db } from "../../../app/firebase";
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";

export default function Create() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
          titulo: '',
          sinopsis: '',
          year: "",
          name:"genero"
        }
      });
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        alert('Pelicula creada');
        const movie = {
            titulo: data.titulo,
            sinopsis: data.sinopsis,
            genero: data.genero,
            estreno: data.year
        }
        setDoc(doc(db, 'movies', uuid()), movie)
        navigate("/admin")
    }

    return (

        
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Título</label>
                <input type="text" className="form-control" name='titulo' {...register('titulo')}/>
                {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Sinopsis</label>
                <textarea type="text" name="sinopsis" {...register('sinopsis')} className="form-control" />
            </div>

            <div className="row g-3">
                <div className="col">
                    <input type="number" className="form-control" placeholder="Año de Estreno YYYY" aria-label="Año de Estreno YYYY" name='year' {...register("year")} />
                </div>
                <div className="col">
                    <select className="form-select" name="genero" {...register("genero")} >
                        <option disabled value="">Selecciona el genero</option>
                        <option value="Terror">Terror</option>
                        <option value="Accion">Accion</option>
                        <option value="Drama">Drama</option>
                        <option value="Comedia">Comedia</option>
                        <option value="Romance">Romance</option>
                        <option value="Misterio">Misterio</option>
                    </select>
                </div>
            </div>
            <input className='createAccount btn btn-success' type="submit" value="Crear pelicula" />
            </form>
            <a className="display-6" href="/admin">Volver a Admin </a>
        </div>
        
    )
}
