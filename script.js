const Subscribe = document.getElementById("btn");
const error = document.getElementById("error");

Subscribe.addEventListener("click", () => {
  const inputValue = document.getElementById("email");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (inputValue.value === "" || !isValidEmail(inputValue.value)) {
    inputValue.style.border = "1px solid red";
    inputValue.classList.add("red-background");
    error.style.visibility = "visible";
  } else {
    inputValue.style.border = "";
    inputValue.classList.remove("red-background");
    error.style.visibility = "hidden";
    localStorage.setItem("email", email.value);
    window.location.href = "second-page.html";
  }
});
