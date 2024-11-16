export function formatPhoneNumber(event) {
  let input = event.target;
  let inputValue = input.value.replace(/\D/g, ''); // Remove non-numeric characters

  // Ensure it doesn't insert the +38 part repeatedly
  if (inputValue.startsWith('38')) {
    inputValue = inputValue.slice(2); // Remove initial '38' if it's present in the input value
  }

  let formattedValue = '+38 '; // Start with country code

  // Add formatted phone number step by step
  if (inputValue.length > 0) {
    formattedValue += '(' + inputValue.substring(0, 3); // Area code (first 3 digits)
  }
  if (inputValue.length >= 4) {
    formattedValue += ') ' + inputValue.substring(3, 6); // Next 3 digits
  }
  if (inputValue.length >= 7) {
    formattedValue += ' ' + inputValue.substring(6, 8); // Next 2 digits
  }
  if (inputValue.length >= 9) {
    formattedValue += ' ' + inputValue.substring(8, 10); // Last 2 digits
  }

  // Update the input value without resetting or repeating the country code
  input.value = formattedValue;
}
