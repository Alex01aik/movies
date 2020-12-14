const baseUrl = 'http://localhost:5000/movies'

export const moviesAPI = {
    getMovies: async() => {
        return await fetch(`${baseUrl}/all`)
            .then(response => response.json())
    },
    addMovieAsFile: async(file) => {
        return await fetch(`${baseUrl}/`, {method: 'POST', body: file})
            .then(response => console.log(response))
    }
}