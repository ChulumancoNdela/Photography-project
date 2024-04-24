function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var expression = document.getElementById('display').value;
  try {
      var result = eval(expression);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}
 

// JavaScript to toggle display of login and registration forms
document.getElementById("loginLink").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
});

document.getElementById("registerLink").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";


});
