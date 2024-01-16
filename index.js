import express from "express";

const app = express()


app.get('/'), (req, res) => {
res.express('Hola mundo')

}

app.listen(3000)
console.log('Server port', 3000);