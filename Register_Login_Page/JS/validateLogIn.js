function validateLogin() {
    var success = true;

    var email = document.getElementById('email').value;

    if (email === '' || !email.endsWith("@gmail.com")) {
        success = false;
        alert('Please input a valid email address');
    }

    var password = document.getElementById('pw').value;
    
    if (password === '') {
        success = false;
        alert('Please input a password');
    }

    if (success) {
        window.location.href = "/HomePage.html";
    }
}
