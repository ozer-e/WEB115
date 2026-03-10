const form = document.getElementById("myForm");
const input = document.getElementById("inputField");
const feedback = document.getElementById("feedback");

function showMessage(text, isError) {
  feedback.textContent = text;
  feedback.style.marginTop = "10px";
  feedback.style.fontWeight = "bold";
  feedback.style.color = isError ? "crimson" : "green";
}

function isAlphanumeric(value) {
  const pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(value);
}

form.addEventListener("submit", function (e) {
  const value = input.value.trim();

  if (!isAlphanumeric(value)) {
    e.preventDefault();
    showMessage("Error: Only letters and numbers are allowed.", true);
    input.focus();
    return;
  }

  e.preventDefault();
  showMessage("Success: Input is valid. Form submitted!", false);
  form.reset();
});

input.addEventListener("input", function () {
  feedback.textContent = "";
});