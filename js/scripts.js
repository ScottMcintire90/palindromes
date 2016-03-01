var palindromes = function(userString, reverseString) {
if (userString === reverseString) {
  return true;
}  else {
  return false;
};
}



$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var userWord = $("input#userWord").val();
    var userArray = userWord.split('');
    var userString = userArray.toString();
    var userArrayReverse = userWord.split('').reverse('');
    var reverseString = userArrayReverse.toString();
    var result = palindromes(userString, reverseString);


    if (result) {
      $("#true").show();
      $("#false").hide();

    } else {
      $("#false").show();
      $("#true").hide();
    }

  event.preventDefault();
  });
});
