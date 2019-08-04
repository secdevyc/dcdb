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
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const Coupon = require('./models/coupon.js')
/////// CONNECT TO MONGODB /////////////
mongoose.connect(MONGODB_URI , { useNewUrlParser: true })

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
////////////////////////////////////////
///////     MIDDLEWARE           ///////
////////////////////////////////////////
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use(express.json());
///////// CONTROLLERS //////////////
const couponController = require('./controllers/router.js')
app.use('/dcdb', couponController);
/////// LISTENER /////////
app.listen(PORT, () => {
  console.log('=======LISTENING========');
})
