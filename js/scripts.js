

// business logic

function pigLatin(userInput) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var splitWord = userInput.split('');

  if (vowels.includes(userInput.charAt(0))) {
    return userInput += 'way';
  } else {
    for (var i = 0; i < userInput.length; i++) {
      if ((userInput.charAt(0))===('q')) {
        console.log("hello")
        splitWord.push(splitWord.shift());
        splitWord.push(splitWord.shift());
        return splitWord.join('');
      } else if (!vowels.includes(userInput[i])) {
        splitWord.push(splitWord.shift());
      } else {
        splitWord.push('ay');
        return splitWord.join('');
      }
    }
  }
}

// UI logic

$(document).ready(function() {

$("form#pig-latin").submit(function(event) {
  event.preventDefault();
    var userInput = $("input#userInput").val();
    var result = pigLatin(userInput);
    $("#result").text(result);
  });
});
