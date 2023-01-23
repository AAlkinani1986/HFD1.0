import mongoose from 'mongoose'

const ClinicSchema = mongoose.Schema({
  Cname: {
    type: String,
    required: true,
  },
  Rnumber: {
    type: Number,
    required: true,
  },
  ABN: {
    type: Number,
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
  textarea: {
    type: String,
    required: true,
  },
})

export const Clinic = mongoose.model('clinic', ClinicSchema, 'clinics')
