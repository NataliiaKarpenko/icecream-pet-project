import { modals } from './toggleModal';

function handleStyleChange(input) {
  const borderOnFocus = '2px';
  const borderOnBlur = '1px';

  const isActive = input.value !== '' || input === document.activeElement;
  input.classList.toggle('active', isActive);
  input.style.borderWidth =
    input === document.activeElement ? borderOnFocus : borderOnBlur;
}

function handleBlur(event) {
  const input = event.target;
  handleStyleChange(input);
}

function handleFocus(event, errorMessages) {
  const input = event.target;
  handleStyleChange(input);

  errorMessages.forEach(errorMessage => {
    if (input.name === errorMessage.dataset.type) {
      errorMessage.style.display = 'none';
      input.style.borderColor = '';
    }
  });
}

modals.forEach(modal => {
  if (!modal.classList.contains('no-form-backdrop')) {
    const form = modal.querySelector('.form');
    const inputs = form.querySelectorAll('[name]');
    const errorMessages = form.querySelectorAll('.error-message');
    inputs.forEach(input => {
      input.addEventListener('blur', e => handleBlur(e));

      input.addEventListener('focus', e => {
        handleFocus(e, errorMessages);
      });
    });
  }
});
