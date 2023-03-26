import { collection, query, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../app/firebase";


export default function Home() {
  const [isLoading, setIsloading] = useState(true)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const mo = []
      const c = collection(db, 'movies')
      const d = await getDocs(c)
      d.forEach((doc) => {
        mo.push(doc)
      })
      setMovies(mo)
      setIsloading(false)

    }
    fetchData()
  }, [])


  return(
    <div></div>
  )
}