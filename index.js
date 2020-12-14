const express = require('express')
const cors = require('cors')
const moviesRouter = require('./routers/moviesRouter')

const app = express()

app.use(cors())
app.use('/movies', moviesRouter)
    .listen(5000, () => console.log("Server is runnung"))