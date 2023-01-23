import { text } from "express";
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
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
  abn: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
});

// var doctorModel = mongoose.model("doctor", doctorSchema);

export const doctor = mongoose.model("doctor", doctorSchema, "doctors");
