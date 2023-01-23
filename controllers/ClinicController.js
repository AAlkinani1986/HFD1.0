
import { Clinic } from '../models/ClinicModel.js'

export class ClinicController {
    /**
   * Creates
    * @param {Cname} Cname
    * @param {Rnumber} Rnumber
    * @param {ABN} ABN
    *  @param {Phone} Phone
    * @param {Date} Date
    * @param {Address} Address
    *  @param {textarea} textarea
    * @returns save result
    */
   static async createClinic(Cname, Rnumber, ABN, Phone, Date ,Address,textarea) {
     try {
       const Clinic = new Clinic()
       Clinic.Cname = Cname;
       Clinic.Rnumber = Rnumber;
       Clinic.ABN = ABN;
       Clinic.Phone = Phone;
       Clinic.Date = Date;
       Clinic.Address= Address;
       Clinic.textarea =textarea;
       const savedClinic = await Clinic.save()
       return savedClinic
     } catch (error) {
       return error
     }
   }
   /**
   * Finds a user by id
   * @param {ABN} ABN
   * @returns a user
   */
  static async findById(ABN) {
    try {
      return doctor.findById(ABN).exec();
    } catch (error) {
      return error;
    }
  }

    /**
   * @param {ABN} ABN
   * @returns a Clinic
   */
  static async getClinic() {
    return Clinic.find().sort({ createdAt: -1 }).exec()
  }

  /**
   * Delete a Clinic
   * @param {int} ABN
   * @returns
   */
  static async deleteClinic(ABN) {
    return Clinic.findByIdAndDelete(ABN)
  }

}

