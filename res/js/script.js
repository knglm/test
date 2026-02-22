// script.js: Handle form submission via AJAX for dynamic interaction without page refresh
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
        } else {
            alert('There was an error sending your message.');
        }
    })
    .catch(error => {
        alert('Network error. Please try again later.');
    });
});