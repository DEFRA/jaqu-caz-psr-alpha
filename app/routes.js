const express = require('express')
const router = express.Router()

var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

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
var yesterdayString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var yesterdayMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var todayString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var todayMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var oneDayAfterString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var oneDayAfterMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var twoDaysAfterString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var twoDaysAfterMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var threeDaysAfterString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var threeDaysAfterMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var fourDaysAfterString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var fourDaysAfterMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var fiveDaysAfterString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var fiveDaysAfterMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var sixDaysAfterString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var sixDaysAfterMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() + 1);
var sevenDaysAfterString = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var sevenDaysAfterMessage = today.getDate() + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

today.setDate(today.getDate() - 7);

today.setDate(today.getDate() + 6);
var validFromYesterday = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeYesterday = yesterdayString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromToday = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeToday = todayString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromOneDayAfter = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeOneDayAfter = oneDayAfterString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromTwoDaysAfter = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeTwoDaysAfter = twoDaysAfterString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromThreeDaysAfter = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeThreeDaysAfter = threeDaysAfterString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromFourDaysAfter = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeFourDaysAfter = fourDaysAfterString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromFiveDaysAfter = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeFiveDaysAfter = fiveDaysAfterString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromSixDaysAfter = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeSixDaysAfter = sixDaysAfterString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

today.setDate(today.getDate() + 1);
var validFromSevenDaysAfter = weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
var dateRangeSevenDaysAfter = sevenDaysAfterString + " to " + weekdays[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

// Add your routes here - above the module.exports line

// Enter vehicle details
router.post('/confirm-vehicle-details', function (req, res) {

  var vrn = req.session.data['vrn'];
  // Remove spacing and make letters uppercase
  var formattedVrn = vrn.toUpperCase().replace(/\s/g, '');

  if (formattedVrn == "XYZ456") {

    res.redirect('/payments/unrecognised-vehicle')

  } else if (formattedVrn == "") {

    res.render('payments/enter-vehicle-details', {
      error: true,
      errorMessage: "Enter a registration number (also known as license plate number)"
    })

  } else {

      res.redirect('/payments/confirm-vehicle-details')

  }

});

// Confirm vehicle details page
router.post('/payments/confirm-vehicle', function (req, res) {
  
  var confirm = req.body['confirm-vehicle'];

  if (confirm == 'yes') {

      res.redirect('/payments/local-authority')

  } else if (confirm == 'no') {

      res.redirect('/payments/incorrect-details')

  } else {

    res.render('payments/confirm-vehicle-details', {
      error: true,
      errorMessage: "Answer yes or no"
    })

  }

});

// Local Authority selection page (from unrecognised vehicles page)
router.post('/payments/localAuthority', function (req, res) {
  
  var overseas = req.session.data['overseas'];

  if (overseas == "correct-details") {

      res.redirect('/payments/local-authority')

  } else {

    res.render('payments/unrecognised-vehicle', {
      error: true,
      errorMessage: "Confirm that the registration number is correct"
    })

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
  var vrn = req.session.data['vrn'];
  // Remove spacing and make letters uppercase
  var formattedVrn = vrn.toUpperCase().replace(/\s/g, '');

  if (confirm == undefined) {

    res.render('payments/local-authority', {
      error: true,
      errorMessage: "State which Clean Air Zone you are paying for"
    })

  } else if (confirm == "leeds" && formattedVrn == "ABC123") {

    res.redirect('/payments/select-period')

  } else {

    res.redirect('/payments/' + confirm)

  }

});

// Payment period selection page
router.post('/payments/paymentPagesSelectPeriod', function (req, res) {

  var period = req.body['period'];

  if (period == undefined) {

    res.render('payments/select-period', {
      error: true,
      errorMessage: "State if you are paying for 1 day or 7 days"
    })
  
  } else if (period == "daily-charge") {

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

  var charges = [];
  var dates = [];

  if (caz == "leeds-weekly") {

    if (date == undefined) {

      res.render('payments/select-date-weekly', {
        error: true,
        errorMessage: "Select when you want the 7 day period to start",
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
      })

    } else {

      if (date == "yesterday") {
    
        var selectedDates = dateRangeYesterday;
        
      } else if (date == "today") {
    
        var selectedDates = dateRangeToday;
        
      } else if (date == "1-day-after") {

        var selectedDates = dateRangeOneDayAfter;

      } else if (date == "2-days-after") {

        var selectedDates = dateRangeTwoDaysAfter;

      } else if (date == "3-days-after") {

        var selectedDates = dateRangeThreeDaysAfter;

      } else if (date == "4-days-after") {

        var selectedDates = dateRangeFourDaysAfter;

      } else if (date == "5-days-after") {

        var selectedDates = dateRangeFiveDaysAfter;

      } else if (date == "6-days-after") {

        var selectedDates = dateRangeSixDaysAfter;

      } else if (date == "7-days-after") {

        var selectedDates = dateRangeSevenDaysAfter;

      }
    
      req.session.amountDue = '£50.00';
    
      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: selectedDates, caz: caz});

    }

  } else {

    if (date.includes("yesterday")) {

      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(yesterdayString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(yesterdayString);
  
      }
      
    }
  
    if (date.includes("today")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(todayString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(todayString);
  
      }
      
    }
  
    if (date.includes("1-day-after")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(oneDayAfterString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(oneDayAfterString);
  
      }
      
    }
  
    if (date.includes("2-days-after")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(twoDaysAfterString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(twoDaysAfterString);
  
      }
      
    }
  
    if (date.includes("3-days-after")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(threeDaysAfterString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(threeDaysAfterString);
  
      }
      
    }
  
    if (date.includes("4-days-after")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(fourDaysAfterString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(fourDaysAfterString);
  
      }
      
    }
  
    if (date.includes("5-days-after")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(fiveDaysAfterString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(fiveDaysAfterString);
  
      }
      
    }
  
    if (date.includes("6-days-after")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(sixDaysAfterString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(sixDaysAfterString);
  
      }
      
    }
  
    if (date.includes("7-days-after")) {
  
      if (caz == "leeds") {
  
        charges.push(12.50);
        dates.push(sevenDaysAfterString);
  
      } else if (caz == "birmingham") {
  
        charges.push(8.00);
        dates.push(sevenDaysAfterString);
  
      }
      
    }
  
    var sum = 0;
  
    if (charges.length) {
  
      sum = charges.reduce(function(a, b) { return a + b});

      req.session.amountDue = '£' + sum.toFixed(2);
  
      var selectedDates = dates.join(', ');
    
      res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: selectedDates, caz: caz});
  
    } else {

      res.render('payments/select-date', {
        error: true,
        errorMessage: "Select at least one day",
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
      })

    }
    
  }

});

