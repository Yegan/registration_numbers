// DOM elements
var input = document.querySelector(".textbox");
var addButton = document.querySelector(".addBtn");
var display = document.querySelector(".displayText");
var resetButton = document.querySelector(".resetBtn")
var select = document.querySelector(".towns")


var storage = JSON.parse(localStorage.getItem('key'));
var factory = RegistrationFactory(storage);

function showRegNumbers(numbers){
  display.innerHTML = "";
  for (var key of numbers) {
    var li = document.createElement('li');
    li.innerHTML = key;
    display.appendChild(li);
  }
}

showRegNumbers(factory.regMapKeys());

// Add button event listener
addButton.addEventListener("click", function() {
  var inputFeed = input.value;
  var isValid = factory.checkReg(inputFeed)
  if (isValid) {
    localStorage.setItem('key', JSON.stringify(factory.regMap()));
  } else {
    alert("please enter a valid registration number")
  }
  window.location.reload();
});

select.addEventListener('click', function() {
  var city = select.value;
  console.log(city)
  var regNumbersToDisplay = factory.filter(city);
  // clear out the target element
  // loop over the regNumbersToDisplay
  // for each number in the list append to the target elem
  showRegNumbers(regNumbersToDisplay);

  console.log(regNumbersToDisplay)
  // life happily ever after...
});

// Reset button event listener
resetButton.addEventListener("click", function() {
  localStorage.clear();
  window.location.reload();
});
