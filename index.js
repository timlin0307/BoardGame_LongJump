const path = require('path')

const express = require('express')
const cookieParser = require('cookie-parser')

const db = require('./db')

const app = express()

const hostname = '127.0.0.1';
const port = 9453;

app.use(cookieParser())

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.redirect(301, '/static/before_index.html')
})

app.get("/cookie/", (req, res) => {
    console.log(req.query)
    for (const property in req.query) {
        // console.log(`${property}: ${req.query[property]}`);
        res.cookie(property, req.query[property])
        res.end("cookie updated")   
      }
})

app.use(express.json())

app.post("/api/create/", (req, res) => {
    db.models.Message.create({
        pseudo: req.body.pseudo,
        score: req.body.score
    }).then((message) => {
        res.json(message)
    }).catch((err) => {
        res.end("error")
        console.log(err)
    })
})

app.get("/api/read/", (req, res) => {
    if ("pseudo" in req.query) {
        db.models.Message.findAll({
            "where": {
                "pseudo": req.query.pseudo
            }
        }).then((message) => {
            res.json(message)
        }).catch((err) => {
            res.end("error")
            console.log(err)
        })
    } else {
        db.models.Message.findAll({
        }).then((message) => {
            res.json(message)
        }).catch((err) => {
            res.end("error")
            console.log(err)
        })    
    }
})

app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("<html><head><title>404</title></head><body><h1>Et c'est le 404.</h1><p> ressource non trouvée</p></body></html>");
})

app.use((req, res, next) => {
    console.log(req.cookies)
    next()
})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
