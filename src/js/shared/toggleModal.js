const openButtons = document.querySelectorAll('[data-modal-open]');
const closeButtons = document.querySelectorAll('[data-modal-close]');

export const modals = document.querySelectorAll('.backdrop');

export function toggleModal(modal) {
  const form = modal.querySelector('.form');

  if (!modal.classList.contains('is-hidden' && 'no-form-backdrop')) {
    form.querySelectorAll('[name], .error-message').forEach(el => {
      if (el.name) el.style.borderColor = '';
      else el.style.display = 'none';
    });

    form?.reset();
  }

  modal.classList.toggle('is-hidden');

  document.body.classList.toggle('modal-open');
}

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalName = button.dataset.modalOpen;

    const modal = document.querySelector(
      `.backdrop[data-modal="${modalName}"]`
    );

    toggleModal(modal);
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalName = button.dataset.modalClose;

    const modal = document.querySelector(
      `.backdrop[data-modal="${modalName}"]`
    );

    toggleModal(modal);
  });
});
