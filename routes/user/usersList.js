import { Router } from 'express'
import { UserController } from '../../controllers/UserController.js'
const router = Router()
export function usersList() {
  router.get('/users', async (req, res, next) => {
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
      return res.render('user/users', {
        page: 'users',
        users: userList,
      })
    } catch (error) {
      return next(error)
    }
  })
  router.get('/delete/:id', async (req, res, next) => {
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
  return router
}
