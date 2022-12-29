//js
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
// Mongo DB connection
const database = process.env.MONGODB_URI
mongoose.set('strictQuery', false)
mongoose
  .connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DataBase connect'))
  .catch((err) => console.log(err))
const PORT = process.env.PORT || 4111
app.listen(PORT, console.log('Server don start for port: ' + PORT))
