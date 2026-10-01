"use strict";

const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const course = document.getElementById("course");
const sessionDate = document.getElementById("sessionDate");
const seats = document.getElementById("seats");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedback = document.getElementById("feedback");

// JS1 : an array holding the workshop names. Index 0 is "HTML Essentials",
// and workshops.length is 3
const workshops = [
  "HTML Essentials", "CSS Studio", "JavaScript Lab"
];

// Loop through the array: "workshop" holds one name per pass (3 passes in total).

for (const workshop of workshops) {
  // A NEW <option> element is created on every pass, because one element
  // cannot be appended in several places; each choice needs its own.
  
  const option = document.createElement("option");
  option.value = workshop;       // the value the form submits / course.value returns
  option.textContent = workshop; // the text the user sees (textContent is safe from HTML injection)
  course.append(option);         // add it after the existing placeholder option, which is kept
}

function todayInLocalTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

sessionDate.min = todayInLocalTime();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("was-validated");
  feedback.hidden = true;
  feedback.className = "feedback";

  const trimmedName = fullName.value.trim();
  if (trimmedName.length < 2) {
    fullName.setCustomValidity("Enter at least two characters for your name.");
  } else {
    fullName.setCustomValidity("");
  }

  if (password.value.length < 10) {
    password.setCustomValidity("Use at least 10 characters for this exercise.");
  } else {
    password.setCustomValidity("");
  }

  // JS2 (DONE): compare the two passwords. !== means "is not strictly equal to".
  if (password.value !== confirmPassword.value) {
    // A non-empty message marks the field invalid and becomes the error text.
    confirmPassword.setCustomValidity("The passwords must match.");
  } else {
    // An empty string CLEARS the error. Without this the field would stay
    // invalid forever, even after the user corrects the confirmation.
    confirmPassword.setCustomValidity("");
  }

  // JS3 (DONE): the temporary guard has been removed and replaced by this check.
  // reportValidity() tests every HTML constraint (required, type, min/max/step,
  // pattern, minlength) AND our custom messages, shows the browser's error bubble,
  // and returns true only if every control is valid. "!" means NOT.
  if (!form.reportValidity()) {
    feedback.textContent = "Check the highlighted fields and try again.";
    feedback.classList.add("error");
    feedback.hidden = false;
    return; // leave the handler early so invalid data never reaches the success message
  }

  // JS4 (DONE): seats.value is a STRING such as "2"; valueAsNumber is a real NUMBER (2).
  // A number is needed so that === 1 below compares like with like.
  const seatCount = seats.valueAsNumber;
  let bookingType = ""; // "let" because its value is assigned below

  if (seatCount === 1) {
    bookingType = "Individual booking"; // exactly one seat
  } else {
    bookingType = "Group booking"; // 2-4 seats (0, 5 and 1.5 were already blocked by JS3)
  }

  feedback.textContent = `${trimmedName}, your ${bookingType.toLowerCase()} for ${seatCount} seat${seatCount === 1 ? "" : "s"} in ${course.value} on ${sessionDate.value} is ready to preview.`;
  feedback.classList.add("success");
  feedback.hidden = false;
});

form.addEventListener("input", (event) => {
  feedback.hidden = true;
  feedback.className = "feedback";

  if (event.target === fullName) fullName.setCustomValidity("");
  if (event.target === password) password.setCustomValidity("");
  if (event.target === confirmPassword) confirmPassword.setCustomValidity("");
});
