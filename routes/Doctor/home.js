import { Router } from "express";
import passport from "passport";

const router = Router();

export function homeDoctor() {
  router.get("/Home", function (req, res) {
    res.render("doctor/Home", {
      page: "home doctor",
    });
  });

  return router;
}