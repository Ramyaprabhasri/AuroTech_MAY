const form = document.getElementById('my-form');
const message = document.getElementById('pop-up-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Your form submission logic here (optional)

  // Show the pop-up message
  message.classList.add('show');

  // Optionally, hide the message after a certain time
  setTimeout(() => {
    message.classList.remove('show');
  }, 3000); // Hide after 3 seconds (adjust as needed)
});
