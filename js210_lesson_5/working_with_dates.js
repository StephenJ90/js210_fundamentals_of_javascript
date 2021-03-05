// JS210 Fundamentals of JavaScript for Programmers > Objects > Working with Dates

// Working with Dates

/*
1. Create a variable named today with the current date and time as its value.
*/

let today = new Date();
console.log(today);     // 2021-03-04T17:16:26.313Z
today = Date();
console.log(today);     // Thu Mar 04 2021 13:21:26 GMT-0400 (Atlantic Standard Time)

/*
Note the difference in the output. This difference is only seen in node
within my terminal. When the same code was done in the MDN documentation
REPL or with the console on Google, the output for both was:

Thu Mar 04 2021 13:21:26 GMT-0400 (Atlantic Standard Time)
/*



2. Log a string, "Today's day is 5", that tells the current day of the week as a number 
between 0 and 6 (Sunday is 0, Saturday is 6). Use the getDay method to obtain the number 
of the day of week.
*/

let today = new Date();
console.log("Today's day is " + String(today.getDay()));



/*
3. The getDay method, like many of the get methods on the date object, returns a zero-based 
index of the current day of week instead of the day name. This enables support for multiple 
locales and formats. Modify the output message of the previous problem to show the 3-letter 
day name abbreviation. You may use the following array:

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
*/

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log("Today's date is " + String(today.getDay());



/*
4. Let's add the calendar date (the day of month) to our log message: "Today's date is Mon, 
the 6th". Use the getDate method to obtain the current day of month. Don't worry about using 
different suffixes for numbers that end with 1, 2, or 3 just yet; we'll deal with that in the 
next problem.
*/

console.log("Today's date is " + String(daysOfWeek[today.getDay()]) + ", the " + String(today.getDay()) + "th");



/*
5. Ideally, the suffix on the day number needs to adjust to the proper suffix for days like the 1st, 
22nd, and 3rd. Write a function named dateSuffix that takes the day of month as a numeric value and 
returns the formatted day of month and suffix. Make sure you use the correct suffixes.
*/

function dateSuffix(date) {
  if ([11, 12, 13].includes(date)) {
    return 'th';
  }

  let number = date % 10;

  switch (number) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

console.log("Today's date is " + String(daysOfWeek[today.getDay()]) + ", the " + String(today.getDay()) + dateSuffix(today.getDay()));

// LS Solution:

function dateSuffix(date) {
  let dateString = String(date);

  let digit;
  if (dateString.length === 1 ) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  let suffix = 'th';
  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));



/*
6. Change your output to include the value from the getMonth method. Thus, the logged string will 
read "Today's date is Mon, 11 6th", where 11 is the month number returned by getMonth.
*/

let today = new Date();
console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' + 
                                 String(today.getMonth()) + ' ' + 
                                 dateSuffix(today.getDate()));



/*
7. Let's make the month readable. Using the same technique we used in problem 3, convert the 
month number in the output string to a 3-letter month name abbreviation. You may use the 
following array:

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
*/

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' + 
                                 months[today.getMonth()] + ' ' + 
                                 dateSuffix(today.getDate()));



/*
8. Our call to console.log is getting cluttered. Let's clean things up a bit 
and refactor the code into a few formatting functions that we can call from 
anywhere in our code. Create formattedMonth and formattedDay functions to 
format the month and day, then write a formattedDate function that pulls 
everything together and logs the fully formatted date.
*/

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

let today = new Date();
formattedDate(today);



/*
9. Log the values returned from the getFullYear and getYear methods. Note how 
these values differ. Note especially that getYear is deprecated: you should 
avoid using deprecated methods as they may one day disappear.
*/

console.log(today.getFullYear());  // 2021
console.log(today.getYear());      // 121



/*
10. Use the getTime method and log the current date and time in total milliseconds since Jan. 1st 1970.
*/

console.log(today.getTime());



/*
11. Create a new date object variable named tomorrow that contains a Date object. Initialize the variable 
by setting it to the value of today. You can get the value of today using the getTime method. Next, change 
the date on the tomorrow object to the day after today: you should use setDate to change the date. Finally, 
log the tomorrow object with your formattedDate function.
*/

let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);



/*
12. Create a new variable named nextWeek that is a new Date copied from the today object. Compare nextWeek and 
today, and log the results. Are they equal? Why or why not?
*/

let nextWeek = new Date(today.getTime());

console.log(today === nextWeek);

/*
They are not equal. === only returns true if the objects are the same object.
In this case, these are two different objects.
*/



/*
13. The === operator only returns true with Date objects if the objects are the same object. Since we have two 
different objects (with the same values), we must instead compare the values represented by those objects. 
Compare the values returned by toDateString to determine whether the two objects are equal. Finally, add 7 days 
to the nextWeek date and compare the two objects again.
*/

console.log(today.toDateString() === nextWeek.toDateString()); // true
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString()); // false



/*
14. Finally, write a function named formatTime that takes a date object as an argument and returns a string 
formatted with the hours and minutes as "15:30". Make sure you handle the case where the hours or minutes has 
only one digit: you need to pad the value with a leading zero in such cases, e.g., "03:04". You can use the 
getHours and getMinutes methods to obtain the hours and minutes.
*/

function formatTime(date) {
  let stringHours = String(date.getHours());
  let stringMinutes = String(date.getMinutes());

  if (stringHours.length === 1) {
    let arrayHours = stringHours.split();
    arrayHours.unshift('0');
    stringHours = arrayHours.join('');
  }

  if (stringMinutes.length === 1) {
    let arrayMinutes = stringMinutes.split();
    arrayMinutes.unshift('0');
    stringMinutes = arrayMinutes.join('');
  }

  console.log(stringHours + ":" + stringMinutes);
  return stringHours + ":" + stringMinutes;
} 

let today = new Date();
formatTime(today);

// LS Solution:

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

// Date value passed: 2013-03-01T01:10:00
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));