require('dotenv').config()

const express = require('express')
// const cors = require('cors')

const app = express()

// const whitelist = [
//   'http://localhost:5000',
//   'https://colitas-felices.vercel.app'
// ]

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true)
//     if (whitelist.indexOf(origin) === -1) {
//       const reason =
//         'The CORS policy for this site does not ' +
//         'allow access from the specified Origin.'
//       return callback(new Error(reason), false)
//     }
//     return callback(null, true)
//   }
// }

// app.use(cors(corsOptions))

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
