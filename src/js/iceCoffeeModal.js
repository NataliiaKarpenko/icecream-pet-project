import { onSubmit } from './shared/onSubmit';
import { formatPhoneNumber } from './shared/formatPhoneNumber';
import { handleBlur, handleFocus } from './shared/handleFocusBlur';
import { toggleModal } from './shared/toggleModal';
import { pressEscapeKey } from './shared/pressEscapeKey';
import { clickBackdrop } from './shared/clickBackdrop';

const iceCoffeeFormEl = document.querySelector('#ice-coffee-form');
const productsFormInputEls = iceCoffeeFormEl.querySelectorAll(
  '.products-form__input'
);
const errorMessagesEls = iceCoffeeFormEl.querySelectorAll(
  '.products-form__error'
);

const nameInputEl = iceCoffeeFormEl.querySelector(
  '.products-form__input[name="user-name"]'
);
const phoneInputEl = iceCoffeeFormEl.querySelector(
  '.products-form__input[name="user-phone"]'
);
const textAreaInputEl = iceCoffeeFormEl.querySelector(
  '.products-form__input[name="user-message"]'
);

const nameErrorMessageEl = iceCoffeeFormEl.querySelector(
  '#products-form__name-error'
);
const phoneErrorMessageEl = iceCoffeeFormEl.querySelector(
  '#products-form__phone-error'
);
const textAreaErrorMessageEl = iceCoffeeFormEl.querySelector(
  '#products-form__text-area-error'
);
const iceCoffeeModal = document.querySelector(
  '.backdrop[data-modal-ice-coffee]'
);

const iceCoffeeModalClose = document.querySelector(
  '.modal-products__close-btn[data-modal-ice-coffee-close]'
);

const iceCoffeeModalOpen = document.querySelector(
  '.arrow-button[data-modal-ice-coffee-open]'
);

const borderOnFocus = '2px solid var(--modal-yellow-bg)';
const borderOnBlur = '1px solid var(--modal-yellow-bg)';

productsFormInputEls.forEach(input => {
  input.addEventListener('blur', e =>
    handleBlur(e, borderOnFocus, borderOnBlur)
  );
  input.addEventListener('focus', e =>
    handleFocus(e, errorMessagesEls, borderOnFocus, borderOnBlur)
  );
});

phoneInputEl.addEventListener('input', formatPhoneNumber);

iceCoffeeFormEl.addEventListener('submit', e =>
  onSubmit(
    e,
    nameInputEl,
    phoneInputEl,
    textAreaInputEl,
    nameErrorMessageEl,
    phoneErrorMessageEl,
    textAreaErrorMessageEl,
    iceCoffeeModal,
    iceCoffeeFormEl
  )
);

iceCoffeeModalClose.addEventListener('click', () =>
  toggleModal(iceCoffeeModal)
);

iceCoffeeModalOpen.addEventListener('click', () => toggleModal(iceCoffeeModal));

document.addEventListener('keydown', e => pressEscapeKey(e, iceCoffeeModal));

iceCoffeeModal.addEventListener('click', e => clickBackdrop(e, iceCoffeeModal));
