// JavaScript to toggle display of login and registration forms
document.getElementById("loginLink").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
});

document.getElementById("registerLink").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
});