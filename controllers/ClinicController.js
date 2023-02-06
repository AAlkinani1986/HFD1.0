import { Clinic } from "../models/ClinicModel.js";

export class ClinicController {
  /**
   * Creates
   * @param {Clinicname} Clinicname
   * @param {Registernumber} Registernumber
   * @param {ABN} ABN
   *  @param {Phone} Phone
   * @param {Date} Date
   * @param {Address} Address
   * @param {Code} Code
   * @param {textarea} textarea
   * @param {clinicId} clinicId
   * @returns save result
   */
  static async createclinic(
    Clinicname,
    Registernumber,
    ABN,
    Phone,
    Date,
    Address,
    Code,
    textarea,
    clinicId
  ) {
    const clinic = new Clinic();
    clinic.Clinicname = Clinicname;
    clinic.Registernumber = Registernumber;
    clinic.ABN = ABN;
    clinic.Phone = Phone;
    clinic.Date = Date;
    clinic.Address = Address;
    clinic.Code = Code;
    clinic.textarea = textarea;
    clinic.clinicId = clinicId;
    const savedClinic = await clinic.save();
    return savedClinic;
  }
  catch(error) {
    return error;
  }
  /**
   * Get all users
   *
   * @returns a list of users
   */
  static async findOne(Id) {
    try {
      return Clinic.findOne({ clinicId: Id }).exec();
    } catch (error) {
      return error;
    }
  }
  /**
   * Finds a user by id
   * @param {*} clinicId
   * @returns a user
   */
  static async findById(clinicId) {
    try {
      return Clinic.findById(clinicId).exec();
    } catch (error) {
      return error;
    }
  }

  /**
   * Finds a user by id
   * @param {*} clinicId
   * @returns a user
   */
  static async findByIdAndUpdate(clinicId) {
    try {
      return Clinic.findByIdAndUpdate(clinicId).exec();
    } catch (error) {
      return error;
    }
  }
  static async getClinic() {
    return Clinic.find().sort({ createdAt: -1 }).exec();
  }
}
