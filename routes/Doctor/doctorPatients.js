import { Router } from "express";
import passport from "passport";
import { patientController } from "../../controllers/patientController.js";

const router = Router();

export function doctorPatients() {
  router.get("/Patient", async (req, res, next) => {
    const patient = await patientController.getPatients();
    const patientList = await Promise.all(
      patient.map(async (patient) => {
        const patientData = patient.toJSON();
        return patientData;
      })
    );
    res.render("doctor/patient", {
      page: "profile doctor",
      patient: patientList,
    });
  });

  return router;
}
