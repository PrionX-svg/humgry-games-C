function validateSignupPage() {
    var success = true;

    var names = document.getElementById('name').value;

    if (names == '' || names == '1234567890') {
        success = false;
        alert('Please enter your name correctly');
    }

    var email = document.getElementById('email').value;

    if (email.value == '' || !email.endsWith("@gmail.com")) {
        success = false;
        alert('Please input the correct email');
    }

    var address = document.getElementById('address').value;

    if (address.value == '') {
        success = false;
        alert('Please fill the address');
    }

    var maleGenderChecked = document.getElementById('male').checked;
    var femaleGenderChecked = document.getElementById('female').checked;

    if (!maleGenderChecked && !femaleGenderChecked) {
        alert('Please select your gender.');
        return false;
    }

    var dob = document.getElementById('dob').value;

    var date = new Date(dob.value);
    var year = date.getFullYear();

    var now = new Date();
    var year2 = now.getFullYear();

    console.log(year);
    console.log(year2 - 18);

    if (year >= year2 - 18) {
        success = false;
        alert('Sorry, you still under 18');
    }

    var password = document.getElementById('pw').value;

    if (password.value == '' || password.value == ' ') {
        success = false;
        alert('Incorrect password');
    }

    let checkbox = document.getElementById('agreement');

    if (checkbox.checked == false) {
        success = 0;
        alert('For using our website you must agree to the user agreement');
    }

    return success;

}
