import { toggleModal } from './toggleModal';
import { modals } from './toggleModal';

function clickBackdrop(e, modal) {
  if (e.currentTarget === e.target) toggleModal(modal);
}

modals.forEach(modal => {
  modal.addEventListener('click', e => clickBackdrop(e, modal));
});
