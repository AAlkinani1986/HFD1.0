import { Router } from 'express'
import multer from 'multer'
import { ClinicController } from '../../controllers/ClinicController.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/data/uploads/clinc')
  },
  filename: function (req, file, cb) {
    cb(null, req.session.user._id + '.jpg')
  },
})

const router = Router()

export function Profile() {
  router.get('/profile', async (req, res, next) => {
    const Clinic = await ClinicController.findOne(req.session.user._id)
    req.session.Clinic = Clinic
    const user = req.session.user
    res.render('clinic/profile', {
      page: 'profile Clinic',
      clinic: Clinic,
      user: user,
    })
  })
  router.post('/profile', async (req, res, next) => {
    try {
      await ClinicController.updateClinic(
        req.session.user._id,
        req.body.ClinicName,
        req.body.Phone,
        req.body.Address,
        req.body.Code,
        req.body.textbox,
      )
      req.session.messages.push({
        text: 'Your account updated successfully',
        type: 'success',
      })

      return res.redirect('/clinic/profileupdate')
    } catch (error) {
      return next(error)
    }
  })
  return router
}
