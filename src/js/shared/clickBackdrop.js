import { toggleModal } from './toggleModal';

export function clickBackdrop(e, modal) {
  if (e.currentTarget === e.target) toggleModal(modal);
}
