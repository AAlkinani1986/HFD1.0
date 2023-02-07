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
  
  router.post("/profile",
  ClinicController.getClinic,
  async (req, res)=>{
    try{
    const Clinic =await ClinicController.UpdateProfile(req.params.ABN,
      req.params.Clinicname,
      req.params.Phone,
      req.params.Address,
      req.params.Code,
      req.params.textarea)
    console.log(Clinic)
    Clinic.Clinicname = Clinicname
   Clinic.save()
   req.session.messages.push({
    text: 'Your account Update successfully',
    type: 'success',
  })
    return res.render("clinic/profile", {
      page: "profile Clinic"
    })
  }catch (error) {
    return next(error)
  }
   })

   router.get("/profile/:ABN",async (req, res)=>{
    const Clinic = await ClinicController.findOneByABN(req.params.ABN )

   res.render("clinic/profileupdate", {
     page: "profile Clinic",
     clinic : Clinic
   })
   })
  
  return router;
}
