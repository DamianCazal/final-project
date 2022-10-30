const showAuthFormSignup = (req, res) => {
  try {
    res.render("auth/signup")
  } catch (error) {
    
  }
}
const signup = (req, res) => {
  try {
    console.log(req.body);
    res.json(req.body)
  } catch (error) {
    
  }
}
const showAuthFormSignin = (req, res) => {
  try {
    res.render("auth/signin")
  } catch (error) {
    
  }
}
const signin = (req, res) => {
  try {
    console.log(req.body);
    res.json(req.body)
  } catch (error) {
    
  }
}
const logout = (req, res) => {
  try {
    res.send("")
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