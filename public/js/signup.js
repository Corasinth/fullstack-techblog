const signupForm = document.querySelector('.signup-form');

async function signup(event) {
    event.preventDefault()
    const username = document.querySelector('#AddUsername').value.trim();
    const password = document.querySelector('#CreatePassword').value.trim();
    const password2 = document.querySelector('#ConfirmPassword').value.trim();
    if (password !== password2) {
        alert('passwords do not match');
        return;
    }
    if (password && username) {
        const response = await fetch('/api/login/signup', {
            method: 'POST',
            body: JSON.stringify({username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            console.log('sucessfully signed up')
            document.location.replace('/api/login');
        } else {
            console.log(response)
            alert('Failed to signup.');
        }
    }
}

signupForm.addEventListener('submit', signup)