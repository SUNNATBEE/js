var elform = document.querySelector(".form-js");
var elInput = document.querySelector(".form-control");
var elSelect = document.querySelector(".form-select");
var elSpan = document.querySelector(".span-js");

elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elSpan.textContent = elInput.value * elSelect.value;


  elInput.value = "";
});

