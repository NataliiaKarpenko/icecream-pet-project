import { Notify } from 'notiflix';
import { validateName, validatePhone, validateTextArea } from './validateInput';
import { toggleModal } from './toggleModal';
import { modals } from './toggleModal';

modals.forEach(modal => {
  const form = modal.querySelector('.form');
  const nameInput = form?.elements['user-name'];
  const phoneInput = form?.elements['user-phone'];
  const textAreaInput = form?.elements['user-message'];

  const nameErrorMessage = form?.querySelector('[data-type="user-name"]');
  const phoneErrorMessage = form?.querySelector('[data-type="user-phone"]');
  const textAreaErrorMessage = form?.querySelector(
    '[data-type="user-message"]'
  );

  form?.addEventListener('submit', e =>
    onSubmit(
      e,
      nameInput,
      phoneInput,
      textAreaInput,
      nameErrorMessage,
      phoneErrorMessage,
      textAreaErrorMessage,
      modal,
      form
    )
  );
});

function onSubmit(
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
