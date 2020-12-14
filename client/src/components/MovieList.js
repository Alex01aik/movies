import React, {useState, useEffect} from 'react'
import { moviesAPI } from '../api/moviesAPI'

function MovieList() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      moviesAPI.getMovies()
      .then(response => setMovies(response))
    }, [])


    return (
      <div className="MovieList">
        <h1>MovieList</h1>
        {movies.map( movie => <div key={movie.id}>{movie.name}</div>)}
      </div>
    )
  }
  
  export default MovieList