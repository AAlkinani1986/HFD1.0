import { Router } from 'express'
import { UserController } from '../../controllers/UserController.js'

import { validation } from '../../server/middlewares/validation.js'
const router = Router()
export function resetPassword() {
  router.get('/resetPassword', (req, res) => {
    res.render('user/resetPassword', {
      page: 'Reset password',
    })
  })
  /** post route to create the password reset token */
  router.post(
    '/resetPassword',
    validation.validateEmail,
    async (req, res, next) => {
      try {
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
          const user = await UserController.findByEmail(req.body.email)
          if (user) {
            // eslint-disable-next-line no-unused-vars
            const resetToken = await UserController.createPasswordResetToken(
              user.id,
            )
          }
        }

        if (errors.length) {
          // Render the page again and show the errors
          return res.render('user/resetPassword', {
            page: 'resetPassword',
            data: req.body,
            errors,
          })
        }
        req.session.messages.push({
          text:
            'If we found a matching user, you will receive a password reset link.',
          type: 'info',
        })
        /**
         * On success, redirect the user to some other page, like the login page
         */
        return res.redirect('/')
      } catch (error) {
        return next(error)
      }
    },
  )

  /**
   * GET route, verifying  the reset token after that  show the form to change the password for the request user
   */
  router.get('/changePassword/:userId/:resetToken', async (req, res, next) => {
    try {
      /**
       *  Validate the token and render the password change form if valid
       */

      const resetToken = await UserController.verifyPasswordRestToken(
        req.params.userId,
        req.params.resetToken,
      )
      if (!resetToken) {
        req.session.messages.push({
          text: 'The provided token is invalid!',
          type: 'danger',
        })

        return res.redirect('/user/resetPassword')
      }
      req.session.userId = req.params.userId
      req.session.resetToken = req.params.resetToken

      return res.redirect('/user/changePassword')
    } catch (err) {
      return next(err)
    }
  })
  /** */

  router.get('/changePassword', (req, res) => {
    res.render('user/changePassword', {
      page: 'resetPassword',
      userId: req.session.userId,
      resetToken: req.session.resetToken,
    })
  })
  router.post(
    '/changePassword/:userId/:resetToken',
    validation.validatePassword,
    validation.validatePasswordMatch,
    async (req, res, next) => {
      try {
        /**
         * @todo: Validate the provided credentials
         */
        const resetToken = await UserController.verifyPasswordRestToken(
          req.params.userId,
          req.params.resetToken,
        )
        if (!resetToken) {
          req.session.messages.push({
            text: 'The provided token is invalid!',
            type: 'danger',
          })
          return res.redirect('/user/resetPassword')
        }
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
        }

        if (errors.length) {
          // Render the page again and show the errors

          return res.redirect('/user/changePassword')
        }

        /**
         * Change the password; remove the token and redirect to the login
         */
        await UserController.changePassword(
          req.params.userId,
          req.body.password,
        )
        await UserController.deletePasswordResetToken(req.params.resetToken)
        req.session.messages.push({
          text: 'Your password was successfully changed!',
          type: 'success',
        })
        return res.redirect('/')
      } catch (err) {
        return next(err)
      }
    },
  )
  return router
}
