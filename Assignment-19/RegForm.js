$(document).ready(function () {
    let usedEmails = ["test@example.com", "hello@gmail.com"];

    $('#registerBtn').click(function () {
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let pass = $('#password').val().trim();
        let valid = true;

        $('#name, #email, #password').removeClass('error');

        if (name === "") {
            $('#name').addClass('error');
            valid = false;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email) || usedEmails.includes(email)) {
            $('#email').addClass('error');
            valid = false;
        }

        if (pass.length < 8) {
            $('#password').addClass('error');
            valid = false;
        }

        if (valid) {
            $('#successMsg').fadeIn(300);
        }
    });
});