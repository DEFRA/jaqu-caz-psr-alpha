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

var today = new Date();

today.setDate(today.getDate() - 1);
var yesterdayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var todayString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var oneDayAfterString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var twoDaysAfterString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var threeDaysAfterString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var fourDaysAfterString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var fiveDaysAfterString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var sixDaysAfterString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var sevenDaysAfterString = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() - 7);

today.setDate(today.getDate() + 6);
var validFromYesterday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeYesterday = yesterdayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromToday = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeToday = todayString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromOneDayAfter = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeOneDayAfter = oneDayAfterString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromTwoDaysAfter = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeTwoDaysAfter = twoDaysAfterString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromThreeDaysAfter = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeThreeDaysAfter = threeDaysAfterString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromFourDaysAfter = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeFourDaysAfter = fourDaysAfterString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromFiveDaysAfter = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeFiveDaysAfter = fiveDaysAfterString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromSixDaysAfter = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeSixDaysAfter = sixDaysAfterString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromSevenDaysAfter = weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeSevenDaysAfter = sevenDaysAfterString + " to " + weekdays[today.getDay()] + ", " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

// Add your routes here - above the module.exports line

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
  
  if (req.session.data['caz'] == "birmingham") {

    req.session.amountDue = '£8.00';

  } else if (req.session.data['caz'] == "leeds") {

    req.session.amountDue = '£12.50';

  }

  res.render('payments/select-date', {
    amountDue: req.session.amountDue,
    caz: caz,
    today: todayString,
    yesterday: yesterdayString,
    oneDayAfter: oneDayAfterString,
    twoDaysAfter: twoDaysAfterString,
    threeDaysAfter: threeDaysAfterString,
    fourDaysAfter: fourDaysAfterString,
    fiveDaysAfter: fiveDaysAfterString,
    sixDaysAfter: sixDaysAfterString,
    sevenDaysAfter: sevenDaysAfterString
  });

});

router.post('/payments/select-date', function (req, res) {

  var caz = req.session.data['caz'];
  
  if (req.session.data['caz'] == "birmingham") {

    req.session.amountDue = '£8.00';

  } else if (req.session.data['caz'] == "leeds") {

    req.session.amountDue = '£12.50';

  }

  res.render('payments/select-date', {
    amountDue: req.session.amountDue,
    caz: caz,
    today: todayString,
    yesterday: yesterdayString,
    oneDayAfter: oneDayAfterString,
    twoDaysAfter: twoDaysAfterString,
    threeDaysAfter: threeDaysAfterString,
    fourDaysAfter: fourDaysAfterString,
    fiveDaysAfter: fiveDaysAfterString,
    sixDaysAfter: sixDaysAfterString,
    sevenDaysAfter: sevenDaysAfterString
  });

});

// Payment period selection page (Leeds weekly charge)
router.get('/payments/select-date-weekly', function (req, res) {

  var caz = req.session.data['caz'];

  req.session.amountDue = '£50.00';

  res.render('payments/select-date-weekly', {
    amountDue: req.session.amountDue,
    caz: caz,
    today: todayString,
    yesterday: yesterdayString,
    oneDayAfter: oneDayAfterString,
    twoDaysAfter: twoDaysAfterString,
    threeDaysAfter: threeDaysAfterString,
    fourDaysAfter: fourDaysAfterString,
    fiveDaysAfter: fiveDaysAfterString,
    sixDaysAfter: sixDaysAfterString,
    sevenDaysAfter: sevenDaysAfterString,
    yesterdayStringWeekly: validFromYesterday,
    todayStringWeekly: validFromToday,
    oneDayAfterStringWeekly: validFromOneDayAfter,
    twoDaysAfterStringWeekly: validFromTwoDaysAfter,
    threeDaysAfterStringWeekly: validFromThreeDaysAfter,
    fourDaysAfterStringWeekly: validFromFourDaysAfter,
    fiveDaysAfterStringWeekly: validFromFiveDaysAfter,
    sixDaysAfterStringWeekly: validFromSixDaysAfter,
    sevenDaysAfterStringWeekly: validFromSevenDaysAfter
  });

});

router.post('/payments/select-date-weekly', function (req, res) {

  var caz = req.session.data['caz'];

  req.session.amountDue = '£50.00';

  res.render('payments/select-date-weekly', {
    amountDue: req.session.amountDue,
    caz: caz,
    today: todayString,
    yesterday: yesterdayString,
    oneDayAfter: oneDayAfterString,
    twoDaysAfter: twoDaysAfterString,
    threeDaysAfter: threeDaysAfterString,
    fourDaysAfter: fourDaysAfterString,
    fiveDaysAfter: fiveDaysAfterString,
    sixDaysAfter: sixDaysAfterString,
    sevenDaysAfter: sevenDaysAfterString,
    yesterdayStringWeekly: validFromYesterday,
    todayStringWeekly: validFromToday,
    oneDayAfterStringWeekly: validFromOneDayAfter,
    twoDaysAfterStringWeekly: validFromTwoDaysAfter,
    threeDaysAfterStringWeekly: validFromThreeDaysAfter,
    fourDaysAfterStringWeekly: validFromFourDaysAfter,
    fiveDaysAfterStringWeekly: validFromFiveDaysAfter,
    sixDaysAfterStringWeekly: validFromSixDaysAfter,
    sevenDaysAfterStringWeekly: validFromSevenDaysAfter
  });

});

