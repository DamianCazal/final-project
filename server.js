const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const passport = require('passport')
const methodOverride = require('method-override')
require('./config/passport') //esto es necesario para que funcione la auth


const app = express()
require('dotenv').config()

const { dbconnection } = require('./database/config')
//Conectarme a la base de datos
dbconnection()

//template engine
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './Views')

//middleware
app.use(express.static('Public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method')) // este es necesario para usar la libreria method-override
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: mongoStore.create({mongoUrl: process.env.DB_LOCAL_URI})
})) //este se hace necesario para la libreria express-session
app.use(passport.initialize()) //middleware para passport
app.use(passport.session())


// const { routerDev } = require('./routes/db')
const { routerPosts } = require('./routes/posts')
const routerHome = require('./routes/home')
const routerAuth = require('./routes/auth')
//rutas
app.use("/", routerPosts)
app.use("/", routerAuth)
app.use("/", routerHome)
// app.use("/", routerDev) //ruta para desarrollo


const PORT = process.env.PORT
app.listen(PORT, err => {
  if ( err ) throw new Error(`Error en el puerto ${err}`)
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})