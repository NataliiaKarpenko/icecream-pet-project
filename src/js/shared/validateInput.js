function validateInput(isValid, inputEl, errorMessageEl, errorMessage) {
  inputEl.style.borderColor = isValid ? '' : 'red';
  errorMessageEl.style.display = isValid ? 'none' : 'block';
  errorMessageEl.style.opacity = isValid ? '0' : '1';
  errorMessageEl.textContent = isValid ? '' : errorMessage;
}

export function validateName(userName, inputNameEl, errorNameMessageEl) {
  const nameValidation = /^[a-zA-Zа-яА-яіІїЇєЄ0-9'-]+$/;
  const isNameValid = nameValidation.test(userName) && userName.length >= 3;
  const nameErrorMessage = userName
    ? userName.length >= 3
      ? 'Invalid name'
      : 'The name is too short'
    : 'Required';

  validateInput(isNameValid, inputNameEl, errorNameMessageEl, nameErrorMessage);
  return isNameValid;
}

export function validatePhone(userPhone, inputPhoneEl, errorPhoneMessageEl) {
  const phoneValidation = /^\+38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;
  const isPhoneValid = phoneValidation.test(userPhone);
  const phoneErrorMessage = userPhone
    ? 'The phone number is too short'
    : 'Required';

  validateInput(
    isPhoneValid,
    inputPhoneEl,
    errorPhoneMessageEl,
    phoneErrorMessage
  );

  return isPhoneValid;
}

export function validateTextArea(
  textMessage,
  inputTextAreaEl,
  errorTextAreaMessageEl
) {
  const isTextAreaValid = textMessage !== '' ? true : false;
  const textAreaErrorMessage = textMessage ? '' : 'Specify your order';

  validateInput(
    isTextAreaValid,
    inputTextAreaEl,
    errorTextAreaMessageEl,
    textAreaErrorMessage
  );

  return isTextAreaValid;
}
