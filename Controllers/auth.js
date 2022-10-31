const passport = require("passport");
const Auth = require("../models/auth");

const showAuthFormSignup = (req, res) => {
  try {
    res.render("auth/signup")
  } catch (error) {
    
  }
}
const signup = async (req, res) => {

  try {
    let errors = [];
    const { firstName, lastName, email, password, confirm_password} = req.body

    if ( password !== confirm_password) { //esto es una forma de validar tambien de podria haber validado en el form
      errors.push({ mesg: "Password do not match."})
    }

    if (password.length < 4) {
      errors.push({ mesg: "Password must be at least 4 characters."})
    }

    if (errors.length > 0) {
      return res.render('signup' , {
        errors
      })
    }

    const userFound = await Auth.findOne({ email: email })

    if (userFound) {
      res.redirect('/auth/signup')
    }

    const newUser = new Auth({firstName, lastName, email, password})
    newUser.password = await newUser.passwordEncrypt(password)
    await newUser.save()
    res.redirect('/auth/signin')
  } catch (error) {
    
  }
}
const showAuthFormSignin = (req, res) => {
  try {
    res.render("auth/signin")
  } catch (error) {
    
  }
}
const signin = passport.authenticate('local', { // todo esto es parte de password
  successRedirect: "/",
  failureRedirect: "/auth/signin"
})

const logout = async (req, res, next) => {
  try {
    await req.logout((error) => {
      if (error) return next()
      res.redirect('/auth/sigin')
    })
  } catch (error) {
    
  }
}

module.exports = {
  showAuthFormSignup,
  signup,
  showAuthFormSignin,
  signin,
  logout
}