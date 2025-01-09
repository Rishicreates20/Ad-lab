document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    // Clear previous messages
    message.textContent = '';
    message.style.color = 'red';

    // Validation checks
    if (username.length < 3) {
        message.textContent = 'Username must be at least 3 characters long.';
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        return;
    }

    // Successful registration
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}