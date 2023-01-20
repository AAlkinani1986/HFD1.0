import { body, validationResult } from 'express-validator'
export class validation {
  static validatePassword = body('password')
    .isLength({ min: 8 })
    .trim()
    .withMessage('The password has to be at least 8 characters long.')
  static validateEmail = body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email address.')

  static validateUsername = body('username')
    .isLength({ min: 6 })
    .trim()
    .withMessage('The username has to be at least 6 characters long.')

  static validatePasswordMatch = body('password')
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        return false
      }
      return true
    })
    .withMessage('The passwords not matched')
  static validateOccupied = body('occupied')
    .isLength({ min: 3 })
    .trim()
    .withMessage('The Occupied must be selected')

  static validationResult = validationResult
}
