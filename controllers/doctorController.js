// import { doc } from "prettier";
import { Doctor } from '../models/DoctorModel.js'

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
    phoneNumber,
    address,
    state,
    pinCode,
  ) {
    const doctor = new Doctor()
    doctor.firstName = firstName
    doctor.lastName = lastName
    doctor.dateOfBirth = dateOfBirth
    doctor.registrationNumber = registrationNumber
    doctor.qualifications = qualifications
    doctor.languages = languages
    doctor.abn = abn
    doctor.address = address
    doctor.state = state
    doctor.pinCode = pinCode
    const savedDoctor = await doctor.save()
    return savedDoctor
  }
  catch(error) {
    return error
  }
}
