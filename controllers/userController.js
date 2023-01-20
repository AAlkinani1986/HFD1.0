import { User } from '../models/UserModel.js'
import ResetTokenModel from '../models/ResetTokenModel.js'

export class UserController {
  /**
   * findByEmail function
   * @param {email} email
   * @returns User or Error
   */
  static async findByEmail(email) {
    try {
      return User.findOne({ email }).exec()
    } catch (error) {
      return error
    }
  }
  /**
   * findByUsername function
   * @param {username} username
   * @returns User or Error
   */
  static async findByUsername(username) {
    try {
      return User.findOne({ username }).exec()
    } catch (error) {
      return error
    }
  }
  /**
   * findByOccupation function
   * @param {occupation} occupation
   * @returns User or Error
   */
  static async findByOccupation(occupation) {
    try {
      return User.findOne({ occupation }).exec()
    } catch (error) {
      return error
    }
  }
  /**
   * Creates a new user
   *
   * @param {username} username
   * @param {email} email
   * @param {password} password
   *  @param {occupation} occupation
   * @returns save result
   */
  static async createUser(username, email, password, occupation) {
    try {
      const user = new User()
      user.email = email
      user.password = password
      user.username = username
      user.occupation = occupation
      const savedUser = await user.save()
      return savedUser
    } catch (error) {
      return error
    }
  }
  /**
   * Creates a reset token for new password request
   *
   * @param {userId} userId
   * @returns the created token
   */
  static async createPasswordResetToken(userId) {
    try {
      const passwordReset = new ResetTokenModel()
      passwordReset.userId = userId
      const savedToken = await passwordReset.save()
      return savedToken.token
    } catch (error) {
      return error
    }
  }
  /**
   *
   * @param {*} userId
   * @param {*} token
   * @returns
   */
  static async verifyPasswordRestToken(userId, token) {
    try {
      return ResetTokenModel.findOne({
        token,
        userId,
      }).exec()
    } catch (error) {
      return error
    }
  }
  /**
   *
   * @param {*} userId
   * @param {*} token
   * @returns
   */
  static async deletePasswordRestToken(userId, token) {
    try {
      return ResetTokenModel.findOneAndDelete({
        token,
        userId,
      }).exec()
    } catch (error) {
      return error
    }
  }
  /**
   * Changes a user's password
   * @param {*} userId
   * @param {*} password
   */
  static async changePassword(userId, password) {
    try {
      const user = await User.findById(userId)
      if (!user) {
        throw new Error('User not found')
      }
      user.password = password
      return user.save()
    } catch (error) {
      return error
    }
  }
  /**
   * Finds a user by id
   * @param {*} id
   * @returns a user
   */
  static async findById(id) {
    try {
      return User.findById(id).exec()
    } catch (error) {
      return error
    }
  }

  /**
   * returns the password reset token for a user
   * @param {*} id
   * @returns a user
   */
  static async getResetToken(userId) {
    try {
      return ResetTokenModel.findOne({ userId }).exec()
    } catch (error) {
      return error
    }
  }

  /**
   * Get all users
   *
   * @returns a list of users
   */
  static async getUsers() {
    return UserModel.find().sort({ createdAt: -1 }).exec()
  }

  /**
   * Delete a user
   * @param {userId} id
   * @returns
   */
  static async deleteUser(id) {
    return User.findByIdAndDelete(id)
  }
}
