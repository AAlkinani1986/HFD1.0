import { Patient } from '../models/PatientModel.js'
/** */
export class patientController {
  /**
   * * Create a new patient
   * @param {*} patientId
   * @param {*} firstName
   * @param {*} lastName
   * @param {*} middleName
   * @param {*} fullName
   * @param {*} dateOfBirth
   * @param {*} address
   * @param {*} hight
   * @param {*} weight
   * @param {*} Gender
   * @param {*} BMI
   * @param {*} medicalHistory
   * @param {*} medicareNum
   * @param {*} medicareEXP
   * @param {*} phoneNumber
   * @returns  save result
   */
  static async createPatient(
    patientId,
    firstName,
    lastName,
    middleName,
    fullName,
    dateOfBirth,
    address,
    height,
    weight,
    Gender,
    BMI,
    medicalHistory,
    medicareNum,
    medicareEXP,
    phoneNumber,
  ) {
    try {
      const patient = new Patient()
      patient.patientId = patientId
      patient.firstName = firstName
      patient.lastName = lastName
      patient.middleName = middleName
      patient.fullName = fullName
      patient.dateOfBirth = dateOfBirth
      patient.address = address
      patient.height = height
      patient.weight = weight
      patient.Gender = Gender
      patient.BMI = BMI
      patient.medicalHistory = medicalHistory
      patient.medicareNum = medicareNum
      patient.medicareEXP = medicareEXP
      patient.phoneNumber = phoneNumber
      const newPatient = await patient.save()
      return newPatient
    } catch (error) {
      return error
    }
  }
  static async updatePatient(
    patientId,
    firstName,
    lastName,
    middleName,
    fullName,
    dateOfBirth,
    address,
    height,
    weight,
    Gender,
    BMI,
    medicalHistory,
    medicareNum,
    medicareEXP,
    phoneNumber,
  ) {
    try {
      await Patient.findOneAndUpdate(
        { patientId: patientId },
        {
          $set: {
            firstName,
            lastName,
            middleName,
            fullName,
            dateOfBirth,
            address,
            height,
            weight,
            Gender,
            BMI,
            medicalHistory,
            medicareNum,
            medicareEXP,
            phoneNumber,
          },
        },
      )
      return true
    } catch (error) {
      return error
    }
  }
  static async findOne(Id) {
    try {
      return Patient.findOne({ patientId: Id }).exec()
    } catch (error) {
      return error
    }
  }

  static async getPatients() {
    return Patient.find().sort({ createdAt: -1 }).exec()
  }
}
