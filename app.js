// Importing thir-party modules
const express = require('express')
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv')

// Importing app modules
const products_routes = require('./routes/products.js')
const customMW = require('./mw/custom.js')

// Read env variables
dotenv.config() //Lee .env --> process.env

// Instancio el servidor web ////////////////////////////////////////////////
const app = express()
app.set('view engine', 'ejs') // pug

// Configuro el MIDDLEWARE del servidor /////////////////////////////////////

// MW para servir ficheros estáticos
app.use(express.static('static'))
// app.use(express.static(path.join(__dirname, 'static')));

// MW for auth: sessions
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// MW for logging
// app.use(customMW)

// MW for body parsing 
// app.use(express.json())                         // JSON to req.body
app.use(express.urlencoded({ extended: false }))     // URL-encoded form data to req.body

// MW for routing
app.use('/', products_routes)


// Arranco el servidor /////////////////////////////////////////////////////
app.listen(process.env.PORT, () => {
	console.log('server is listening on the port 5000')
})