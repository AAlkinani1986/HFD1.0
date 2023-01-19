import { Router } from "express";
import passport from "passport";

const router = Router();

export function doctorPatients() {
  router.get("/Patient", function (req, res) {
    res.render("doctor/patient", {
      page: "profile doctor",
    });
  });

  return router;
}
