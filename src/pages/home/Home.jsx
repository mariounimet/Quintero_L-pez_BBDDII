import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../app/firebase";
import Homecard from "../../components/HomeCard/Homecard";
import styles from "./Home.module.css"


export default function Home() {
  const [isLoading, setIsloading] = useState(true)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    // async function fetchData() {
    //   const mo = []
    //   const c = collection(db, 'movies')
    //   const d = await getDocs(c)
    //   d.forEach((doc) => {
    //     mo.push(doc)
    //   })
    //   setMovies(mo)
    //   setIsloading(false)

    //}

  }, [])

  return(
    <div className={styles.homeDiv}>
        <h1>Unimet Movies</h1>

        <Homecard text={"Login"} direction={"/login"} />
        <Homecard text={"Sign up"} direction={"/signup"} />
        <Homecard text={"Buy movies"} direction={"/reserva"} />
        <Homecard text={"Your movies"} direction={"/dashboard"} />
    </div>
  )
}