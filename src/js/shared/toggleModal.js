const openButtons = document.querySelectorAll('[data-modal-open]');
const closeButtons = document.querySelectorAll('[data-modal-close]');
const videoPlayer = document.querySelector('.how-its-made-modal__video');

export const modals = document.querySelectorAll('.backdrop');

export function toggleModal(modal) {
  const form = modal.querySelector('.form');

  if (!modal.classList.contains('is-hidden')) {
    form?.querySelectorAll('[name], .error-message').forEach(el => {
      if (el.name) el.style.borderColor = '';
      else el.style.display = 'none';
    });

    form?.reset();
  }

  videoPlayer?.pause();

  modal.classList.toggle('is-hidden');

  document.body.classList.toggle('modal-open');
}

function handleModal(modalName) {
  const modal = document.querySelector(`.backdrop[data-modal="${modalName}"]`);

  toggleModal(modal);
}

openButtons.forEach(button => {
  const modalName = button.dataset.modalOpen;

  button.addEventListener('click', () => handleModal(modalName));
});

closeButtons.forEach(button => {
  const modalName = button.dataset.modalClose;

  button.addEventListener('click', () => handleModal(modalName));
});
