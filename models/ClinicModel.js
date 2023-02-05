import mongoose from 'mongoose'

const ClinicSchema = mongoose.Schema({
  ClinicName: {
    type: String,
    required: true,
  },
  RegisterNumber: {
    type: Number,
    required: true,
  },
  ABN: {
    type: String,
    required: true,
    index: { unique: true },
  },
  Phone: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Code: {
    type: Number,
    required: true,
  },
  textarea: {
    type: String,
    required: true,
  },
  clinicId: {
    type: String,
  },
})

export const Clinic = mongoose.model('clinic', ClinicSchema, 'clinics')