// Q3 - Multi-step form with Next/Back & validation

const steps = document.querySelectorAll(".step");
let currentStepIndex = 0;

// Inputs and error spans
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const summaryDiv = document.getElementById("summary");

// Helper: show a step by index
function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
  currentStepIndex = index;
}

// Validations
function validateName() {
  const value = nameInput.value.trim();
  if (!value) {
    nameError.textContent = "Name is required.";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!emailPattern.test(value)) {
    emailError.textContent = "Please enter a valid email.";
    return false;
  }

  emailError.textContent = "";
  return true;
}

function validatePassword() {
  const value = passwordInput.value.trim();
  if (!value) {
    passwordError.textContent = "Password is required.";
    return false;
  } else if (value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    return false;
  }

  passwordError.textContent = "";
  return true;
}

// Buttons
document.getElementById("next1").addEventListener("click", () => {
  if (validateName()) {
    showStep(1);
  }
});

document.getElementById("back2").addEventListener("click", () => {
  showStep(0);
});

document.getElementById("next2").addEventListener("click", () => {
  if (validateEmail()) {
    showStep(2);
  }
});

document.getElementById("back3").addEventListener("click", () => {
  showStep(1);
});

document.getElementById("finish").addEventListener("click", () => {
  if (validatePassword()) {
    // All 3 steps completed → show summary
    const summaryHtml = `
      <h2>Summary</h2>
      <p><strong>Name:</strong> ${nameInput.value}</p>
      <p><strong>Email:</strong> ${emailInput.value}</p>
      <p><strong>Password:</strong> ${"*".repeat(passwordInput.value.length)}</p>
    `;
    summaryDiv.innerHTML = summaryHtml;
  }
});