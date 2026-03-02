// Signup
document.getElementById("signupForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message");

  if(!name || !email || !password || !confirmPassword || !phone){
    message.innerText = "All fields required!";
    return;
  }

  if(password !== confirmPassword){
    message.innerText = "Passwords not matching!";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({name,email,password,phone});
  localStorage.setItem("users", JSON.stringify(users));

  message.innerText = "Registered Successfully!";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let message = document.getElementById("loginMessage");

  let foundUser = users.find(u => u.email === email && u.password === password);

  if(foundUser){
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    window.location.href = "index.html";
  } else {
    message.innerText = "Invalid Email or Password!";
  }
});