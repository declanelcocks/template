import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  github: String,
  facebook: String,
}, {
  timestamps: true,
  toJSON: { virtuals: true },
})

// Password hash middleware
userSchema.pre('save', function encryptNewPassword(next) {
  const user = this

  if (!user.isModified('password')) return next()

  return bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      user.password = hash
      return next()
    })
  })
})

// Helper method to validate a user's password
userSchema.methods = {
  comparePassword(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      cb(err, isMatch)
    })
  },
}

// Clean up the JSON response from User
userSchema.options.toJSON = {
  transform: function sanitizeUserDoc(doc, ret) {
    delete ret.password
    delete ret.passwordResetToken
    delete ret.passwordResetExpires
  },
}

module.exports = mongoose.model('User', userSchema)
export default exports
