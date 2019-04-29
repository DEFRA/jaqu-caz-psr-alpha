const express = require('express')
const router = express.Router()

// Global variables for date strings

var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
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

// Add your routes here - above the module.exports line

// // Select task page
// router.post('/payments/task', function (req, res) {

//   var task = req.body['task'];

//   if (task == 'one-off-payment') {

//     res.redirect('/payments/enter-vehicle-details');

//   } else if (task == 'sign-in') {

//     res.redirect('/payments/select-task');

//   }
// });

// Confirm vehicle details page
router.post('/payments/confirm-vehicle', function (req, res) {
  
  var confirm = req.body['confirm-vehicle'];

  if (confirm == 'yes') {

      res.redirect('/payments/local-authority')

  } else if (confirm == 'no') {

      res.redirect('/payments/incorrect-details')

  }

});

// Local Authority selection page
router.get('/payments/caz', function (req, res) {

  var caz = req.session.data['caz'];

  if (caz == "leeds-weekly") {

    res.redirect('/payments/leeds-weekly-charge');

  }

  res.redirect('/payments/' + caz)

});

// Router to date selection or payment period selection page
router.post('/payments/paymentPages', function (req, res) {

  var confirm = req.body['caz'];

  if (confirm == "leeds") {

    res.redirect('/payments/select-period')

  } else {

    res.redirect('/payments/' + confirm)

  }

});

// Payment period selection page
router.post('/payments/paymentPagesSelectPeriod', function (req, res) {

  var period = req.body['period'];

  if (period == "daily-charge") {

    res.redirect('/payments/leeds')

  } else if (period == "weekly-charge") {

    res.redirect('/payments/leeds-weekly-charge')

  }

});

// Date selection page
router.get('/payments/select-date', function (req, res) {

  var caz = req.session.data['caz'];

  var today = new Date();
  
  var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromToday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  var todayStringWeekly = todayString + ' (valid until midnight on ' + validFromToday + ')'

  var today = new Date();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromYesterday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  var yesterdayStringWeekly = yesterdayString + ' (valid until midnight on ' + validFromYesterday + ')'
  
  if (req.session.data['caz'] == "birmingham") {

    req.session.amountDue = '£8.00';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } else if (req.session.data['caz'] == "leeds") {

    req.session.amountDue = '£12.50';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } else if (req.session.data['caz'] == "bath") {

    req.session.amountDue = '£9.00';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } 

});

router.post('/payments/select-date', function (req, res) {

  var caz = req.session.data['caz'];

  var today = new Date();
  
  var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromToday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  var todayStringWeekly = todayString + ' (valid until midnight on ' + validFromToday + ')'

  var today = new Date();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromYesterday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  var yesterdayStringWeekly = yesterdayString + ' (valid until midnight on ' + validFromYesterday + ')'
  
  if (req.session.data['caz'] == "birmingham") {

    req.session.amountDue = '£8.00';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } else if (req.session.data['caz'] == "leeds") {

    req.session.amountDue = '£12.50';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } else if (req.session.data['caz'] == "bath") {

    req.session.amountDue = '£9.00';
    res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});

  } 

});

// Payment period selection page (Leeds weekly charge)
router.get('/payments/select-date-weekly', function (req, res) {

  var caz = req.session.data['caz'];

  var today = new Date();
  
  var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromToday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  var today = new Date();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromYesterday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  req.session.amountDue = '£50.00';

  res.render('payments/select-date-weekly', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString, todayStringWeekly: validFromToday, yesterdayStringWeekly: validFromYesterday});

});

router.post('/payments/select-date-weekly', function (req, res) {

  var caz = req.session.data['caz'];

  var today = new Date();
  
  var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromToday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  var today = new Date();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  today.setDate(today.getDate() + 7);

  var validFromYesterday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  req.session.amountDue = '£50.00';

  res.render('payments/select-date-weekly', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString, todayStringWeekly: validFromToday, yesterdayStringWeekly: validFromYesterday});

});

// Select date for a CAZ with a suspension
router.get('/payments/select-date-suspended', function (req, res) {

  var caz = req.session.data['caz'];

  var today = new Date();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  req.session.amountDue = '£9.00';

  res.render('payments/select-date-suspended', {amountDue: req.session.amountDue, caz: caz, yesterday: yesterdayString});

});

router.post('/payments/select-date-suspended', function (req, res) {

  var caz = req.session.data['caz'];

  var today = new Date();

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  req.session.amountDue = '£9.00';

  res.render('payments/select-date-suspended', {amountDue: req.session.amountDue, caz: caz, yesterday: yesterdayString});

});

// Set parameters on Payment method selection page
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