// Router to correct payment method page
router.get('/payments/selected-date', function (req, res) {

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  var charges = [];
  var dates = [];

  if (date.includes("yesterday")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeYesterday);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(yesterdayString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(yesterdayString);

    }
    
  }

  if (date.includes("today")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeToday);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(todayString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(todayString);

    }
    
  }

  if (date.includes("1-day-after")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeOneDayAfter);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(oneDayAfterString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(oneDayAfterString);

    }
    
  }

  if (date.includes("2-days-after")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeTwoDaysAfter);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(twoDaysAfterString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(twoDaysAfterString);

    }
    
  }

  if (date.includes("3-days-after")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeThreeDaysAfter);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(threeDaysAfterString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(threeDaysAfterString);

    }
    
  }

  if (date.includes("4-days-after")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeFourDaysAfter);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(fourDaysAfterString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(fourDaysAfterString);

    }
    
  }

  if (date.includes("5-days-after")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeFiveDaysAfter);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(fiveDaysAfterString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(fiveDaysAfterString);

    }
    
  }

  if (date.includes("6-days-after")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeSixDaysAfter);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(sixDaysAfterString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(sixDaysAfterString);

    }
    
  }

  if (date.includes("7-days-after")) {

    if (caz == "leeds-weekly") {

      charges.push(50.00);
      dates.push(dateRangeSevenDaysAfter);

    } else if (caz == "leeds") {

      charges.push(12.50);
      dates.push(sevenDaysAfterString);

    } else if (caz == "birmingham") {

      charges.push(8.00);
      dates.push(sevenDaysAfterString);

    }
    
  }

  var sum = 0;

  if (charges.length) {

    sum = charges.reduce(function(a, b) { return a + b});

  }

  req.session.amountDue = '£' + sum.toFixed(2);

  var selectedDates = dates.join(', ');

  res.render('payments/confirm-charge', {amountDue: req.session.amountDue, date: selectedDates, caz: caz});

});

