const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (request, response) => {
  response.send('DataLab Server Running')
})

app.get('/courses', (request, response) => {
    response.send(courses)
})

app.listen(port, () => {
  console.log(`DataLab server running on port ${port}`)
})