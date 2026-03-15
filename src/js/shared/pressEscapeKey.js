import { toggleModal } from './toggleModal';
import { modals } from './toggleModal';

function pressEscapeKey(e, modal) {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    toggleModal(modal);
  }
}

document.addEventListener('keydown', e => {
  modals.forEach(modal => pressEscapeKey(e, modal));
});
