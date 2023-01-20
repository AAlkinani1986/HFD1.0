import { Router } from 'express'
import { UserController } from '../../controllers/UserController.js'

const router = Router()
export function verification() {
  // verify users by their token
  router.get('/verify/:userId/:token', async (req, res, next) => {
    try {
      const user = await UserController.findById(req.params.userId)
      if (!user || user.verificationToken !== req.params.token) {
        req.session.messages.push({
          text: 'Invalid credentials provided!',
          type: 'danger',
        })
      } else {
        user.verified = true
        await user.save()
        req.session.messages.push({
          text: 'You have been verified!',
          type: 'success',
        })
      }
      return res.redirect('/')
    } catch (error) {
      return next(error)
    }
  })

  return router
}
