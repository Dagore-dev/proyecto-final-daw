import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'
import IUser from '../interfaces/IUser'
import IUserModel from '../interfaces/IUserModel'

const userSchema = new Schema<IUser, IUserModel>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.statics.signup = async function (email: string, password: string): Promise<Document> {
  if (!validator.isEmail(email)) {
    throw new Error(`"${email}" is not valid email.`)
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error('Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters.')
  }

  const exists = await this.findOne({ email })
  if (exists != null) {
    throw new Error(`"${email}" is already in use.`)
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const user = await this.create({ email, password: hashedPassword })

  return user
}

userSchema.statics.login = async function (email: string, password: string): Promise<Document> {
  if (!validator.isEmail(email)) {
    throw new Error(`"${email}" is not valid email.`)
  }

  const user = await this.findOne({ email })
  if (user == null) {
    throw new Error('Wrong email or password.')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw new Error('Wrong email or password.')
  }

  return user
}

export default model<IUser, IUserModel>('User', userSchema)
