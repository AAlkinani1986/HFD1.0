import { Router } from 'express'
import multer from 'multer'
import { patientController } from '../../controllers/patientController.js'

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/data/uploads/patient')
//   },
//   filename: function (req, file, cb) {
//     cb(null, req.session.user._id + '.jpg')
//   },
// })
const upload = multer({ dest: 'public/data/uploads/doctor' })
const router = Router()
export function registration() {
  router.get('/registration', async (req, res) => {
    const patient = await patientController.findOne(req.session.user._id)

    if (patient) {
      req.session.messages.push({
        text: 'welcome back' + patient.firstName,
        type: 'info',
      })
      return res.redirect('/patient/profile')
    }
    res.render('patient/registration', {
      page: 'Registration',
    })
  })
  router.post(
    '/registration',
    upload.single('avatar'),
    async (req, res, next) => {
      console.log(req.file)

      console.log(req.body)
      try {
        await patientController.createPatient(
          req.session.user._id,
          req.body.firstName,
          req.body.lastName,
          req.body.middleName,
          req.body.fullName,
          req.body.dateOfBirth,
          req.body.address,
          req.body.height,
          req.body.weight,
          req.body.gender,
          req.body.BMI,
          req.body.medicalHistory,
          req.body.medicareNumber,
          req.body.validDate,
          req.body.phoneNumber,
        )
        req.session.messages.push({
          text: 'Your account created successfully',
          type: 'success',
        })
        return res.redirect('/patient/profile')
      } catch (error) {
        return next(error)
      }
    },
  )
  return router
}
