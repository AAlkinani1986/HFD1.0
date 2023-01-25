import { Router } from "express";
import { doctorController } from "../../controllers/doctorController.js";
import { ensureLoggedIn } from "connect-ensure-login";
import passport from "passport";

const router = Router();

export function doctorList() {
  router.get("/doctorList", async (req, res, next) => {
    const doctors = await doctorController.getDoctors();
    const doctorList = await Promise.all(
      doctors.map(async (doctor) => {
        const doctorData = doctor.toJSON();
        const resetToken = await doctorController.getResetToken(doctor.id);
        if (resetToken && resetToken.token) {
          userData.resetToken = resetToken.token;
        }
        return doctorData;
      })
    );
    res.render("doctor/doctorList", {
      page: "doctor List",
      doctors: doctorList,
    });
  });

  return router;
}
