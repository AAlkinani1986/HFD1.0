import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },

  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  Gender: {
    type: String,
  },
  BMI: {
    type: String,
  },
  medicareNum: {
    type: String,
  },
  fullName: {
    type: String,
  },
  medicareEXP: {
    type: String,
  },
  medicalHistory: {
    type: String,
  },
  patientId: {
    type: String,
  },
});
export const Patient = mongoose.model("patient", patientSchema, "patients");
