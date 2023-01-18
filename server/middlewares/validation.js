import { body, validationResult } from 'express-validator'
const validatePassword = body('password')
  .isLength({ min: 8 })
  .trim()
  .withMessage('The password has to be at least 8 characters long.')
const validateEmail = body('email')
  .isEmail()
  .normalizeEmail()
  .withMessage('Please enter a valid email address.')

const validateUsername = body('username')
  .isLength({ min: 6 })
  .trim()
  .withMessage('The username has to be at least 6 characters long.')
export default { validateEmail, validatePassword, validateUsername }