router.get('/payments/debit-credit-card', function (req, res) {

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  var dates = [];

  if (date.includes("yesterday")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeYesterday)

    } else {

      dates.push(yesterdayString);

    }

  }

  if (date.includes("today")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeToday)

    } else {

      dates.push(todayString);

    }

  }

  if (date.includes("1-day-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeOneDayAfter)

    } else {

      dates.push(oneDayAfterString);

    }

  }

  if (date.includes("2-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeTwoDaysAfter)

    } else {

      dates.push(twoDaysAfterString);

    }

  }

  if (date.includes("3-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeThreeDaysAfter)

    } else {

      dates.push(threeDaysAfterString);

    }

  }

  if (date.includes("4-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFourDaysAfter)

    } else {

      dates.push(fourDaysAfterString);

    }

  }

  if (date.includes("5-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFiveDaysAfter)

    } else {

      dates.push(fiveDaysAfterString);

    }

  }

  if (date.includes("6-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSixDaysAfter)

    } else {

      dates.push(sixDaysAfterString);

    }

  }

  if (date.includes("7-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSevenDaysAfter)

    } else {

      dates.push(sevenDaysAfterString);

    }

  }

  var selectedDates = dates.join(', ');

  res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: selectedDates, caz: caz});

});

router.post('/payments/debit-credit-card', function (req, res) {

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  var dates = [];

  if (date.includes("yesterday")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeYesterday)

    } else {

      dates.push(yesterdayString);

    }

  }

  if (date.includes("today")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeToday)

    } else {

      dates.push(todayString);

    }

  }

  if (date.includes("1-day-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeOneDayAfter)

    } else {

      dates.push(oneDayAfterString);

    }

  }

  if (date.includes("2-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeTwoDaysAfter)

    } else {

      dates.push(twoDaysAfterString);

    }

  }

  if (date.includes("3-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeThreeDaysAfter)

    } else {

      dates.push(threeDaysAfterString);

    }

  }

  if (date.includes("4-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFourDaysAfter)

    } else {

      dates.push(fourDaysAfterString);

    }

  }

  if (date.includes("5-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFiveDaysAfter)

    } else {

      dates.push(fiveDaysAfterString);

    }

  }

  if (date.includes("6-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSixDaysAfter)

    } else {

      dates.push(sixDaysAfterString);

    }

  }

  if (date.includes("7-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSevenDaysAfter)

    } else {

      dates.push(sevenDaysAfterString);

    }

  }

  var selectedDates = dates.join(', ');

  res.render('payments/debit-credit-card', {amountDue: req.session.amountDue, date: selectedDates, caz: caz});

});

// Payment confirmation page

