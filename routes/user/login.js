import { Router } from 'express'
import passport from 'passport'

const router = Router()

export function loginRouter(params) {
  router.get('/login', function (req, res) {
    res.render('user/login', { page: 'login' })
  })
  /**
   * POST route to process the login form or display it again along with an error message in case validation fails
   */

  router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/',
    }),
    async (req, res, next) => {
      try {
        /**
         * @todo: Log the user in by saving the userid to the session and redirect to the index page
         * @todo: Don't forget about 'Remember me'!
         */
        req.session.messages.push({
          text: 'You are logged in now!',
          type: 'success',
        })
        console.log('use_id', req.session.user)
        const user = req.session.user
        if (req.body.remember) {
          req.sessionOptions.maxAge = 24 * 60 * 60 * 1000 * 14
          req.session.rememberme = req.sessionOptions.maxAge
        } else {
          req.session.rememberme = null
        }
        if (user.occupation === 'admin') return res.redirect('/user/users')
        else {
          return res
            .status(200)
            .redirect('/' + user.occupation + '/registration')
        }
      } catch (err) {
        return next(err)
      }
    },
  )

  /**
   * GET route to log a user out
   * @todo: Implement
   */
  router.get('/logout', (req, res, next) => {
    req.logout()
    req.session.rememberme = null
    req.session.messages.push({
      text: 'You are logged out now!',
      type: 'info',
    })
    res.redirect('/')
  })

  return router
}
