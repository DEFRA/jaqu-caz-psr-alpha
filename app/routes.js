const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

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

router.post('/payments/paymentPagesSelectPeriod', function (req, res) {
  var period = req.body['period'];

  if (period == "daily-charge") {

    res.redirect('/payments/leeds')

  } else if (period == "weekly-charge") {

    res.redirect('/payments/leeds-weekly-charge')

  }

});

router.post('/payments/paymentPages', function (req, res) {
  var confirm = req.body['caz'];

  if (confirm == "leeds") {

    res.redirect('/payments/select-period')

  } else {

    res.redirect('/payments/' + confirm)

  }

});

router.post('/payments/pay-money', function (req, res) {

  var caz = req.session.data['caz'];
  
  if (req.session.data['caz'] == "birmingham") {
      
    req.session.amountDue = '£8.00';
    res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});

  } else if (req.session.data['caz'] == "leeds") {

    req.session.amountDue = '£12.50';
    res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});

  } else if (req.session.data['caz'] == "bath") {

    req.session.amountDue = '£9.00';
    res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});

  } else if (req.session.data['caz'] == "leeds-weekly") {

    req.session.amountDue = '£50.00';
    res.render('payments/pay-money', {amountDue: req.session.amountDue, caz: caz});

  } 

});

router.post('/payments/select-date', function (req, res) {

  var caz = req.session.data['caz'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();
  
  var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
  if (req.session.data['caz'] == "birmingham") {

    req.session.amountDue = '£8.00';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } else if (req.session.data['caz'] == "leeds") {

    req.session.amountDue = '£12.50';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } else if (req.session.data['caz'] == "bath") {

    req.session.amountDue = '£9.00';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } else if (req.session.data['caz'] == "leeds-weekly") {

    req.session.amountDue = '£50.00';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } 

});

router.post('/payments/selectedPaymentMethod', function (req, res) {
  var method = req.body['payment-method'];

  var date = req.session.data['date'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/' + method, {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/' + method, {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

router.get('/payments/selectedPaymentMethod', function (req, res) {
  var method = req.session.data['payment-method'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();
  
  var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  res.render('payments/' + method, {amountDue: req.session.amountDue, today: todayString, yesterday: yesterdayString});

});

router.post('/payments/selected-date', function (req, res) {
  var date = req.body['date'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

router.get('/payments/selected-date', function (req, res) {
  var date = req.body['date'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

router.get('/payments/pay-money', function (req, res) {

  res.render('payments/pay-money', {amountDue: req.session.amountDue});

});

router.post('/payments/confirm-payment', function (req, res) {

  var date = req.session.data['date'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();

  if (req.session.data['caz'] == "leeds-weekly") {

    var localAuthority = "Leeds"

  } else {

    var localAuthority = req.session.data['caz'].charAt(0).toUpperCase() + req.session.data['caz'].slice(1);

  }

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: todayString, localAuthority: localAuthority});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: yesterdayString, localAuthority: localAuthority});

  }

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

  var date = req.session.data['date'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: todayString, localAuthority: localAuthority});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: yesterdayString, localAuthority: localAuthority});

  }

});

router.get('/payments/receipts', function (req, res) {

  var date = req.session.data['date'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/receipts', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/receipts', {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

router.post('/payments/receipts', function (req, res) {

  var date = req.session.data['date'];

  var weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/receipts', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    res.render('payments/receipts', {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

module.exports = router
