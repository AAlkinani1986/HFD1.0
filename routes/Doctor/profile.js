import { Router } from "express";
import passport from "passport";

const router = Router();

export function profileDoctor() {
  router.get("/Profile", function (req, res) {
    res.render("doctor/Profile", {
      page: "profile doctor",
    });
  });

  return router;
}
