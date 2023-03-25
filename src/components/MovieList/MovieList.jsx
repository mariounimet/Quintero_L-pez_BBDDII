import { deleteDoc, doc } from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom"
import { db } from "../../app/firebase"

const MovieList = ({movie}) =>{
    const navigate = useNavigate()
    const handleDelete = async () =>{
        await deleteDoc(doc(db, 'movies',movie.titulo))
        // console.log(movie.titulo)
    }

    const handleUpdate = () => {
        
    }

    return(
        <div>
            <span>{movie.titulo}</span>
            <button onClick={handleDelete}>Eliminar</button>
            <Link to={'/update/' + movie.titulo}><button>Actualizar</button></Link>
        </div>
    )
}


export default MovieList