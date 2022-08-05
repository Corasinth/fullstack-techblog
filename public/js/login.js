const { response } = require("express");

const loginForm = document.querySelector('.login-form');
const email = document.querySelector('#inputEmail1').value.trim();
const password = document.querySelector('#InputPassword1').value.trim();

async function login(event) {
    event.preventDefault()
    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'aplication/json' },
        })
    }
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Login failed');
    }
}

loginForm.addEventListener('submit', login)