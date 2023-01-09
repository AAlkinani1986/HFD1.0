//Import
import { set, connect } from 'mongoose'
import { config } from 'dotenv'
import path, { dirname } from 'path'
import express from 'express'
import router from './routes/ProjectRoute.js'

var app = express()
app.use('/', router)
app.use(express.static(path.join(dirname('public'))))
app.set('view engine', 'ejs')
config()
// Mongo DB connection
const database = process.env.MONGODB_URI
set('strictQuery', false)
connect(database, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log('DataBase connect'))
  .catch((err) => console.log(err))
const PORT = process.env.PORT || 4111
app.listen(PORT, console.log('Server don start for port: ' + PORT))
