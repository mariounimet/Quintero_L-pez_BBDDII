import { deleteDoc, doc } from "firebase/firestore"
import { Link} from "react-router-dom"
import { db } from "../../app/firebase"

const MovieList = ({movie}) =>{
    const handleDelete = async () =>{
        await deleteDoc(doc(db, 'movies',movie.id))
    }

    return(
        <div>
            <span>{movie.data().titulo}</span>
            <button onClick={handleDelete}>Eliminar</button>
            <Link to={'/update/' + movie.id}><button>Actualizar</button></Link>
        </div>
    )
}


export default MovieList