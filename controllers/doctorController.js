// import { doc } from "prettier";
import { doctor } from "../models/DoctorModel.js";

export class doctorController {
  /**
   * Creates a new user
   *
   * @param {firstName} firstName
   * @param {lastName} lastName
   * @param {dateOfBirth} dateOfBirth
   *  @param {registrationNumber} registrationNumber
   * @param {qualifications} qualifications
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
    languages,
    abn,
    street,
    pinCode
  ) {
    try {
      const doctor = new doctor();
      doctor.firstName = firstName;
      doctor.lastName = lastName;
      doctor.dateOfBirth = dateOfBirth;
      doctor.registrationNumber = registrationNumber;
      doctor.qualifications = qualifications;
      doctor.languages = languages;
      doctor.abn = abn;
      doctor.street = street;
      doctor.pinCode = pinCode;
      const savedDoctor = await doctor.save();
      return savedDoctor;
    } catch (error) {
      return error;
    }
  }

  /**
   * Finds a user by id
   * @param {registrationNumber} registrationNumber
   * @returns a user
   */
  static async findById(registrationNumber) {
    try {
      return doctor.findById(registrationNumber).exec();
    } catch (error) {
      return error;
    }
  }

  static async getDoctor() {
    return doctor.find().sort({ createdAt: -1 }).exec();
  }

  /**
   * Delete a user
   * @param {int} registrationNumber
   * @returns
   */
  static async deleteDoctor(registrationNumber) {
    return User.findByIdAndDelete(registrationNumber);
  }
}
