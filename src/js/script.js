/**
 * Add a specific class on the top-wrapper
 */
$(function () {

    /**
     * Add class on '.top-wrapper'
    */
    if ($('.top-wrapper').length) {

        var topWrapper = $('.top-wrapper');
        topWrapper.addClass('wifthCarousel');

    }
});

/**
 * Main carousel
 */
$(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 50,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
});

/**
 *
 * @param {email we want to test} mail
 * @returns true / false on email value
 */
function isValidEmail(mail) {

    var testMail = /^\S+@\S+\.\S+$/;

    if (testMail.test(mail)) {
        return true;
    } else {

        return false;
    }
}

/**
 * Connexion rollover on submit
 */
$('#validate').on('click', function () {
    
    var userMail = $('#userMail').val();

    if (isValidEmail(userMail)) { //

        $('#connexion-rollover').addClass('logged'); // Adding a class to change the display
        $('#connexion-rollover').html(userMail); // Display entered email

    // Ajax datas
    $.post("test.php", {

        email: userMail
    })
    .done(function (response) {

        $('#connexion-rollover').setCustomValidity(response);
    });
    } else { // If non valid email

        $('#userMail').addClass('error'); // Change mail input BG color
        return false;
    }
});