import { Router } from 'express'
import multer from 'multer'
import { patientController } from '../../controllers/patientController.js'
import { validation } from '../../server/middlewares/validation.js'
const router = Router()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/data/uploads/patient')
  },
  filename: function (req, file, cb) {
    cb(null, req.session.user._id + '.jpg')
  },
})

const upload = multer({ storage: storage })

export function profile() {
  router.get('/profile', async (req, res, next) => {
    const patient = await patientController.findOne(req.session.user._id)
    req.session.patient = patient
    res.render('patient/profile', {
      page: 'Profile',
      patient: patient,
    })
  })
  router.post('/profile', upload.single('avatar'), async (req, res, next) => {
    try {
      const errors = []
      if (req.body.firstName === '') {
        errors.push('The first name must be filled')
        req.session.messages.push({
          text: 'The first name must be filled',
          type: 'danger',
        })
      }
      if (req.body.lastName === '') {
        errors.push('The last name must be filled')
        req.session.messages.push({
          text: 'The last name must be filled',
          type: 'danger',
        })
      }
      if (errors.length) {
        // Render the page again and show the error
        req.session.messages = []
        return res.status(302).render('patient/profile', {
          page: 'patient',
          patient: req.session.patient,
          errors,
        })
      }
      await patientController.updatePatient(
        req.session.user._id,
        req.body.firstName,
        req.body.lastName,
        req.body.middleName,
        req.body.fullName,
        req.body.dateOfBirth,
        req.body.Address,
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
        text: 'Your account updated successfully',
        type: 'success',
      })

      return res.redirect('/patient/profile')
    } catch (error) {
      return next(error)
    }
  })

  return router
}
