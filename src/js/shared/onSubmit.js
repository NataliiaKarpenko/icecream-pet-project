import { Notify } from 'notiflix';
import { validateName, validatePhone, validateTextArea } from './validateInput';
import { validateName, validatePhone, validateTextArea } from './validateInput';
import { toggleModal } from './toggleModal';

export function onSubmit(
  e,
  nameInputEl,
  phoneInputEl,
  textAreaInputEl,
  nameErrorMessageEl,
  phoneErrorMessageEl,
  textAreaErrorMessageEl,
  modal,
  form
) {
  e.preventDefault();

  const userName = nameInputEl.value.trim();
  const userPhone = phoneInputEl.value.trim();
  const userTextArea = textAreaInputEl.value.trim();

  const isNameValid = validateName(userName, nameInputEl, nameErrorMessageEl);
  const isPhoneValid = validatePhone(
    userPhone,
    phoneInputEl,
    phoneErrorMessageEl
  );

  const isTextAreaValid = validateTextArea(
    userTextArea,
    textAreaInputEl,
    textAreaErrorMessageEl
  );

  if (isNameValid && isPhoneValid && isTextAreaValid) {
    Notify.success('Thank you for your order.');

    toggleModal(modal);

    form.reset();
  }
}
