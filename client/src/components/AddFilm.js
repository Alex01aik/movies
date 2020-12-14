import React, { useState } from 'react'
import {moviesAPI} from '../api/moviesAPI'

function AddFilm() {

  const [file, setFile] = useState(null)

  return (
      <div className="AddFilm">
        <h1>AddFilm</h1>
        <div>
          <label>Upload your file</label>
          <input type="file" onChange={event => setFile(event.target.files[0])}/>
        </div>
        <button type="button" onClick={() => moviesAPI.addMovieAsFile(file)}>Add</button>
      </div>
    )
  }
  
  export default AddFilm