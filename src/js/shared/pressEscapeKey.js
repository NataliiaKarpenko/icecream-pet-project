import { toggleModal } from './toggleModal';

export function pressEscapeKey(e, modal) {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    toggleModal(modal);
  }
}
