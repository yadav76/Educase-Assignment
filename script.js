var sign = document.getElementById("signup");
var login = document.getElementById("login");
var signpage = document.getElementById("signup-page");
var loginpage = document.getElementById("login-page");

function display_right() {
  sign.style.borderBottom = "4px solid #e70b89";
  login.style.borderBottom = "none";
  loginpage.style.display = "none";
  signpage.style.display = "block";
}
function display_left() {
  sign.style.borderBottom = "none";
  login.style.borderBottom = "4px solid #e70b89";
  signpage.style.display = "none";
  loginpage.style.display = "block";
}
