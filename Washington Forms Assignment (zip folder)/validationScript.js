//Najya Washington WEB 115
// JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const inputField = document.getElementById ('inputField');
  const errorElement = document.getElementById('error');

  form.addEventListener ('submit', (event) => {
    event.preventDefault();

    const inputValue = inputField.value.trim();
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (inputValue === '') {
      errorElement.textContent = 'Please enter a value.';
    } else if (!alphanumericRegex.test(inputValue)) {
      errorElement.textContent = 'Input must be alphanumeric.';
    } else {
      errorElement.textContent = 'Input is valid and submitted.';
      form.reset();
    }
  });
});