// Login Form Handling
document.querySelector('.login-section form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        alert('Please fill in all required fields');
        return;
    }
    console.log('Login submitted:', { username, password });
    alert('Login successful! (This is a demo)');
});

// Registration Form Handling
document.querySelector('.register-section form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    
    if (!email || !password || !confirmPassword) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    
    console.log('Registration submitted:', { email, password });
    alert('Registration successful! (This is a demo)');
});

// Password Toggle Functionality
function setupPasswordToggle(inputId) {
    const input = document.getElementById(inputId);
    const toggle = input.nextElementSibling;
    
    toggle.addEventListener('click', function() {
        if (input.type === 'password') {
            input.type = 'text';
            this.textContent = '👁️‍🗨️';
        } else {
            input.type = 'password';
            this.textContent = '👁️';
        }
    });
}

// Initialize password toggles
setupPasswordToggle('password');
setupPasswordToggle('reg-password');
setupPasswordToggle('confirm-password');