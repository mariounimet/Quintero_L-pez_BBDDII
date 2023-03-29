import { deleteDoc, doc } from "firebase/firestore"
import { Link} from "react-router-dom"
import { db } from "../../app/firebase"
import styles from "./Homecard.module.css"

const Homecard = ({text, direction}) =>{
    return(
        <div>
            <Link to={direction}>
                <div className={styles.hcard}>
                    {text}
                </div>
            </Link>
        </div>
    )
}

export default Homecard