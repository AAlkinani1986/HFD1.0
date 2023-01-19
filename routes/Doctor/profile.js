import { Router } from "express";
import passport from "passport";

const router = Router();

export function profileDoctor() {
  router.get("/profile", function (req, res) {
    res.render("doctor/profile", {
      page: "profile doctor",
    });
  });

  return router;
}
