const feedbackForm = document.getElementById('feedbackForm');
const thankYouMessage = document.getElementById('ThankyouMessage');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (feedbackForm.checkValidity()) {
    // Disable the submit button to prevent multiple submissions
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Access and collect the form data
    const formData = new FormData(feedbackForm);

    // Add the 'subject' field if it's not included in the form
    formData.append('subject', 'Your Feedback');

    // Process the collected data as needed
    // For example, send the form data to a server using fetch or XMLHttpRequest

    // Show the thank you message and hide the form
    feedbackForm.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
    feedbackForm.style.display = "none";
    thankYouMessage.style.display = "block";

  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Please fill out all required fields.";
    errorMessage.classList.add('error-message');

    const existingErrorMessage = feedbackForm.querySelector('.error-message');
    if (existingErrorMessage) {
      feedbackForm.removeChild(existingErrorMessage);
    }

    feedbackForm.appendChild(errorMessage);
  }
});