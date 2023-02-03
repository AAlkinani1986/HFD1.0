import { Router } from 'express'
import { UserController } from '../../controllers/UserController.js'
import { ensureLoggedIn } from 'connect-ensure-login'
const router = Router()
export function usersList() {
  router.get('/users', ensureLoggedIn('/'), async (req, res, next) => {
    if (req.session.user.occupation !== 'admin') {
      return res.status(302).redirect('/')
    }

    try {
      const users = await UserController.getUsers()
      const userList = await Promise.all(
        users.map(async (user) => {
          const userData = user.toJSON()
          const resetToken = await UserController.getResetToken(user.id)
          if (resetToken && resetToken.token) {
            userData.resetToken = resetToken.token
          }
          return userData
        }),
      )
      return res.status(200).render('user/users', {
        page: 'users',
        users: userList,
      })
    } catch (error) {
      return next(error)
    }
  })
  router.get('/delete/:id', ensureLoggedIn('/'), async (req, res, next) => {
    // console.log('u', req.session)
    if (req.session.user.occupation !== 'admin') {
      return res.status(302).redirect('/')
    }
    try {
      await UserController.deleteUser(req.params.id)
      req.session.messages.push({
        text: 'The user was deleted successfully',
        type: 'info',
      })
      return res.redirect('/user/users')
    } catch (error) {
      return next(error)
    }
  })
  router.delete(
    '/delete/:username',
    ensureLoggedIn('/'),
    async (req, res, next) => {
      if (req.session.user.occupation !== 'admin') {
        return res.status(302).redirect('/')
      }
      try {
        await UserController.deleteUserByUsername(req.params.username)
        req.session.messages.push({
          text: 'The user was deleted successfully',
          type: 'info',
        })
        return res.redirect('/user/users')
      } catch (error) {
        return next(error)
      }
    },
  )
  return router
}