router.post('/payments/confirm-payment', function (req, res) {

  var email = req.session.data['email'];
  var mobile = req.session.data['mobile-number'];
  var caz = req.session.data['caz'];
  var date = req.session.data['date'];

  var dates = [];

  if (date.includes("yesterday")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeYesterday)

    } else {

      dates.push(yesterdayMessage);

    }

  }

  if (date.includes("today")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeToday)

    } else {

      dates.push(todayMessage);

    }

  }

  if (date.includes("1-day-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeOneDayAfter)

    } else {

      dates.push(oneDayAfterMessage);

    }

  }

  if (date.includes("2-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeTwoDaysAfter)

    } else {

      dates.push(twoDaysAfterMessage);

    }

  }

  if (date.includes("3-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeThreeDaysAfter)

    } else {

      dates.push(threeDaysAfterMessage);

    }

  }

  if (date.includes("4-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFourDaysAfter)

    } else {

      dates.push(fourDaysAfterMessage);

    }

  }

  if (date.includes("5-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFiveDaysAfter)

    } else {

      dates.push(fiveDaysAfterMessage);

    }

  }

  if (date.includes("6-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSixDaysAfter)

    } else {

      dates.push(sixDaysAfterMessage);

    }

  }

  if (date.includes("7-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSevenDaysAfter)

    } else {

      dates.push(sevenDaysAfterMessage);

    }

  }

  var selectedDates = dates.slice(0, -1).join(', ') + ', and ' + dates.slice(-1);

  if (caz == 'leeds-weekly') {

    var localAuthority = "Leeds"

  } else {

    var localAuthority = caz.charAt(0).toUpperCase() + caz.slice(1);

  }

  if (email != "") {

    notify.sendEmail(
      // GOV.UK Notify template ID
      '9b0ce7a5-8830-4d69-ae2f-7762c5ad76e7',
      email,
      {
        personalisation: {
          'charge': req.session.amountDue,
          'caz': localAuthority,
          'vrn': req.session.data['vrn'],
          'dates': selectedDates,
          'paymentDate': todayMessage
        }
      }
    )

  }

  if (mobile != "") {

    notify.sendSms(
      // GOV.UK Notify template ID
      '9b5b3bcd-9cbd-42c5-86c3-dde84270deb7',
      mobile,
      {
        personalisation: {
          'charge': req.session.amountDue,
          'caz': localAuthority,
          'vrn': req.session.data['vrn'],
          'dates': selectedDates,
          'paymentDate': todayMessage
        }
      }
    )

  }

  res.render('payments/confirm-payment', {amountDue: req.session.amountDue});

});

router.post('/payments/confirm-payment-details', function (req, res) {

  var error = false;

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  var dates = [];

  if (date.includes("yesterday")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeYesterday)

    } else {

      dates.push(yesterdayString);

    }

  }

  if (date.includes("today")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeToday)

    } else {

      dates.push(todayString);

    }

  }

  if (date.includes("1-day-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeOneDayAfter)

    } else {

      dates.push(oneDayAfterString);

    }

  }

  if (date.includes("2-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeTwoDaysAfter)

    } else {

      dates.push(twoDaysAfterString);

    }

  }

  if (date.includes("3-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeThreeDaysAfter)

    } else {

      dates.push(threeDaysAfterString);

    }

  }

  if (date.includes("4-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFourDaysAfter)

    } else {

      dates.push(fourDaysAfterString);

    }

  }

  if (date.includes("5-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFiveDaysAfter)

    } else {

      dates.push(fiveDaysAfterString);

    }

  }

  if (date.includes("6-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSixDaysAfter)

    } else {

      dates.push(sixDaysAfterString);

    }

  }

  if (date.includes("7-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSevenDaysAfter)

    } else {

      dates.push(sevenDaysAfterString);

    }

  }

  var selectedDates = dates.join(', ');

  var error = false;

  // Card number validation
  var cardNumber = req.session.data['card-number'];
  
  if (cardNumber != "") {

    var cardNumberError = false;

  } else {

    var cardNumberError = true;
    var cardNumberErrorMessage = "Enter a card number";
    error = true

  }

  //Card name validation
  var cardName = req.session.data['card-name'];

  if (cardName == "") {

    var cardNameError = true;
    var cardNameErrorMessage = "Enter the name of the cardholder";
    error = true;

  } else {

    var cardNameError = false;

  }

  //Month validation
  var month = req.session.data['expiry-month'];

  if (month == "") {

    var monthError = true;
    var monthErrorMessage = "Enter a valid month";
    error = true;

  } else {

    var monthError = false;

  }

  //Year validation
  var year = req.session.data['expiry-year'];

  if (year == "") {

    var yearError = true;
    var yearErrorMessage = "Enter a valid date using only 2 characters";
    error = true;

  } else {

    var yearError = false;

  }

  //Security code validation
  var securityCode = req.session.data['card-code'];

  if (securityCode == "") {

    var securityCodeError = true;
    var securityCodeErrorMessage = "Enter a 3-digit security code. You can find this on the security strip at the back of your card";
    error = true;

  } else {

    var securityCodeError = false;
  }

  //Country validation
  var country = req.session.data['country'];

  if (country == "") {

    var countryError = true;
    var countryErrorMessage = "Enter your country or territory";
    error = true;

  } else {

    var countryError = false;

  }

  //Building number/name validation
  var buildingNumber = req.session.data['building-number'];

  if (buildingNumber == "") {

    var buildingNumberError = true;
    var buildingNumberErrorMessage = "Enter a building number and name or street";
    error = true;

  } else {

    var buildingNumberError = false;

  }

  //Town validation
  var town = req.session.data['town'];

  if (town == "") {

    var townError = true;
    var townErrorMessage = "Enter a town or city";
    error = true;

  } else {

    var townError = false;

  }

  //Postcode validation
  var postcode = req.session.data['postcode'];

  if (postcode == "") {

    var postcodeError = true;
    var postcodeErrorMessage = "Enter a postcode";
    error = true;

  } else {

    var postcodeError = false;

  }

  if (error == true) {

    res.render('payments/debit-credit-card', {
      amountDue: req.session.amountDue,
      caz: caz,
      date: selectedDates,
      error: error,
      cardNumberError: cardNumberError,
      cardNumberErrorMessage: cardNumberErrorMessage,
      monthError: monthError,
      monthErrorMessage: monthErrorMessage,
      yearError: yearError,
      yearErrorMessage: yearErrorMessage,
      cardNameError: cardNameError,
      cardNameErrorMessage: cardNameErrorMessage,
      securityCodeError: securityCodeError,
      securityCodeErrorMessage: securityCodeErrorMessage,
      countryError: countryError,
      countryErrorMessage: countryErrorMessage,
      buildingNumberError: buildingNumberError,
      buildingNumberErrorMessage: buildingNumberErrorMessage,
      townError: townError,
      townErrorMessage: townErrorMessage,
      postcodeError: postcodeError,
      postcodeErrorMessage: postcodeErrorMessage
    });

  } else {

    // var cardNumber = req.session.data['card-number'];
    var asterisk = '*';
    // var cardNumberString = asterisk.repeat(cardNumber.length - 4) + cardNumber.substr(cardNumber.length - 4);
    var cardNumberString = asterisk.repeat(12) + '1234';

    res.render('payments/confirm-payment-details', {amountDue: req.session.amountDue, date: selectedDates, caz: caz, cardNumber: cardNumberString});

  }
  
});

