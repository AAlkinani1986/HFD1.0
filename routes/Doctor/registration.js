import { Router } from "express";
import { doctorController } from "../../controllers/doctorController.js";

const router = Router();

export function registrationDoctor() {
  router.get("/registration", function (req, res) {
    console.log("user", req.session.user._id);
    res.render("doctor/registration", {
      page: "new doctor",
    });
  });

  router.post("/registration", async (req, res, next) => {
    try {
      console.log("data", req.body);
      await doctorController.createDoctor(
        req.body.firstName,
        req.body.lastName,
        req.body.dateOfBirth,
        req.body.registrationNumber,
        req.body.qualifications,
        req.body.clinic,
        req.body.languages,
        req.body.abn,
        req.body.phoneNumber,
        req.body.address,
        req.body.state,
        req.body.zibCode,
        req.session.user._id
      );

      // const validationErrors = validation.validationResult(req);
      // const errors = [];
      // if (!validationErrors.isEmpty()) {
      //   validationErrors.errors.forEach((error) => {
      //     errors.push(error.param);
      //     req.session.messages.push({
      //       text: error.msg,
      //       type: "danger",
      //     });
      //   });
      // } else {
      //   const findByEmail = await UserController.findByEmail(req.body.email);
      //   const findByUsername = await UserController.findByUsername(
      //     req.body.username
      //   );
      //   console.log(findByEmail, findByUsername);
      //   if (findByUsername || findByEmail) {
      //     errors.push("email");
      //     errors.push("username");
      //     req.session.messages.push({
      //       text: "The given the username or email address already exist!",
      //       type: "danger",
      //     });
      //   }
      // }
      /**
       * check if there are any errors if does
       * render the page and show the errors
       * pass the user data again so the user don't need to enter everything
       */
      // if (errors.length) {
      //   // Render the page again and show the errors
      //   return res.render("user/register", {
      //     page: "registration",
      //     data: req.body,
      //     errors,
      //   });
      // }

      req.session.messages.push({
        text: "Your account created successfully",
        type: "success",
      });
      return res.redirect("/doctor/registration");
    } catch (error) {
      return next(error);
    }
  });

  return router;
}
