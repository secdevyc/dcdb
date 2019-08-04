const express = require('express')
const router = express.Router();
const Coupon = require('../models/coupon.js')
const dcdbSeed = require('../models/dcdbSeed.js')

router.use(express.static('public'))
///////// SEED FILE /////////////
router.get('/seed', (req, res) => {
  Coupon.create(dcdbSeed, (err, seedDb) => {
    res.send(dcdbSeed)
  })
})
//////// NEW COUPON PAGE //////////
router.get('/newcoupon', (req, res) => {
  res.render('new.ejs')
})
///////// INDEX PAGE ///////////
router.get('/', (req, res) => {
  Coupon.find({}, (err, coupons) => {
    res.render('index.ejs', {coupons: coupons})
  })
})
/////// DELETE ROUTE //////////////////
router.delete('/:id', (req, res) => {
  Coupon.findByIdAndRemove(req.params.id, (err, deletedCoupon) => {
    res.redirect('/dcdb')
  })
})

////////// EDIT PAGE //////////////
router.get('/:id/edit', (req, res) => {
  Coupon.findById(req.params.id, (err, foundCoupon) => {
    res.render('edit.ejs', {coupon: foundCoupon})
  })
})
////////////// DETAILS PAGE ////////////////
router.get('/:id', (req, res) => {
  Coupon.findById(req.params.id, (err, foundCoupon) => {
    res.render('show.ejs',
                {
                  coupon: foundCoupon,
                }
              )
  })
})
///////////// // PUT ROUTE //  POSTING EDIT  //////////
router.put('/:id', (req, res) => {
  if (req.body.storeCoupon === "on") {
    req.body.storeCoupon = true;
  } else {
    req.body.storeCoupon = false;
  }
  Coupon.findOneAndUpdate(req.params.id, req.body, (err, updatedCoupon) => {
    res.redirect('/dcdb')
  })
})
///////// POSTING NEW COUPON //////////////////
router.post('/', (req, res) => {
  req.body.expirationDate = req.body.month + '/' + req.body.day + '/' + req.body.year
  if(!req.body.link){
    req.body.link = 'NO LINK'
  } else {
    req.body.link = req.body.link
  }
  if (req.body.storeCoupon === 'on') {
    req.body.storeCoupon = true
  } else {
    req.body.storeCoupon = false;
  }
  Coupon.create(req.body, (err, newCoupon) => {
    console.log(req.body);
    res.redirect('/dcdb')
  })
})

///////////////// DOCUMENT COUNTER /////////////////
Coupon.countDocuments((err, data) => {
  console.log('there are currently ' + data + ' coupons');
})
module.exports = router;
