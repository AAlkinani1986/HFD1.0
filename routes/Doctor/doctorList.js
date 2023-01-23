import { Router } from "express";
import passport from "passport";

const router = Router();

export function doctorList() {
  router.get("/doctorList", function (req, res) {
    res.render("doctor/doctorList", {
      page: "doctor List",
    });
  });

  return router;
}
