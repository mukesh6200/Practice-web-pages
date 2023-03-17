
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
$(".count").counterUp({ time: 3000 });



// only-numbers-accept-in-forms

function numberonly()
{ 
    var num = /[^0-9]/gi;
  input.value = input.value.replace(num, "");
}


function numberonly(input)
{ 
    var num = /[^0-9]/gi;
  input.value = input.value.replace(num, "");
}




