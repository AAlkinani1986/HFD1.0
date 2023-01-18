//Import
import cookieParser from 'cookie-parser'
import { set, connect } from 'mongoose'
import { config } from 'dotenv'
import path, { dirname } from 'path'
import express from 'express'
import { routers } from './routes/index.js'
import expressEjsLayouts from 'express-ejs-layouts'
import cookieSession from 'cookie-session'
import createHttpError from 'http-errors'
import pino from 'pino'
import PinoPretty from 'pino-pretty'
const logger = pino(PinoPretty())
var app = express()
app.use(expressEjsLayouts)
config()
app.use('/', routers({ config }))
app.use(express.static(path.join(dirname('public'))))
app.set('view engine', 'ejs')
app.use(cookieParser())
app.set('trust proxy', 1)
// Initialize session management with cookie-session
app.use(
  cookieSession({
    name: 'session',
    keys: ['Ghdur687399s7w', 'hhjjdf89s866799'],
    resave: false,
    saveUninitialized: true,
    sameSite: 'lax',
    maxAge: null,
  }),
)

// This sets up 'flash messaging'
// With that, we can store messages to the user in the session
// and these messages will then be shown on the webpage and
// deleted from the session once displayed.
// Look into `/views/partials/messages.ejs`to see how this works.
app.use(async (req, res, next) => {
  // Set up flash messaging
  if (!req.session.messages) {
    req.session.messages = []
  }
  res.locals.messages = req.session.messages
  return next()
})
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createHttpError.NotFound('this page not found 404'))
})
// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
// Mongo DB connection
const database = process.env.MONGODB_URI
set('strictQuery', false)
connect(database, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => logger.info('Connected to MongoDB'))
  .catch((err) => console.log(err))
const PORT = process.env.PORT || 4111
app.listen(PORT, console.log('Server don start for port: ' + PORT))
