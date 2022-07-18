const formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener('click', function(event) {
    document.getElementById("userName").value = "";     // Clening input value
    document.getElementById("userPassword").value = ""; // Cleaning input value
    event.preventDefault();
});