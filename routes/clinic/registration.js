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
  router.get('/registration', async function (req, res) {
    const clinic = await ClinicController.findOne(req.session.user._id)

    if (clinic) {
      req.session.messages.push({
        text: 'welcome back' + clinic.name,
        type: 'info',
      })
      return res.redirect('/clinic/profile')
    }
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
          req.body.ClinicName,
          req.body.RegisterNumber,
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
