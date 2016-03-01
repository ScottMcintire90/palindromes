



$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var userWord = $("input#userWord").val();
    var userArray = userWord.split('');
    var userArrayReverse = userWord.split('').reverse('');

    if (userArray === userArrayReverse) {
      $(".result").show();
    }
    else {
      $(".result").show(".notPalindrome");
    }
  event.preventDefault();
  });
});
