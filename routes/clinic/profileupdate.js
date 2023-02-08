import { Router } from 'express'
import multer from 'multer'
import { ClinicController } from '../../controllers/ClinicController.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/data/uploads/clinc')
  },
  filename: function (req, file, cb) {
    cb(null, req.session.user._id + '.jpg')
  },
})

const router = Router()

export function profileupdate() {
    router.get("/profileupdate", async (req, res, next) => {
        const Clinic = await ClinicController.findOne(req.session.user._id)  
      res.render("clinic/profileupdate", {
        page: "profile Clinic",
        clinic : Clinic
      });
    }); 
    return router
}