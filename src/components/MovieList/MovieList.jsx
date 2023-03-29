import { deleteDoc, doc } from "firebase/firestore"
import { Link} from "react-router-dom"
import { db } from "../../app/firebase"
import './MovieList.css'

const MovieList = ({movie}) =>{
    const handleDelete = async () =>{
        alert('Pelicula eliminada!');
        await deleteDoc(doc(db, 'movies',movie.id))
    }

    return(
        <div className="d-flex justify-content-center flex-column ">
            <span className="fs-3 p-2 d-flex justify-content-center text-uppercase " >{movie.data().titulo}</span>
            <div className="d-flex justify-content-center p-2 grid gap-3">
            <button className="btn btn-danger p-2 g-col-6" onClick={handleDelete}> Eliminar</button>
            <Link to={'/update/' + movie.id}><button className="btn btn-secondary p-2 g-col-6" > Actualizar</button></Link>
            </div>
        </div>
    )
}


export default MovieList