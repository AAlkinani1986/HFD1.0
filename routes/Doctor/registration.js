import { Router } from "express";
import multer from "multer";
import { doctorController } from "../../controllers/doctorController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/data/uploads/doctor");
  },
  filename: function (req, file, cb) {
    cb(null, req.session.user._id + ".jpg");
  },
});

const upload = multer({ storage: storage });

const router = Router();

export function registrationDoctor() {
  router.get("/registration", async (req, res) => {
    if (req.session.user.occupation !== "doctor") {
      return res.redirect("/" + req.session.user.occupation + "/registration");
    }
    // res.render("doctor/registration", {
    //   page: "new doctor",
    // });
    const doctor = await doctorController.findOne(req.session.user._id);

    if (doctor) {
      req.session.messages.push({
        text: "welcome back" + doctor.firstName,
        type: "info",
      });
      return res.redirect("/doctor/profile");
    }
    res.render("doctor/registration", {
      page: "registration",
    });
  });

  router.post(
    "/registration",
    upload.single("avatar"),
    async (req, res, next) => {
      console.log(req.file);

      console.log(req.body);
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
        return res.redirect("/doctor/profile");
      } catch (error) {
        return next(error);
      }
    }
  );

  return router;
}
