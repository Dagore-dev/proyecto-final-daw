import express from 'express'
import User from '../models/user'
import createToken from '../utils/createToken'

export function login (request: express.Request, response: express.Response): void {
  const { email, password } = request.body

  if (typeof email !== 'string' || typeof password !== 'string') {
    throw new Error('Email and password required.')
  }

  User.login(email, password)
    .then(user => {
      const token = createToken(user._id)
      response.send({ email, token })
    })
    .catch(error => {
      response.status(400)
      if (error instanceof Error) {
        response.send({ error: error.message })
      } else {
        response.send({ error })
      }
    })
}

export function signUp (request: express.Request, response: express.Response): void {
  const { email, password } = request.body

  if (typeof email !== 'string' || typeof password !== 'string') {
    throw new Error('Email and password required.')
  }

  User.signup(email, password)
    .then(user => {
      const token = createToken(user._id)
      response.send({ email, token })
    })
    .catch(error => {
      response.status(400)
      if (error instanceof Error) {
        response.send({ error: error.message })
      } else {
        response.send({ error })
      }
    })
}
