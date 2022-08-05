const loginButton = document.querySelector('#login');
const logoutButton = document.querySelector('#logout');

function loginRedirect(event) {
    document.location.replace('/api/login');
}

function logoutRedirect(event) {
    event.preventDefault();
    //Deletes logged_in cookie
}

loginButton.addEventListener('click', loginRedirect)
// logoutButton.addEventListener('click', logoutRedirect)