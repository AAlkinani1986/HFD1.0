import { Router } from 'express'
import userController from '../controllers/userController.js'

var router = Router()
router.get('/', function (req, res) {
  userController.login(req, res)
  res.render('user/login', {
    // additional locals, a custom layout, or other options can be defined here
  })
})
router.get('/newUser', function (req, res) {
  userController.register(req, res)
  res.render('user/register', {
    // additional locals, a custom layout, or other options can be defined here
  })
})
export default router
