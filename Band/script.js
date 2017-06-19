$(document).ready(function () {
    $('.btn-collapse').click(function (e) {
        $('#main-menu').toggleClass('active');

        e.preventDefault();
    });
    $('#main-menu li').has('ul').addClass('has-child');

    // Add smooth scrolling to all links in navbar + footer link
    $("#main-menu li a, footer a[href='#carousel']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // add active class to item beacuse of position
    $(window).scroll(function () {
        $("#main-menu li a").each(function () {
            var hash = this.hash;
            var item = $(hash);
            var itempos = item.offset().top;
            var winTop = $(window).scrollTop();
            if(itempos < winTop +200) {
                $("#main-menu li").removeClass("active");
                $(this).parent().addClass("active");
            }

        });
    });
    var rowsize = $("#blog .row").height();
    var winsize = $(window).width();
    if(winsize < 350){
      $("#blog .carousel-inner , #blog .item").css("padding-bottom" , rowsize - 220);
    }else{
      $("#blog .carousel-inner , #blog .item").css("padding-bottom" , rowsize - 150);
    }
});
