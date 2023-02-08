import { Router } from "express";
import { doctorController } from "../../controllers/doctorController.js";
// import multer from "multer";

const router = Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/data/uploads/doctor");
//   },
//   filename: function (req, file, cb) {
//     cb(null, req.session.user._id + ".jpg");
//   },
// });

// const upload = multer({ storage: storage });

export function profileDoctor() {
  router.get("/profile", async (req, res) => {
    const doctor = await doctorController.findOne(req.session.user._id);
    req.session.doctor = doctor;
    res.render("doctor/profile", {
      page: "profile doctor",
      doctor: doctor,
    });
  });
  router.post("/profile", async (req, res, next) => {
    try {
      await doctorController.updateDoctor(
        req.session.user._id,
        req.body.firstName,
        req.body.lastName,
        req.body.dateOfBirth,
        req.body.registrationNumber,
        req.body.qualifications,
        req.body.clinic,
        req.body.languages,
        req.body.abn,
        req.body.address,
        req.body.state,
        req.body.zibCode
      );
      req.session.messages.push({
        text: "Your account updated successfully",
        type: "success",
      });

      return res.redirect("/doctor/profile");
    } catch (error) {
      return next(error);
    }
  });
  return router;
}
