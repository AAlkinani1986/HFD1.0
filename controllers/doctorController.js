import { Doctor } from "../models/doctorModel.js";

export class doctorController {
  /**
   * Creating a new Doctor
   *
   * @param {firstName} firstName
   * @param {lastName} lastName
   * @param {dateOfBirth} dateOfBirth
   *  @param {registrationNumber} registrationNumber
   * @param {qualifications} qualifications
   * * @param {clinic} clinic
   *@param {languages} languages
   *@param {abn} abn
   *@param {street} street
   @param {pinCode} pinCode
   * @returns save result
   */
  static async createDoctor(
    firstName,
    lastName,
    dateOfBirth,
    registrationNumber,
    qualifications,
    clinic,
    languages,
    abn,
    phoneNumber,
    address,
    state,
    pinCode,
    doctorId
  ) {
    const doctor = new Doctor();
    doctor.firstName = firstName;
    doctor.lastName = lastName;
    doctor.dateOfBirth = dateOfBirth;
    doctor.registrationNumber = registrationNumber;
    doctor.qualifications = qualifications;
    doctor.clinic = clinic;
    doctor.languages = languages;
    doctor.abn = abn;
    doctor.address = address;
    doctor.state = state;
    doctor.pinCode = pinCode;
    doctor.doctorId = doctorId;
    const savedDoctor = await doctor.save();
    return savedDoctor;
  }
  catch(error) {
    return error;
  }

  /**
   * Finding by id
   * @param {*} id
   * @returns
   */
  static async findById(id) {
    try {
      return Doctor.findById(id).exec();
    } catch (error) {
      return error;
    }
  }

  static async findOne(Id) {
    try {
      return Doctor.findOne({ doctorId: Id }).exec();
    } catch (error) {
      return error;
    }
  }

  /**
   *
   * @param {*} id
   * @returns a user
   */
  static async getResetToken(doctorId) {
    try {
      return ResetTokenModel.findOne({ doctorId }).exec();
    } catch (error) {
      return error;
    }
  }

  /**
   * getting all Doctors
   *
   * @returns a list of users
   */
  static async getDoctors() {
    return Doctor.find().sort({ createdAt: -1 }).exec();
  }
}