// Router to retrieve correct date selection page
router.get('/payments/selectDate', function (req, res) {

  var caz = req.session.data['caz'];

  if (caz == "leeds-weekly") {
  
    req.session.amountDue = '£50.00';
  
    res.render('payments/select-date-weekly', {
      amountDue: req.session.amountDue,
      caz: caz,
      today: todayString,
      yesterday: yesterdayString,
      oneDayAfter: oneDayAfterString,
      twoDaysAfter: twoDaysAfterString,
      threeDaysAfter: threeDaysAfterString,
      fourDaysAfter: fourDaysAfterString,
      fiveDaysAfter: fiveDaysAfterString,
      sixDaysAfter: sixDaysAfterString,
      sevenDaysAfter: sevenDaysAfterString,
      yesterdayStringWeekly: validFromYesterday,
      todayStringWeekly: validFromToday,
      oneDayAfterStringWeekly: validFromOneDayAfter,
      twoDaysAfterStringWeekly: validFromTwoDaysAfter,
      threeDaysAfterStringWeekly: validFromThreeDaysAfter,
      fourDaysAfterStringWeekly: validFromFourDaysAfter,
      fiveDaysAfterStringWeekly: validFromFiveDaysAfter,
      sixDaysAfterStringWeekly: validFromSixDaysAfter,
      sevenDaysAfterStringWeekly: validFromSevenDaysAfter
    });

  } else {
  
    if (req.session.data['caz'] == "birmingham") {
  
      req.session.amountDue = '£8.00';
  
    } else if (req.session.data['caz'] == "leeds") {
  
      req.session.amountDue = '£12.50';
  
    }

    res.render('payments/select-date', {
      amountDue: req.session.amountDue,
      caz: caz,
      today: todayString,
      yesterday: yesterdayString,
      oneDayAfter: oneDayAfterString,
      twoDaysAfter: twoDaysAfterString,
      threeDaysAfter: threeDaysAfterString,
      fourDaysAfter: fourDaysAfterString,
      fiveDaysAfter: fiveDaysAfterString,
      sixDaysAfter: sixDaysAfterString,
      sevenDaysAfter: sevenDaysAfterString
    });

  }

});

router.post('/payments/selected-date', function (req, res) {

  var date = req.body['date'];
  var caz = req.session.data['caz'];

  if (date == "today") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeToday, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: todayString, caz: caz});

    }
    
  } else if (date == "yesterday") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeYesterday, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: yesterdayString, caz: caz});

    }

  } else if (date == "1-day-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeOneDayAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: oneDayAfterString, caz: caz});

    }

  } else if (date == "2-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeTwoDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: twoDaysAfterString, caz: caz});

    }

  } else if (date == "3-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeThreeDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: threeDaysAfterString, caz: caz});

    }

  } else if (date == "4-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeFourDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: fourDaysAfterString, caz: caz});

    }

  } else if (date == "5-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeFiveDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: fiveDaysAfterString, caz: caz});

    }

  } else if (date == "6-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeSixDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: sixDaysAfterString, caz: caz});

    }

  } else if (date == "7-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeSevenDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: sevenDaysAfterString, caz: caz});

    }

  }

});

// Router to correct payment method page
router.get('/payments/selected-date', function (req, res) {

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  if (date == "today") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeToday, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: todayString, caz: caz});

    }
    
  } else if (date == "yesterday") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeYesterday, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: yesterdayString, caz: caz});

    }

  } else if (date == "1-day-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeOneDayAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: oneDayAfterString, caz: caz});

    }

  } else if (date == "2-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeTwoDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: twoDaysAfterString, caz: caz});

    }

  } else if (date == "3-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeThreeDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: threeDaysAfterString, caz: caz});

    }

  } else if (date == "4-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeFourDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: fourDaysAfterString, caz: caz});

    }

  } else if (date == "5-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeFiveDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: fiveDaysAfterString, caz: caz});

    }

  } else if (date == "6-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeSixDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: sixDaysAfterString, caz: caz});

    }

  } else if (date == "7-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: dateRangeSevenDaysAfter, caz: caz});

    } else {

      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: sevenDaysAfterString, caz: caz});

    }

  }

});

router.get('/payments/debit-credit-card', function (req, res) {

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  if (date == "today") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeToday, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: todayString, caz: caz});

    }

  } else if (date == "yesterday") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeYesterday, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: yesterdayString, caz: caz});

    }

  } else if (date == "1-day-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeOneDayAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: oneDayAfterString, caz: caz});

    }

  } else if (date == "2-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeTwoDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: twoDaysAfterString, caz: caz});

    }

  } else if (date == "3-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeThreeDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: threeDaysAfterString, caz: caz});

    }

  } else if (date == "4-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeFourDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: fourDaysAfterString, caz: caz});

    }

  } else if (date == "5-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeFiveDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: fiveDaysAfterString, caz: caz});

    }

  } else if (date == "6-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeSixDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: sixDaysAfterString, caz: caz});

    }

  } else if (date == "7-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeSevenDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: sevenDaysAfterString, caz: caz});

    }
  
  }

});

router.post('/payments/debit-credit-card', function (req, res) {

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  if (date == "today") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeToday, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: todayString, caz: caz});

    }

  } else if (date == "yesterday") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeYesterday, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: yesterdayString, caz: caz});

    }

  } else if (date == "1-day-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeOneDayAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: oneDayAfterString, caz: caz});

    }

  } else if (date == "2-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeTwoDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: twoDaysAfterString, caz: caz});

    }

  } else if (date == "3-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeThreeDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: threeDaysAfterString, caz: caz});

    }

  } else if (date == "4-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeFourDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: fourDaysAfterString, caz: caz});

    }

  } else if (date == "5-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeFiveDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: fiveDaysAfterString, caz: caz});

    }

  } else if (date == "6-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeSixDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: sixDaysAfterString, caz: caz});

    }

  } else if (date == "7-days-after") {

    if (caz == "leeds-weekly") {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: dateRangeSevenDaysAfter, caz: caz});

    } else {

      res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: sevenDaysAfterString, caz: caz});

    }
  
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

module.exports = router
