import { toggleModal } from './shared/toggleModal';
import { pressEscapeKey } from './shared/pressEscapeKey';
import { clickBackdrop } from './shared/clickBackdrop';

const howItsMadeModal = document.querySelector(
  '.backdrop[data-modal-how-its-made]'
);

const howItsMadeClose = document.querySelector(
  '.how-its-made__close-btn[data-modal-how-its-made-close]'
);

const howItsMadeOpen = document.querySelector(
  '.how-its-made-btn[data-modal-how-its-made-open]'
);

const videoPlayer = document.querySelector('.how-its-made__video');

howItsMadeClose.addEventListener('click', () => {
  toggleModal(howItsMadeModal);
  videoPlayer.pause();
});

howItsMadeOpen.addEventListener('click', () => toggleModal(howItsMadeModal));

document.addEventListener('keydown', e => {
  pressEscapeKey(e, howItsMadeModal);
  videoPlayer.pause();
});

howItsMadeModal.addEventListener('click', e => {
  clickBackdrop(e, howItsMadeModal);
  videoPlayer.pause();
});
