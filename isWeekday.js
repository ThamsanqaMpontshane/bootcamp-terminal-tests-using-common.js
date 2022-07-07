module.exports = function(name){
    var Weekday = name.startsWith('M') || name.startsWith('T') || name.startsWith('W') || name.startsWith('T') || name.startsWith('F');
    console.log(Weekday);
    return Weekday;
  };
  
// Test isWeekday
// isWeekday("Monday");
// isWeekday("Tuesday");
// isWeekday("Wednesday");
// isWeekday("Thursday");
// isWeekday("Friday");
// isWeekday("Saturday");
// isWeekday("Sunday");

// export default isWeekday;