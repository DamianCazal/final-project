const passport = require('passport')
const { Strategy } = require('passport-local')
const Auth = require('../models/auth')

passport.use(
  new Strategy(
    {
      usernameField: 'email'
    },
    async (email, password, done) => {
      const user = await Auth.findOne({ email })

      if (!user) {
        return done(null, false, { message: "User not found."})
      }

      const isMatch = await user.checkPassword(password)

      if (!isMatch) {
        return done(null, false, { message: "Password error"})
      }

      return done(null, user)

    }
  )
) //esto es como un middleware de passport

passport.serializeUser((user, done) => { // esto seria la serializacion
  done(null, user.id)
})

passport.deserializeUser((id, done) => { // esto seria la deserializacion
  Auth.findById(id, (err, user) => {
    done(err, user)
  })
})

//hasta aca seria la configuracion de esta estrategia de logueo