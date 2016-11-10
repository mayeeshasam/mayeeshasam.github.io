// SMOOTH SCROLL

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(function() {
    var lastItems = $(".gallery .image");
    lastItems.slice(lastItems.length - 2).addClass("last-image");
});

function clearText() {
    document.getElementById("form-textarea").value = "";
    document.getElementById("form-email").value = "";
    document.getElementById("form-name").value = "";
    document.getElementById("form-password").value = "";
}

$(function() {
    $("#contact-submit").hide();
    $("#contact-message").on('keyup', function() {
        if(this.value.length) {
            $("#contact-submit").fadeIn();
        }
        else {
            $("#contact-submit").fadeOut();
        }
    });
});
