import request from 'request'
import jwt from 'jsonwebtoken'
import moment from 'moment'

import { User } from '.'

export const generateToken = (user) => {
  const payload = {
    iss: 'my.domain.com',
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(7, 'days').unix(),
  }

  return jwt.sign(payload, process.env.TOKEN_SECRET)
}

export const currentUser = (req, res) => {
  if (!req.user) return res.status(401).send({ error: 'Your login has expired.' })

  return User.findOne({ _id: req.user._id }, (err, user) =>
    res.send({ token: generateToken(user), user })
  )
}

export const signup = (req, res) => {
  req.assert('name', 'Name cannot be blank').notEmpty()
  req.assert('email', 'Email is not valid').isEmail()
  req.assert('email', 'Email cannot be blank').notEmpty()
  req.assert('password', 'Password must be at least 4 characters long').len(4)
  req.sanitize('email').normalizeEmail({ remove_dots: false })

  const errors = req.validationErrors()

  if (errors) return res.status(400).send(errors)

  return User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      return res.status(400).send({ msg: 'The email address you have entered is already associated with another account.' })
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })

    return newUser.save((err) => {
      if (err) return res.status(400).send({ error: err })

      return res.send({ token: generateToken(newUser), user: newUser })
    })
  })
}

export const login = (req, res) => {
  req.assert('email', 'Email is not valid').isEmail()
  req.assert('email', 'Email cannot be blank').notEmpty()
  req.assert('password', 'Password cannot be blank').notEmpty()
  req.sanitize('email').normalizeEmail({ remove_dots: false })

  const errors = req.validationErrors()

  if (errors) return res.status(400).send(errors)

  return User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) return res.status(401).send({ msg: `The email address ${req.body.email} is not associated with any account.` })

    return user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.status(401).send({ msg: 'Invalid email or password' })

      return res.send({ token: generateToken(user), user: user.toJSON() })
    })
  })
}

export const authGithub = (req, res) => {
  const accessTokenUrl = 'https://github.com/login/oauth/access_token'
  const userUrl = 'https://api.github.com/user'

  const params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.GITHUB_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code',
  }

  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { json: true, form: params }, (err, response, token) => {
    const accessToken = token.access_token
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': 'template',
    }

    // Step 2. Retrieve user's profile information.
    return request.get({ url: userUrl, headers, json: true }, (err, response, profile) => {
      if (profile.error) return res.status(500).send({ error: profile.error.message })

      // Step 3a. Link accounts if user is authenticated.
      if (req.isAuthenticated()) {
        return User.findOne({ github: profile.id }, (err, user) => {
          if (user) {
            return res.status(409).send({ error: 'There is already an existing account linked with this Github account.' })
          }

          if (!user) return res.status(401).send({ error: 'Your login has expired.' })

          const userWithGithub = req.user
          userWithGithub.name = user.name || profile.name
          userWithGithub.github = profile.id

          return user.save(() => res.send({ token: generateToken(userWithGithub), user: userWithGithub }))
        })
      }

      // Step 3b. Create a new user account or return an existing one.
      return User.findOne({ github: profile.id }, (err, user) => {
        // User exists
        if (user) return res.send({ token: generateToken(user), user })

        const newUser = new User({
          name: profile.name,
          email: profile.email,
          github: profile.id,
        })

        return newUser.save((error) => {
          if (error) return res.status(400).send({ error })

          return res.send({ token: generateToken(newUser), user: newUser })
        })
      })
    })
  })
}

export const authGithubCallback = ({ res }) => res.send({ msg: 'loading' })

export const authFacebook = (req, res) => {
  const profileFields = ['id', 'name', 'email', 'gender', 'location']
  const accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token'
  const graphApiUrl = `https://graph.facebook.com/v2.5/me?fields=${profileFields.join(',')}`

  const params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.FACEBOOK_SECRET,
    redirect_uri: req.body.redirectUri,
  }

  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params, json: true }, (err, response, accessToken) => {
    if (accessToken.error) {
      return res.status(500).send({ msg: accessToken.error.message })
    }

    // Step 2. Retrieve user's profile information.
    return request.get({ url: graphApiUrl, qs: accessToken, json: true }, (err, response, profile) => {
      if (profile.error) return res.status(500).send({ msg: profile.error.message })

      // Step 3a. Link accounts if user is authenticated.
      if (req.isAuthenticated()) {
        return User.findOne({ facebook: profile.id }, (err, user) => {
          if (user) {
            return res.status(409).send({ error: 'There is already an existing account linked with this Github account.' })
          }

          if (!user) return res.status(401).send({ error: 'Your login has expired.' })

          const userWithFacebook = req.user
          userWithFacebook.name = user.name || profile.name
          userWithFacebook.facebook = profile.id

          return user.save(() => res.send({ token: generateToken(userWithFacebook), user: userWithFacebook }))
        })
      }

      // Step 3b. Create a new user account or return an existing one.
      return User.findOne({ facebook: profile.id }, (err, user) => {
        // User exists
        if (user) return res.send({ token: generateToken(user), user })

        const newUser = new User({
          name: profile.name,
          email: profile.email,
          facebook: profile.id,
        })

        return newUser.save((error) => {
          if (error) return res.status(400).send({ error })

          return res.send({ token: generateToken(newUser), user: newUser })
        })
      })
    })
  })
}

export const authFacebookCallback = ({ res }) => res.send({ msg: 'loading' })
