import { Router } from 'express'

import { UserController } from '../../controllers/UserController.js'
import { validation } from '../../server/middlewares/validation.js'

const router = Router()

export function registrationRouter() {
  /**
   * Get request show the registration form for users
   */
  router.get('/newUser', function (req, res) {
    res.render('user/register', {
      page: 'registration',
    })
  })
  router.post(
    '/register',
    validation.validatePassword,
    validation.validateEmail,
    validation.validatePasswordMatch,
    validation.validateUsername,
    validation.validateOccupied,
    async (req, res, next) => {
      try {
        console.log('data', req.body)
        const validationErrors = validation.validationResult(req)
        const errors = []
        if (!validationErrors.isEmpty()) {
          validationErrors.errors.forEach((error) => {
            errors.push(error.param)
            req.session.messages.push({
              text: error.msg,
              type: 'danger',
            })
          })
        } else {
          const findByEmail = await UserController.findByEmail(req.body.email)
          const findByUsername = await UserController.findByUsername(
            req.body.username,
          )
          console.log(findByEmail, findByUsername)
          if (findByUsername || findByEmail) {
            errors.push('email')
            errors.push('username')
            req.session.messages.push({
              text: 'The given the username or email address already exist!',
              type: 'danger',
            })
          }
        }
        /**
         * check if there are any errors if does
         * render the page and show the errors
         * pass the user data again so the user don't need to enter everything
         */
        if (errors.length) {
          // Render the page again and show the errors
          return res.render('user/register', {
            page: 'registration',
            data: req.body,
            errors,
          })
        }
        await UserController.createUser(
          req.body.username,
          req.body.email,
          req.body.password,
          req.body.occupied,
        )
        req.session.messages.push({
          text: 'Your account created successfully',
          type: 'success',
        })
        return res.redirect('/')
      } catch (error) {
        return next(error)
      }
    },
  )
  return router
}