router.get('/payments/confirm-payment-details', function (req, res) {

  var date = req.session.data['date'];
  var caz = req.session.data['caz'];

  var dates = [];

  if (date.includes("yesterday")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeYesterday)

    } else {

      dates.push(yesterdayString);

    }

  }

  if (date.includes("today")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeToday)

    } else {

      dates.push(todayString);

    }

  }

  if (date.includes("1-day-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeOneDayAfter)

    } else {

      dates.push(oneDayAfterString);

    }

  }

  if (date.includes("2-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeTwoDaysAfter)

    } else {

      dates.push(twoDaysAfterString);

    }

  }

  if (date.includes("3-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeThreeDaysAfter)

    } else {

      dates.push(threeDaysAfterString);

    }

  }

  if (date.includes("4-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFourDaysAfter)

    } else {

      dates.push(fourDaysAfterString);

    }

  }

  if (date.includes("5-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeFiveDaysAfter)

    } else {

      dates.push(fiveDaysAfterString);

    }

  }

  if (date.includes("6-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSixDaysAfter)

    } else {

      dates.push(sixDaysAfterString);

    }

  }

  if (date.includes("7-days-after")) {

    if (caz == "leeds-weekly") {

      dates.push(dateRangeSevenDaysAfter)

    } else {

      dates.push(sevenDaysAfterString);

    }

  }

  var selectedDates = dates.join(', ');

  res.render('payments/confirm-payment-details', {amountDue: req.session.amountDue, date: selectedDates, caz: caz});

});

router.get('/payments/confirm-payment', function (req, res) {

  res.render('payments/confirm-payment', {amountDue: req.session.amountDue});

});

module.exports = router
