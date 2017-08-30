// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  var n = name
  return "Happy holidays, ${`n`}!";
}

function happyHolidayTo(holiday, name) {
  var message = `Happy ${holiday}, ${name}!`
  return message
}

function holidayCountdown(holiday, days) {
  return "It's ${days} days until ${holiday}!";
}
