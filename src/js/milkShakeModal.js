import { onSubmit } from './shared/onSubmit';
import { formatPhoneNumber } from './shared/formatPhoneNumber';
import { handleBlur, handleFocus } from './shared/handleFocusBlur';
import { toggleModal } from './shared/toggleModal';
import { pressEscapeKey } from './shared/pressEscapeKey';
import { clickBackdrop } from './shared/clickBackdrop';

const milkShakeFormEl = document.querySelector('#milkshake-form');
const productsFormInputEls = milkShakeFormEl.querySelectorAll(
  '.products-form__input'
);
const errorMessagesEls = milkShakeFormEl.querySelectorAll(
  '.products-form__error'
);

const nameInputEl = milkShakeFormEl.querySelector(
  '.products-form__input[name="user-name"]'
);
const phoneInputEl = milkShakeFormEl.querySelector(
  '.products-form__input[name="user-phone"]'
);
const textAreaInputEl = milkShakeFormEl.querySelector(
  '.products-form__input[name="user-message"]'
);

const nameErrorMessageEl = milkShakeFormEl.querySelector(
  '#products-form__name-error'
);
const phoneErrorMessageEl = milkShakeFormEl.querySelector(
  '#products-form__phone-error'
);
const textAreaErrorMessageEl = milkShakeFormEl.querySelector(
  '#products-form__text-area-error'
);

const milkshakeModal = document.querySelector(
  '.backdrop[data-modal-milkshake]'
);

const milkshakeModalClose = document.querySelector(
  '.modal-products__close-btn[data-modal-milkshake-close]'
);

const milkshakeModalOpen = document.querySelector(
  '.arrow-button[data-modal-milkshake-open]'
);

const borderOnFocus = '2px solid var(--modal-brown-bg)';
const borderOnBlur = '1px solid var(--modal-brown-bg)';

productsFormInputEls.forEach(input => {
  input.addEventListener('blur', e =>
    handleBlur(e, borderOnFocus, borderOnBlur)
  );
  input.addEventListener('focus', e =>
    handleFocus(e, errorMessagesEls, borderOnFocus, borderOnBlur)
  );
});

phoneInputEl.addEventListener('input', formatPhoneNumber);

milkShakeFormEl.addEventListener('submit', e =>
  onSubmit(
    e,
    nameInputEl,
    phoneInputEl,
    textAreaInputEl,
    nameErrorMessageEl,
    phoneErrorMessageEl,
    textAreaErrorMessageEl,
    milkshakeModal,
    milkShakeFormEl
  )
);

milkshakeModalClose.addEventListener('click', () =>
  toggleModal(milkshakeModal)
);

milkshakeModalOpen.addEventListener('click', () => toggleModal(milkshakeModal));

document.addEventListener('keydown', e => pressEscapeKey(e, milkshakeModal));

milkshakeModal.addEventListener('click', e => clickBackdrop(e, milkshakeModal));
