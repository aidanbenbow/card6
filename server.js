import express from 'express'


const app = express()


app.use(express.static('public'))
app.use(express.json())


app.listen(8000)