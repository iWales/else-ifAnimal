$(document).ready(function() {


var animal = prompt("Type your favorite animal: snakes, insects, turtles");

if (animal === "snakes"){
  $('#snakes').show();
} else if (animal === "turtles"){
    $('#turtles').show();
  } else if (animal === "insects"){
    $('#insects').show();
  }else {
    alert("TRY AGAIN");
    window.location.reload();
  }

});