// Router to retrieve correct date selection page
router.get('/payments/selectDate', function (req, res) {

  var caz = req.session.data['caz'];

  if (caz == "bath") {
  
    var today = new Date();
  
    today.setDate(today.getDate() - 1);
  
    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    req.session.amountDue = '£9.00';
  
    res.render('payments/select-date-suspended', {amountDue: req.session.amountDue, caz: caz, yesterday: yesterdayString});

  } else if (caz == "leeds-weekly") {
  
    var today = new Date();
    
    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    today.setDate(today.getDate() + 7);
  
    var validFromToday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    var todayStringWeekly = todayString + ' (valid until midnight on ' + validFromToday + ')'
  
    var today = new Date();
  
    today.setDate(today.getDate() - 1);
  
    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    today.setDate(today.getDate() + 7);
  
    var validFromYesterday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    var yesterdayStringWeekly = yesterdayString + ' (valid until midnight on ' + validFromYesterday + ')'
  
    req.session.amountDue = '£50.00';
  
    res.render('payments/select-date-weekly', {amountDue: req.session.amountDue, caz: caz, today: todayStringWeekly, yesterday: yesterdayStringWeekly});

  } else {
  
    var today = new Date();
    
    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    today.setDate(today.getDate() + 7);
  
    var validFromToday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    var todayStringWeekly = todayString + ' (valid until midnight on ' + validFromToday + ')'
  
    var today = new Date();
  
    today.setDate(today.getDate() - 1);
  
    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    today.setDate(today.getDate() + 7);
  
    var validFromYesterday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
  
    var yesterdayStringWeekly = yesterdayString + ' (valid until midnight on ' + validFromYesterday + ')'
    
    if (req.session.data['caz'] == "birmingham") {
  
      req.session.amountDue = '£8.00';
      res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});
  
    } else if (req.session.data['caz'] == "leeds") {
  
      req.session.amountDue = '£12.50';
      res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});
  
    } else if (req.session.data['caz'] == "bath") {
  
      req.session.amountDue = '£9.00';
      res.render('payments/select-date', {amountDue: req.session.amountDue, caz: caz, today: todayString, yesterday: yesterdayString});
  
    } 

  }

});

router.post('/payments/selected-date', function (req, res) {

  var date = req.body['date'];
  var caz = req.session.data['caz'];

  var today = new Date();

  if (date == "today") {

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

// Set parameters on Payment method selection page
router.get('/payments/pay-money', function (req, res) {

  res.render('payments/pay-money', {amountDue: req.session.amountDue});

});

// Router to correct payment method page
router.get('/payments/selected-date', function (req, res) {

  var date = req.body['date'];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/pay-money', {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

router.get('/payments/selectedPaymentMethod', function (req, res) {

  var method = req.session.data['payment-method'];

  var caz = req.session.data['caz'];

  var today = new Date();
  
  var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  if (caz == "leeds-weekly") {

    today.setDate(today.getDate() + 7);

    todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  }

  today.setDate(today.getDate() - 1);

  var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  if (caz == "leeds-weekly") {

    today.setDate(today.getDate() + 7);

    yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

  }

  res.render('payments/' + method, {amountDue: req.session.amountDue, today: todayString, yesterday: yesterdayString});

});

router.post('/payments/selectedPaymentMethod', function (req, res) {

  var method = req.body['payment-method'];
  var caz = req.session.data['caz'];

  var date = req.session.data['date'];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/' + method, {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/' + method, {amountDue: req.session.amountDue, date: yesterdayString});

  }

});

// Payment confirmation page

router.post('/payments/confirm-payment', function (req, res) {

  var date = req.session.data['date'];

  var caz = req.session.data['caz'];

  var today = new Date();

  if (req.session.data['caz'] == "leeds-weekly") {

    var localAuthority = "Leeds"

  } else {

    var localAuthority = req.session.data['caz'].charAt(0).toUpperCase() + req.session.data['caz'].slice(1);

  }

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: todayString, localAuthority: localAuthority});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: yesterdayString, localAuthority: localAuthority});

  }

});

router.post('/payments/confirm-payment-details', function (req, res) {

  var date = req.session.data['date'];

  var caz = req.session.data['caz'];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment-details', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment-details', {amountDue: req.session.amountDue, date: yesterdayString});
  
  }  

});

router.get('/payments/confirm-payment-details', function (req, res) {

  var date = req.session.data['date'];

  var caz = req.session.data['caz'];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment-details', {amountDue: req.session.amountDue, date: todayString});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment-details', {amountDue: req.session.amountDue, date: yesterdayString});
  
  }  

});

router.get('/payments/confirm-payment', function (req, res) {

  var caz = req.session.data['caz'];

  var localAuthority = req.session.data['caz'].charAt(0).toUpperCase() + req.session.data['caz'].slice(1);

  var date = req.session.data['date'];

  var today = new Date();

  if (date == "today") {

    var today = new Date();

    var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      todayString = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: todayString, localAuthority: localAuthority, receiptMethod: receiptMethod});

  } else if (date == "yesterday") {

    today.setDate(today.getDate() - 1);

    var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    if (caz == "leeds-weekly") {

      today.setDate(today.getDate() + 7);

      yesterdayString = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    }

    res.render('payments/confirm-payment', {amountDue: req.session.amountDue, date: yesterdayString, localAuthority: localAuthority, receiptMethod: receiptMethod});

  }

});

module.exports = router
