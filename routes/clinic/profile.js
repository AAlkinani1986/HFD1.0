import { Router } from 'express'
import { ClinicController } from '../../controllers/ClinicController.js';

const router = Router()

export function Profile() {
  router.get("/profile", async (req, res, next) => {
      const Clinic = await ClinicController.findOne(req.session.user._id)
      console.log(Clinic)
    res.render("clinic/profile", {
      page: "profile Clinic",
      clinic : Clinic
    });
  });

  return router;
}
// const getProjects = () => {
//   $.get('/api/projects',(response) => {
//       if(response.statusCode==200){
//           addCards(response.data);
//       }
//   })
// }