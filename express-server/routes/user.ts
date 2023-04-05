import express from 'express'
import { login, signUp } from '../controllers/user'

const router = express.Router()

router
  .post('/login', login)
  .post('/signUp', signUp)

export default router
