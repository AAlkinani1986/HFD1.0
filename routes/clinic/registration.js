import { Router } from 'express'
import passport from 'passport'
import { ClinicController } from '../../controllers/ClinicController.js'

const router = Router()

export function registrationClinic() {
  router.get('/registration', function (req, res) {
    res.render('clinic/registration', {
      page: 'new clinic',
    })
  })
  router.post("/registration", async (req, res, next) => {
    try {
      console.log("data", req.body);
      
      await ClinicController.createclinic(
        req.body.Cname,
        req.body.Rnumber,
        req.body.ABN,
        req.body.Phone,
        req.body.Date,
        req.body.Address,
        req.body.Code,
        req.body.textarea,
      );
      req.session.messages.push({
        text: "Your account created successfully",
        type: "success",
      });
      return res.redirect('/clinic/profile');
    } catch (error) {
      return next(error);
    }
  });

  return router;
}

  
