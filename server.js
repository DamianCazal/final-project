const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const passport = require('passport')
const methodOverride = require('method-override')
const flash = require('connect-flash')
require('./config/passport') //esto es necesario para que funcione la auth

const app = express()
require('dotenv').config()

//Conectarme a la base de datos
const { dbconnection } = require('./database/config')
dbconnection()


//template engine Configuraciones para usar HandleBars
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './Views')

//middleware para toda la app
app.use(express.static('Public'))
app.use('/uploads', express.static('uploads'))
app.use('/assets', express.static('assets'))
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
app.use(flash())

//este es un middleware que va a crear varables globales para toda mi app
app.use((req, res, next) => {
  res.locals.mensaje = req.flash("mensaje")
  res.locals.user = req.user || null
  next()
})

const { routerDev } = require('./routes/db')
const { routerPosts } = require('./routes/posts')
const routerIndex = require('./routes/index')
const routerAuth = require('./routes/auth')

//Middlewares para las rutas
app.use("/", routerDev) //ruta para desarrollo
app.use("/", routerPosts)
app.use("/", routerAuth)
app.use("/", routerIndex)

const PORT = process.env.PORT
app.listen(PORT, err => {
  if ( err ) throw new Error(`Error en el puerto ${err}`)
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})