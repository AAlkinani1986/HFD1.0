import { Router } from 'express'
import { ClinicController } from '../../controllers/ClinicController.js';

const router = Router()

export function Profile() {
  router.get("/profile", async (req, res, next) => {
      const Clinic = await ClinicController.findOne(req.session.user._id)
    res.render("clinic/profile", {
      page: "profile Clinic",
      clinic : Clinic
    });
  });

  router.get("/Update/:id",async (res,req,next)=>{
    try {
    await ClinicController.findbyIdAndUpdate(req.params.user._id)
     return res.render("clinic/profile",{
      page: "profile Clinic"
     })
    } catch (error) {
      return next(error)
    }
    })
  return router;
}
