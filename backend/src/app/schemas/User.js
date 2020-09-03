import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }

})

UserSchema.pre('save', async function save (next) {
  if (!this.isModified('password')) return next()
  try {
    this.password = await bcrypt.hash(this.password, 8)
    return next()
  } catch (error) {
    return next(error)
  }
})

UserSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export default mongoose.model('User', UserSchema)
