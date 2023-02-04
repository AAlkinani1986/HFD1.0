import { Router } from 'express'
import multer from 'multer'
import { ClinicController } from '../../controllers/ClinicController.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/data/uploads/clinic')
  },
  filename: function (req, file, cb) {
    cb(null, req.session.user._id + '.jpg')
  },
})
const upload = multer({ storage: storage })

const router = Router()

export function registrationClinic() {
  router.get('/registration', function (req, res) {
    console.log('user', req.session.user._id)
    res.render('clinic/registration', {
      page: 'new clinic',
    })
  })
  router.post(
    '/registration',
    upload.single('clinic_img'),
    async (req, res, next) => {
      try {
        console.log('data', req.body)

        await ClinicController.createclinic(
          req.body.Clinicname,
          req.body.Registernumber,
          req.body.ABN,
          req.body.Phone,
          req.body.Date,
          req.body.Address,
          req.body.Code,
          req.body.textarea,
          req.session.user._id,
        )
        req.session.messages.push({
          text: 'Your account created successfully',
          type: 'success',
        })
        return res.redirect('/clinic/profile')
      } catch (error) {
        return next(error)
      }
    },
  )

  return router
}