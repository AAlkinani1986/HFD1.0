import mongoose from 'mongoose'
import crypto from 'crypto'

// export user module

// users schema defined
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, // deleting white spaces and trailing whitespace
      index: { unique: true }, // the username should be unique
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: { unique: true }, // email must be unique
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // minimum length 8 characters
      trim: true,
    },
    occupation: { type: String, required: true },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: true,
      index: true,
      unique: true,
      default: () => crypto.randomBytes(20).toString('hex'),
    },
  },
  {
    timestamps: true,
  },
)
export const User = mongoose.model('HFD', userSchema, 'users')
