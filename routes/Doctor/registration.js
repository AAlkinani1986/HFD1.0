import { Router } from 'express'
import multer from 'multer'
import { doctorController } from '../../controllers/doctorController.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/data/uploads/doctor')
  },
  filename: function (req, file, cb) {
    cb(null, req.session.user._id + '.jpg')
  },
})

const upload = multer({ storage: storage })

const router = Router()

export function registrationDoctor() {
  router.get('/registration', async (req, res) => {
    if (req.session.user.occupation !== 'doctor') {
      return res.redirect('/' + req.session.user.occupation + '/registration')
    }

    const doctor = await doctorController.findOne(req.session.user._id)

    if (doctor) {
      req.session.messages.push({
        text: 'welcome back' + doctor.firstName,
        type: 'info',
      })
      return res.redirect('/doctor/profile')
    }
    res.render('doctor/registration', {
      page: 'registration',
    })
  })

  router.post(
    '/registration',
    upload.single('avatar'),
    async (req, res, next) => {
      try {
        await doctorController.createDoctor(
          req.body.firstName,
          req.body.lastName,
          req.body.dateOfBirth,
          req.body.registrationNumber,
          req.body.qualifications,
          req.body.clinic,
          req.body.languages,
          req.body.abn,
          req.body.phoneNumber,
          req.body.address,
          req.body.state,
          req.body.zibCode,
          req.session.user._id,
        )

        req.session.messages.push({
          text: 'Your account created successfully',
          type: 'success',
        })
        return res.redirect('/doctor/profile')
      } catch (error) {
        return next(error)
      }
    },
  )

  return router
}
