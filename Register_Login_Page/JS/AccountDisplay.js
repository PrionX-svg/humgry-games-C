document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user information from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const address = urlParams.get('address');
    const gender = urlParams.get('gender');
    const dob = urlParams.get('dob');

    // Display user information on the account page
    document.getElementById('nameOutput').textContent = name;
    document.getElementById('emailOutput').textContent = email;
    document.getElementById('addressOutput').textContent = address;
    document.getElementById('genderOutput').textContent = gender;
    document.getElementById('dobOutput').textContent = dob;
});
