const signupForm = document.querySelector('.login-form');
const email = document.querySelector('#AddEmail').value.trim();
const username = document.querySelector('#AddUsername').value.trim();
const password = document.querySelector('#AddPassword').value.trim();
const password2 = document.querySelector('#ConfirmPassword').value.trim();

async function signup(event) {
    event.preventDefault()
    if (password !== password2) {
        alert('passwords do not match');
        return;
    }
    if (email && password && username) {
        const response = await fetch('/api/login/signup', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'aplication/json' },
        })
    }
    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Failed to signup.');
    }
}