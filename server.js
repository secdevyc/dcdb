////////////////////////////////////////
///////        DEPENDENCIES      ///////
////////////////////////////////////////
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()
////////////////////////////////////////
///////     CONFIGURATIONS       ///////
////////////////////////////////////////
const app = express();
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI
const Coupon = require('./models/coupon.js')
/////// CONNECT TO MONGODB /////////////
mongoose.connect(mongoURI, {useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('connected to ' + mongoURI)
})
////////////////////////////////////////
///////     MIDDLEWARE           ///////
////////////////////////////////////////
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static('public'))
// //////////// DATA /////////////////
// const Coupon = require('./models/coupon.js');

///////// CONTROLLERS //////////////
const couponController = require('./controllers/router.js')
app.use(couponController);



/////// LISTENER /////////
app.listen(PORT, () => {
  console.log('=======LISTENING========');
})
