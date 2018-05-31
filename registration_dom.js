// DOM elements
var input = document.querySelector(".textbox");
var addButton = document.querySelector(".addBtn");
var display = document.querySelector(".displayText");

var storage = JSON.parse(localStorage.getItem('key'));
var factory = RegistrationFactory(storage);

function createElement(input){
  var li = document.createElement('ul');
  li.innerHTML = input;
  display.appendChild(li);

}





addButton.addEventListener("click", function() {
  var inputFeed = input.value;

  var isValid = factory.checkReg(inputFeed)

  if(isValid){
    createElement(inputFeed);
    localStorage.setItem('key', JSON.stringify(factory.regMap()));
  }

     else{
    alert("please enter a valid registration number")
  }

});
