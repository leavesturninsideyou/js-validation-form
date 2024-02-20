import { confirmPwdError, countryError, mailError, pwdError, zipError } from "./inputErrors";

const allInputs = document.querySelectorAll("input, select");

const allSubmits = document.querySelectorAll(".submit");

allInputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    const nearestErrorLabel = event.target.parentNode.querySelector(".error");

    if (!input.validity.valid) {
        if (input.id === "mail") {
            mailError(input, nearestErrorLabel);
        } else if (input.id === "zipcode") {
            zipError(input, nearestErrorLabel);
        }
    } else if (input.id === "pwd") {
        pwdError(input, nearestErrorLabel);
    } else if (input.id === "confirm-pwd") {
        confirmPwdError(input, nearestErrorLabel);
    } else {
        nearestErrorLabel.textContent = "";
        input.classList.remove("invalid");
    }
  });
});

allSubmits.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        allInputs.forEach((input) => {
            if (!input.validity.valid) {
                const nearestErrorLabel = input.parentNode.querySelector(".error");

                if (input.id === "mail") {
                    mailError(input, nearestErrorLabel);
                } else if (input.id === "country") {
                    countryError(input, nearestErrorLabel);
                } else if (input.id === "zipcode") {
                    zipError(input, nearestErrorLabel);
                } else if (input.id === "pwd") {
                    pwdError(input, nearestErrorLabel);
                } else if (input.id === "confirm-pwd") {
                    confirmPwdError(input, nearestErrorLabel);
                }
                
                input.classList.add("invalid");
                event.preventDefault();
            }
        })
    })
});

// submit button will do countryError
