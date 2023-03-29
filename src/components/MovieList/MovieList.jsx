import { deleteDoc, doc } from "firebase/firestore"
import { Link} from "react-router-dom"
import { db } from "../../app/firebase"
import './MovieList.css'

const MovieList = ({movie, setMovies}) =>{
    const handleDelete = async () =>{
        
        await deleteDoc(doc(db, 'movies',movie.id)).then(() => {
            alert('Pelicula eliminada!');
            setMovies((currentState) => {
                const index = currentState.findIndex((item) => item.id === movie.id );
                if (index >= 0 ) {
                    return [...currentState.slice(0, index), ...currentState.slice(index+1)]
                } else {
                    return currentState;
                }
                
            })
        })
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