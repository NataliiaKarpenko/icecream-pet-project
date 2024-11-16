import { onSubmit } from './shared/onSubmit';
import { formatPhoneNumber } from './shared/formatPhoneNumber';
import { handleBlur, handleFocus } from './shared/handleFocusBlur';
import { toggleModal } from './shared/toggleModal';
import { pressEscapeKey } from './shared/pressEscapeKey';
import { clickBackdrop } from './shared/clickBackdrop';

const icecreamFormEl = document.querySelector('#icecream-form');
const productsFormInputEls = icecreamFormEl.querySelectorAll(
  '.products-form__input'
);
const errorMessagesEls = icecreamFormEl.querySelectorAll(
  '.products-form__error'
);

const nameInputEl = icecreamFormEl.querySelector(
  '.products-form__input[name="user-name"]'
);
const phoneInputEl = icecreamFormEl.querySelector(
  '.products-form__input[name="user-phone"]'
);
const textAreaInputEl = icecreamFormEl.querySelector(
  '.products-form__input[name="user-message"]'
);

const nameErrorMessageEl = icecreamFormEl.querySelector(
  '#products-form__name-error'
);
const phoneErrorMessageEl = icecreamFormEl.querySelector(
  '#products-form__phone-error'
);
const textAreaErrorMessageEl = icecreamFormEl.querySelector(
  '#products-form__text-area-error'
);
const icecreamModal = document.querySelector(
  '.modal-products__backdrop[data-modal-icecream]'
);

const icecreamModalClose = document.querySelector(
  '.modal-products__close-btn[data-modal-icecream-close]'
);

const icecreamModalOpen = document.querySelector(
  '.arrow-button[data-modal-icecream-open]'
);

const borderOnFocus = '2px solid var(--modal-green-bg)';
const borderOnBlur = '1px solid var(--modal-green-bg)';

productsFormInputEls.forEach(input => {
  input.addEventListener('blur', e =>
    handleBlur(e, borderOnFocus, borderOnBlur)
  );
  input.addEventListener('focus', e =>
    handleFocus(e, errorMessagesEls, borderOnFocus, borderOnBlur)
  );
});

phoneInputEl.addEventListener('input', formatPhoneNumber);

icecreamFormEl.addEventListener('submit', e =>
  onSubmit(
    e,
    nameInputEl,
    phoneInputEl,
    textAreaInputEl,
    nameErrorMessageEl,
    phoneErrorMessageEl,
    textAreaErrorMessageEl,
    icecreamModal,
    icecreamFormEl
  )
);

icecreamModalClose.addEventListener('click', () => toggleModal(icecreamModal));

icecreamModalOpen.addEventListener('click', () => toggleModal(icecreamModal));

document.addEventListener('keydown', e => pressEscapeKey(e, icecreamModal));

icecreamModal.addEventListener('click', e => clickBackdrop(e, icecreamModal));
