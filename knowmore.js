const validEmail = 'test@example.com';
const validPassword = 'password123';

const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('login-email').value.trim();
    const passwordInput = document.getElementById('login-pass').value.trim();
    const emailError = document.getElementById('email-error-message');
    const passwordError = document.getElementById('password-error-message');

    if (emailInput === '' || passwordInput === '') {
        emailError.textContent = 'Email cannot be empty';
        passwordError.textContent = 'Password cannot be empty';
        event.preventDefault(); // Prevent form submission
    } else if (emailInput !== validEmail || passwordInput !== validPassword) {
        emailError.textContent = 'Invalid credentials';
        passwordError.textContent = 'Invalid credentials';
        event.preventDefault(); // Prevent form submission
    } else {
        emailError.textContent = '';
        passwordError.textContent = '';
        // Simulate successful login or redirect here
    }
});

const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass);
    const iconEye = document.getElementById(loginEye);

    iconEye.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    });
};

showHiddenPass('login-pass', 'login-eye');
