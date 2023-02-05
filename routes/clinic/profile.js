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

  // router.get("/profile/:clinicId",async (req, res)=>{
  //    const Clinic = await ClinicController.findById(req.params.clinicId )

  //   res.render("clinic/profile", {
  //     page: "profile Clinic",
  //     clinic : Clinic
  //   })
  //   })
  //   router.post("/profile/:clinicId",async (req, res)=>{
  //    await ClinicController.getClinic(req.params.clinicId,
  //     req.body.Clinicname,
  //     req.body.Phone,
  //     req.body.Address, 
  //     req.body.Code)
  //   await ClinicController.findByIdAndUpdate(req.params.clinicId)
  //   Clinic.save()

  //    res.render("clinic/profile", {
  //      page: "profile Clinic"
  //    })
  //   })
  return router;
}
