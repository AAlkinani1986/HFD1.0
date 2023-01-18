import { Router } from "express";
import passport from "passport";

const router = Router();

export function registrationDoctor() {
  router.get("/registration", function (req, res) {
    res.render("doctor/registration", {
      page: "new doctor",
    });
  });

  return router;
}
