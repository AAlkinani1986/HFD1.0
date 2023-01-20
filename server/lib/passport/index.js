import passport from 'passport'
import passportJWT, { ExtractJwt } from 'passport-jwt'
import { UserController } from '../../../controllers/UserController.js'
import local from 'passport-local'
const JWTStrategy = passportJWT.Strategy
const EXtractJWT = passportJWT.ExtractJwt
const localStorage = local.Strategy
export function Passport(config) {
  passport.use(
    new localStorage(
      {
        passReqToCallback: true,
      },
      async (req, username, password, done) => {
        try {
          const user = await UserController.findByUsername(req.body.username)
          if (!user) {
            req.session.messages.push({
              text: 'Invalid username or password!',
              type: 'danger',
            })
            return done(null, false)
          }

          if (user && !user.verified) {
            req.session.messages.push({
              text: 'Please verify your email address!',
              type: 'danger',
            })
            return done(null, false)
          }
        } catch (error) {
          return done(error)
        }
      },
    ),
  )
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.JWTSECRET,
      },
      async (jwtPayload, done) => {
        try {
          const user = await UserController.findById(jwtPayload.userId)
          return done(null, user)
        } catch (error) {
          return done(error)
        }
      },
    ),
  )
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserController.findById(id)
      return done(null, user)
    } catch (err) {
      return done(err)
    }
  })
  return passport
}
