import { Router } from "express";

import { registrationDoctor } from "./registration.js";
import { profileDoctor } from "./profile.js";

const router = Router();
export function doctorRoutes(params) {
  router.use(registrationDoctor(params));
  router.use(profileDoctor(params));
  return router;
}
