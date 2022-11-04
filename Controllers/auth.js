const passport = require("passport");
const Auth = require("../models/auth");


let errors = [];

const showAuthFormSignup = (req, res) => { //solo es vista del formulario
  try {
    res.render("auth/signup")
  } catch (error) {
    
  }
}
const signup = async (req, res) => {
  let errors = [];
  try {
    const { firstName, lastName, email, password, confirm_password} = req.body

    if ( password !== confirm_password) { //esto es una forma de validar tambien de podria haber validado en el form
      errors.push({ mesg: "Las contraseñas no coinciden"})
    }

    if (password.length < 4) {
      errors.push({ mesg: "La contraseña debe tener al menos 4 caracteres."})
    }

    if (errors.length > 0) {
      return res.render('auth/signup' , {
        errors,
        firstName,
        lastName,
        email
      })
    }

    const userFound = await Auth.findOne({ email: email })

    if (userFound) {
      res.redirect('/auth/signup')
    }

    const newUser = new Auth({firstName, lastName, email, password})
    newUser.password = await newUser.passwordEncrypt(password)
    await newUser.save()
    //aca creamos la variable de session
    req.flash("mensaje", "se registro correctamente")
    
    setTimeout(() => {
      res.redirect('/auth/signin')
    }, 2000);
    
  } catch (error) {
    console.log("error al registrarse", error);
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
      res.redirect('/')
    })
  } catch (error) {
    
  }
}

module.exports = {
  showAuthFormSignup,
  signup,
  showAuthFormSignin,
  signin,
  logout,
}