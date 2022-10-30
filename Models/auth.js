const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const authSchema = new mongoose.Schema(
    {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
)

authSchema.methods.passwordEncrypt = async (password) => {
  const salt = await bcrypt.genSalt(10) // esta es la cantidad de vueltas que hace para encriptar la contraseña a mas vuelta mas recursos consume
  return await bcrypt.hash(password, salt)
}

authSchema.methods.checkPassword = async function ( password ) {
  return await bcrypt.compare(password, this.password) //aca comparo la contra que recibo en el form con la contra que tiene el modelo
}

module.exports = mongoose.Schema('Auth', authSchema)