const loginForm = document.querySelector('.login-form');
const signUp = document.querySelector('#signup');

async function login(event) {
    event.preventDefault()
    const username = document.querySelector('#Username').value.trim();
    const password = document.querySelector('#InputPassword1').value.trim();
    if (username && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Login failed');
        }
    }
}

function signupRedirect () {
    document.location.replace('/api/login/signup')
}

loginForm.addEventListener('submit', login)
signUp.addEventListener('click', signupRedirect)