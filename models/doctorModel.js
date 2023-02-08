import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  registrationNumber: {
    type: Number,
    required: true,
    index: { unique: true },
  },
  qualifications: {
    type: String,
  },
  clinic: {
    type: String,
  },
  languages: {
    type: String,
  },
  abn: {
    type: String,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  zibCode: {
    type: String,
  },
  doctorId: {
    type: String,
  },
});

export const Doctor = mongoose.model("doctor", doctorSchema, "doctors");
