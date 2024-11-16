function handleStyleChange(input, borderOnFocus, borderOnBlur) {
  const isActive = input.value !== '' || input === document.activeElement;
  input.classList.toggle('active', isActive);
  // input.style.borderWidth = input === document.activeElement ? '2px ' : '1px ';
  input.style.border =
    input === document.activeElement ? borderOnFocus : borderOnBlur;
}

export function handleBlur(event, borderOnFocus, borderOnBlur) {
  const input = event.target;
  handleStyleChange(input, borderOnFocus, borderOnBlur);
}

export function handleFocus(
  event,
  errorMessagesEls,
  borderOnFocus,
  borderOnBlur
) {
  const input = event.target;
  handleStyleChange(input, borderOnFocus, borderOnBlur);
  errorMessagesEls.forEach(errorMessage => {
    if (input.name === errorMessage.dataset.type) {
      errorMessage.style.display = 'none';
    }
  });
}
