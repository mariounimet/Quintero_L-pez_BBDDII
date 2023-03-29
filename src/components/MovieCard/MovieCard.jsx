import { deleteDoc, doc } from "firebase/firestore"
import { Link} from "react-router-dom"
import { db } from "../../app/firebase"
import styles from "./MovieCard.module.css"

const MovieCard = ({tittle, sinopsis, direction}) =>{
    return(
        <div className={styles.movCard}>
            <h1>{tittle}</h1>
            <p>{sinopsis}</p>
            <Link to={direction}>
                Ver Película
            </Link>
        </div>
    )
}

export default MovieCard