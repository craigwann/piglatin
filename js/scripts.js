// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// //business logic
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
//
// };

// // interface logit
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     event.preventDefault();
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//     $("#result").text(result);
//   });
// });

// Pig Latin Scripts
// business logic


// UI logic
$(document).ready(function() {

  var pigLatin = function(word){
    // return false;
    return (word);
  }


  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);
    $("#result").text(result);
  });
});
