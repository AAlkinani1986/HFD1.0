import { Router } from "express";

import { registrationDoctor } from "./registration.js";
import { homeDoctor } from "./home.js";
import { profileDoctor } from "./profile.js";
import { doctorPatients } from "./doctorPatients.js";
import { doctorList } from "./doctorList.js";

const router = Router();
export function doctorRoutes(params) {
  router.use(registrationDoctor(params));
  router.use(homeDoctor(params));
  router.use(profileDoctor(params));
  router.use(doctorPatients(params));
  router.use(doctorList(params));
  return router;
}
