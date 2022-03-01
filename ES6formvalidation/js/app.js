const usernameVal = document.querySelector("#username");
const emailVal = document.querySelector("#email");
const passwordVal = document.querySelector("#password");
const cpasswordVal = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");

//for username
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameVal.value.trim();
  if (!isRequired(username)) {
    showError(usernameVal, "Username can not be blank");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameVal,
      `Username must be between ${min} and ${max} characters`
    );
  } else {
    showSuccess(usernameVal);
    valid = true;
  }
  return valid;
};
//for email
const checkEmail = () => {
  let valid = false;
  const email = emailVal.value.trim();
  if (!isRequired(email)) {
    showError(emailVal, "Email can not be blank");
  } else if (!isEmailValid(email)) {
    showError(emailVal, "Email is not valid");
  } else {
    showSuccess(emailVal);
    valid = true;
  }
  return valid;
};

//for password
const checkPassword = () => {
  let valid = false;
  const password = passwordVal.value.trim();
  if (!isRequired(password)) {
    showError(passwordVal, "Password can not be blank");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordVal,
      "password must has atleast 8 character that include atleast 1 lowercase ,1 uppercase,1 number and 1 special character(!@#$%^&*)"
    );
  } else {
    showSuccess(passwordVal);
    valid = true;
  }
  return valid;
};
//confirm password
const checkConfirmPassword = () => {
  let valid = false;
  // check confirm password
  const confirmpassword = cpasswordVal.value.trim();
  const password = passwordVal.value.trim();
  if (!isRequired(confirmpassword)) {
    showError(cpasswordVal, "Please enter the password again");
  } else if (password !== confirmpassword) {
    showError(cpasswordVal, "Password not matched");
  } else {
    showSuccess(cpasswordVal);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;
  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

const showError = (input, message) => {
  //get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");
  //show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
