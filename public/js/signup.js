const signupForm = document.querySelector('.signup-form');

async function signup(event) {
    event.preventDefault()
    const email = document.querySelector('#AddEmail').value.trim();
    const username = document.querySelector('#AddUsername').value.trim();
    const password = document.querySelector('#CreatePassword').value.trim();
    const password2 = document.querySelector('#ConfirmPassword').value.trim();
    console.log (email, username, password, password2)
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
        if (response.ok) {
            console.log('sucessfully signed up')
            document.location.replace('/api/login');
        } else {
            alert('Failed to signup.');
        }
    }
}

signupForm.addEventListener('submit', signup)