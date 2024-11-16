import { onSubmit } from './shared/onSubmit';
import { formatPhoneNumber } from './shared/formatPhoneNumber';
import { handleBlur, handleFocus } from './shared/handleFocusBlur';
import { toggleModal } from './shared/toggleModal';
import { pressEscapeKey } from './shared/pressEscapeKey';
import { clickBackdrop } from './shared/clickBackdrop';

const buyNowFormEl = document.querySelector('#buy-now-form');
const buyNowFormInputEls = buyNowFormEl.querySelectorAll(
  '.buy-now-form__input'
);
const errorMessagesEls = buyNowFormEl.querySelectorAll('.buy-now-form__error');

const nameInputEl = buyNowFormEl.querySelector(
  '.buy-now-form__input[name="user-name"]'
);
const phoneInputEl = buyNowFormEl.querySelector(
  '.buy-now-form__input[name="user-phone"]'
);
const textAreaInputEl = buyNowFormEl.querySelector(
  '.buy-now-form__input[name="user-message"]'
);

const nameErrorMessageEl = buyNowFormEl.querySelector(
  '#buy-now-form__name-error'
);
const phoneErrorMessageEl = buyNowFormEl.querySelector(
  '#buy-now-form__phone-error'
);
const textAreaErrorMessageEl = buyNowFormEl.querySelector(
  '#buy-now-form__text-area-error'
);
const buyNowModal = document.querySelector(
  '.buy-now__backdrop[data-modal-buy-now]'
);

const buyNowModalClose = document.querySelector(
  '.buy-now__close-btn[data-modal-buy-now-close]'
);

const buyNowModalOpen = document.querySelector(
  '.header__btn[data-modal-buy-now-open]'
);

const mobileBuyNowModalOpen = document.querySelector(
  '.mobile-menu__btn[data-buy-now-modal-open]'
);

const borderOnFocus = '2px solid var(--modal-green-bg)';
const borderOnBlur = '1px solid var(--modal-green-bg)';

buyNowFormInputEls.forEach(input => {
  input.addEventListener('blur', e =>
    handleBlur(e, borderOnFocus, borderOnBlur)
  );
  input.addEventListener('focus', e =>
    handleFocus(e, errorMessagesEls, borderOnFocus, borderOnBlur)
  );
});

phoneInputEl.addEventListener('input', formatPhoneNumber);

buyNowFormEl.addEventListener('submit', e =>
  onSubmit(
    e,
    nameInputEl,
    phoneInputEl,
    textAreaInputEl,
    nameErrorMessageEl,
    phoneErrorMessageEl,
    textAreaErrorMessageEl,
    buyNowModal,
    buyNowFormEl
  )
);

buyNowModalClose.addEventListener('click', () => toggleModal(buyNowModal));

buyNowModalOpen.addEventListener('click', () => toggleModal(buyNowModal));

mobileBuyNowModalOpen.addEventListener('click', () => toggleModal(buyNowModal));

document.addEventListener('keydown', e => pressEscapeKey(e, buyNowModal));

buyNowModal.addEventListener('click', e => clickBackdrop(e, buyNowModal));
