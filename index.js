// console.log("Neel Bhatt");
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/twitter', (req, res) => {
  res.send('<h1>Neel bhatt Twittter Page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
