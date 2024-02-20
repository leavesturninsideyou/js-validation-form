export function mailError(input, nearestErrorLabel) {
  const errorMessage = nearestErrorLabel;

  if (
    input.validity.typeMismatch ||
    input.validity.patternMismatch ||
    input.validity.valueMissing
  ) {
    errorMessage.textContent = "You must enter an email address.";
  } else if (input.validity.tooLong) {
    errorMessage.textContent = "Entered email is too long.";
  } else if (input.validity.tooShort) {
    errorMessage.textContent = "Entered email is too short.";
  }
}

export function zipError(input, nearestErrorLabel) {
  const errorMessage = nearestErrorLabel;

  if (input.validity.valueMissing) {
    errorMessage.textContent = "You must enter a zip code.";
  } else if (input.validity.tooLong) {
    errorMessage.textContent = "Entered zip code is too long.";
  } else if (input.validity.patternMismatch) {
    errorMessage.textContent = "Numbers and symbols only";
  }
}

export function countryError(select, nearestErrorLabel) {
  const errorMessage = nearestErrorLabel;

  if (select.validity.valueMissing) {
    errorMessage.textContent = "You must select a country.";
  }
}

export function pwdError(input, nearestErrorLabel) {
  const errorMessage = nearestErrorLabel;

  if (input.validity.valueMissing) {
    errorMessage.textContent = "You must enter a password.";
  } else {
    errorMessage.textContent = "";
  }
}

export function confirmPwdError(input, nearestErrorLabel) {
  const errorMessage = nearestErrorLabel;
  const nearestPwdInput = input.parentNode.parentNode.querySelector("#pwd");

  if (input.validity.valueMissing) {
    errorMessage.textContent = "You must confirm your password.";
  } else if (input.value !== nearestPwdInput.value) {
    errorMessage.textContent = "Passwords do not match.";
    input.classList.add("invalid");
    nearestPwdInput.classList.add("invalid");
  } else if (input.value === nearestPwdInput.value) {
    errorMessage.textContent = "";
    input.classList.remove("invalid");
    nearestPwdInput.classList.remove("invalid");
  }
}
