import { Router } from "express";
import userController from "../controllers/userController.js";

var router = Router();
router.get("/", function (req, res) {
  userController.login(req, res);
  res.render("user/login", {
    // additional locals, a custom layout, or other options can be defined here
  });
});
router.get("/newUser", function (req, res) {
  userController.register(req, res);
  res.render("user/register", {
    // additional locals, a custom layout, or other options can be defined here
  });
});

router.get("/newDoctor", function (req, res) {
  userController.register(req, res);
  res.render("doctor/doctor", {
    // additional locals, a custom layout, or other options can be defined here
  });
});
router.get("/doctorProfile", function (req, res) {
  userController.register(req, res);
  res.render("doctor/Profile", {
    // additional locals, a custom layout, or other options can be defined here
  });
});
router.get("/doctorHome", function (req, res) {
  userController.register(req, res);
  res.render("doctor/Home", {
    // additional locals, a custom layout, or other options can be defined here
  });
});
router.get("/NewClinic", function (req, res) {
  userController.register(req, res);
  res.render("clinic/Register", {
    // additional locals, a custom layout, or other options can be defined here
  });
});
export default router;
