const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user) {
  document.getElementById("loginLink")?.style.display = "none";
  document.getElementById("signupLink")?.style.display = "none";
  document.getElementById("logoutBtn")?.style.display = "inline";
}

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});