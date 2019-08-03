////////////////////////////////////////
///////        DEPENDENCIES      ///////
////////////////////////////////////////
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

////////////////////////////////////////
///////     CONFIGURATIONS       ///////
////////////////////////////////////////
const app = express();
const PORT = 3000;
const Coupon = require('./models/coupon.js')
/////// CONNECT TO MONGODB /////////////
mongoose.connect('mongodb://localhost:27017/dcdb', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})
////////////////////////////////////////
///////     MIDDLEWARE           ///////
////////////////////////////////////////
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static('public'))
///////// CONTROLLERS //////////////
const couponController = require('./controllers/router.js')
app.use(couponController);
/////// LISTENER /////////
app.listen(PORT, () => {
  console.log('=======LISTENING========');
})
