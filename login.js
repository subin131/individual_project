function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "user") {
    window.location = "sender.html";
    return false;
  } else {
    alert("login failed");
  }
}
