import { Router } from "express";
import { doctorController } from "../../controllers/doctorController.js";

const router = Router();

export function profileDoctor() {
  router.get("/profile", async (req, res) => {
    const doctor = await doctorController.findOne(req.session.user._id);

    res.render("doctor/profile", {
      page: "profile doctor",
      doctor: doctor,
    });
  });

  return router;
}
