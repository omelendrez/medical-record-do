require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('uploads'))

require('./routes')(app)

app.get('*', (req, res) => {
  res.send({ message: "Welcome to colitas-felices documents' api 👌" })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
