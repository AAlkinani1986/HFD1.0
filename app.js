//Import
import cookieParser from 'cookie-parser'
import path, { dirname } from 'path'
import express from 'express'
import { routers } from './routes/index.js'
import expressEjsLayouts from 'express-ejs-layouts'
import cookieSession from 'cookie-session'
import createHttpError from 'http-errors'
import { Passport } from './server/lib/passport/index.js'
export function app(config) {
  const app = express()
  const passport = Passport(config)
  // This is used to show the database connection status on the website
  app.locals.databaseStatus = config.database.status
  // Set up views
  app.use(expressEjsLayouts)

  // view engine setup
  app.set('view engine', 'ejs')
  app.use(express.static(path.join(dirname('public'))))
  /*
   * Initialize session management with cookie-session
   * ask the server to trust the session
   */
  app.set('trust proxy', 1)
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
  // see express body parses for more info
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(passport.initialize())
  app.use(passport.session())
  // middleware that restores the user from the database if `userId` is present on the session
  app.use(async (req, res, next) => {
    req.sessionOptions.maxAge =
      req.session.rememberme || req.sessionOptions.maxAge
    res.locals.user = req.user
    return next()
  })
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
  app.use('/', routers({ config }))
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
  // call routers as a function

  return app
}
