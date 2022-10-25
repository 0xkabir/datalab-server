const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('DataLab Server Running')
})

app.listen(port, () => {
  console.log(`DataLab server running on port ${port}`)
})