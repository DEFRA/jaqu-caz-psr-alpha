const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/vehicle-checker/local-authority', function (req, res) {
    var localAuthority = req.body['local-authority'];

    if (localAuthority == 'birmingham') {
        res.redirect('/vehicle-checker/birmingham')
    } else if (localAuthority == 'derby') {
        res.redirect('/vehicle-checker/derby')
    } else if (localAuthority == 'leeds') {
        res.redirect('/vehicle-checker/leeds')
    } else if (localAuthority == 'nottingham') {
        res.redirect('/vehicle-checker/nottingham')
    } else if (localAuthority == 'southampton') {
        res.redirect('/vehicle-checker/southampton')
    }
});

router.post('/vehicle-checker/compliance', function (req, res) {
    var confirm = req.body['confirm-vehicle'];

    if (confirm == 'yes') {
        res.redirect('/vehicle-checker/local-authority')
    } else if (confirm == 'no') {
        res.redirect('/vehicle-checker/incorrect-details')
    }
});

router.post('/vehicle-checker/compliancePage', function (req, res) {

  // Complete tag
  if (req.session.data['caz-1'] == "bath"){
    req.session.bathShow = true;
  } else {
    req.session.bathShow = false;
  }

  if (req.session.data['caz-2'] == "birmingham"){
    req.session.birminghamShow = true;
  } else {
    req.session.birminghamShow = false;
  }

  if (req.session.data['caz-3'] == "leeds"){
    req.session.leedsShow = true;
  } else {
    req.session.leedsShow = false;
  }

  if (req.session.data['caz-4'] == "sheffield"){
    req.session.sheffieldShow = true;
  } else {
    req.session.sheffieldShow = false;
  }
  
  res.render('vehicle-checker/compliancePage', {
      optional: true,
      bathShow: req.session.bathShow,
      birminghamShow: req.session.birminghamShow,
      leedsShow: req.session.leedsShow,
      sheffieldShow: req.session.sheffieldShow
  });

});

router.get('/vehicle-checker/compliancePage', function (req, res) {
    
  // Complete tag
  if (req.session.data['caz-1'] == "bath"){
    req.session.bathShow = true;
  } else {
    req.session.bathShow = false;
  }

  if (req.session.data['caz-2'] == "birmingham"){
    req.session.birminghamShow = true;
  } else {
    req.session.birminghamShow = false;
  }

  if (req.session.data['caz-3'] == "leeds"){
    req.session.leedsShow = true;
  } else {
    req.session.leedsShow = false;
  }

  if (req.session.data['caz-4'] == "sheffield"){
    req.session.sheffieldShow = true;
  } else {
    req.session.sheffieldShow = false;
  }
  
  res.render('vehicle-checker/compliancePage', {
      optional: true,
      bathShow: req.session.bathShow,
      birminghamShow: req.session.birminghamShow,
      leedsShow: req.session.leedsShow,
      sheffieldShow: req.session.sheffieldShow
  });
  
});

router.get('/vehicle-checker/summary', function (req, res) {
  // Complete tag
  if (req.session.data['caz-1'] == "bath"){
    req.session.bathShow = true;
  } else {
    req.session.bathShow = false;
  }

  if (req.session.data['caz-2'] == "birmingham"){
    req.session.birminghamShow = true;
  } else {
    req.session.birminghamShow = false;
  }

  if (req.session.data['caz-3'] == "leeds"){
    req.session.leedsShow = true;
  } else {
    req.session.leedsShow = false;
  }

  if (req.session.data['caz-4'] == "sheffield"){
    req.session.sheffieldShow = true;
  } else {
    req.session.sheffieldShow = false;
  }

  res.render('vehicle-checker/summary', {
    optional: true,
    bathShow: req.session.bathShow,
    birminghamShow: req.session.birminghamShow,
    leedsShow: req.session.leedsShow,
    sheffieldShow: req.session.sheffieldShow
  });

});

router.post('/payments/confirm-vehicle', function (req, res) {
  var confirm = req.body['confirm-vehicle'];

  if (confirm == 'yes') {
      res.redirect('/payments/local-authority')
  } else if (confirm == 'no') {
      res.redirect('/payments/incorrect-details')
  }
});

router.get('/payments/caz', function (req, res) {
  var caz = req.session.data['caz'];

  res.redirect('/payments/' + caz)

});

router.post('/payments/paymentPages', function (req, res) {
  var confirm = req.body['caz'];

  res.redirect('/payments/' + confirm)

});

router.post('/payments/pay-money', function (req, res) {

  var caz = req.session.data['caz'];
  
  if (req.session.data['caz'] == "birmingham") {

    if (req.session.data['discountSelection-2'] == "birmingham-50") {
      req.session.amountDue = '£4.00';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});
    } else if (req.session.data['discountSelection-1'] == "birmingham-30") {
      req.session.amountDue = '£5.60';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});  
    } else {
      req.session.amountDue = '£8.00';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});
    }

  } else if (req.session.data['caz'] == "leeds") {

    if (req.session.data['discountSelection-2'] == "leeds-50") {
      req.session.amountDue = '£6.25';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});
    } else if (req.session.data['discountSelection-1'] == "leeds-30") {
      req.session.amountDue = '£8.75';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});  
    } else {
      req.session.amountDue = '£12.50';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});
    }

  } else if (req.session.data['caz'] == "bath") {

    if (req.session.data['discountSelection-2'] == "bath-50") {
      req.session.amountDue = '£4.50';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});  
    } else if (req.session.data['discountSelection-1'] == "bath-30") {
      req.session.amountDue = '£6.30';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});  
    } else {
      req.session.amountDue = '£9.00';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});
    }

  } else if (req.session.data['caz'] == "sheffield") {

    if (req.session.data['discountSelection-2'] == "sheffield-50") {
      req.session.amountDue = '£5.00';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});  
    } else if (req.session.data['discountSelection-1'] == "sheffield-30") {
      req.session.amountDue = '£7.00';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});  
    } else {
      req.session.amountDue = '£10.00';
      res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});
    }

  }

});

router.post('/payments/selectedPaymentMethod', function (req, res) {
  var method = req.body['payment-method'];

  res.render('payments/' + method, {amountDue: req.session.amountDue});

});

router.get('/payments/selectedPaymentMethod', function (req, res) {
  var method = req.session.data['payment-method'];

  res.render('payments/' + method, {amountDue: req.session.amountDue});

});

router.get('/payments/pay-money', function (req, res) {

  res.render('payments/pay-money', {amountDue: req.session.amountDue});

});

router.post('/payments/confirm-payment', function (req, res) {

  var localAuthority = req.session.data['caz'].charAt(0).toUpperCase() + req.session.data['caz'].slice(1);

  res.render('payments/confirm-payment', {amountDue: req.session.amountDue, localAuthority: localAuthority});

});

router.post('/payments/task', function (req, res) {

  var task = req.body['task'];

  if (task == 'one-off-payment') {

    res.redirect('/payments/enter-vehicle-details');

  } else if (task == 'sign-in') {

    res.redirect('/payments/sign-in');

  }
});

router.get('/payments/confirm-payment', function (req, res) {

  var localAuthority = req.session.data['caz'].charAt(0).toUpperCase() + req.session.data['caz'].slice(1);

  res.render('payments/confirm-payment', {amountDue: req.session.amountDue, localAuthority: localAuthority});

});

router.get('/payments/receipts', function (req, res) {

  res.render('payments/receipts', {amountDue: req.session.amountDue});

});

router.post('/payments/receipts', function (req, res) {

  res.render('payments/receipts', {amountDue: req.session.amountDue});

});

module.exports = router
