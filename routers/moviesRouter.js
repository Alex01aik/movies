const bodyParser = require('body-parser')
const { Router } = require('express')
const db = require('../movies.json')
const fs = require('fs')

const moviesRouter = Router()

moviesRouter.use(bodyParser.json())

moviesRouter.route('/')
    .post(async (req, res, next) => {
        // const newMovie = {
        //     "id": db.length + 1,
        //     "name": req.body.name,
        //     "year": req.body.year,
        //     "format": req.body.year,
        //     "actors": req.body.actors
        // }
        // let dbFile = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
        // dbFile[dbFile.length] = newMovie
        // fs.writeFileSync('./movies.json', JSON.stringify(dbFile, null, 2))
        // res.status(201).json({message: "New movie added"})
        // return console.log("New movie added")
        console.log(req.body)
    })
    .get(async (req, res, next) => {
        var films = []
        if(req.body.actor)
            films = db.filter(movie => movie.actors.filter(actor => actor.toLowerCase().includes(req.body.actor.toLowerCase())).length > 0)
        if(req.body.name)
            films = db.filter(movie => movie.name.toLowerCase().includes(req.body.name.toLowerCase()))          
        res.status(200).json(films)
        return console.log(`Get films with '${req.body.name || req.body.actor}'`)
    })
    .delete(async (req, res, next) => {
        let dbFile = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
        dbFile.filter(movie => movie.id !== req.body.id)
        fs.writeFileSync('./movies.json', JSON.stringify(dbFile.filter(movie => movie.id !== req.body.id), null, 2))
        res.json({message: "Movie deleted"})
        return console.log(`Movie with id ${req.body.id} deleted `)
    })

moviesRouter.route('/all')
    .get(async (req, res, next) => {
        let sortedMovies = db.sort((a, b) => { 
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            return (nameA > nameB) ? 1 : -1
          })
        res.status(200).json(sortedMovies)
        return console.log("Sorted movies have been sent")
    })

module.exports = moviesRouter