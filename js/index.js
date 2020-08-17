$(document).ready(function(){
    // $(".droper").click(function(){
    //     $(".nav-sm-dropdown").toggle();
    // });

    // handle navigation
    function openNav() {
        $("#mySidenav").css("width","100%");
    }
      
    function closeNav() {
        $("#mySidenav").css("width","0")
    }

    $(".droper").click(openNav);
    $(".closenav").click(closeNav);
    $(".closers").click(closeNav);


    // handle shadow for bavbar scroll
    var navLarge = $('.nav-lg'); 
    var navSmall = $('.nav-sm');
    var threshold = 100; // Change to pixels scrolled

    $(window).scroll(function () {
        var distance = $(this).scrollTop();
        if (distance > threshold) { // If scrolled past threshold
            navLarge.addClass("shadow-bottom");
            navSmall.addClass("shadow-bottom");
        } else { // If user scrolls back to top
            if (navLarge.hasClass("shadow-bottom")) { // And if class has been added
                navLarge.removeClass("shadow-bottom"); // Remove it
            }
            if (navSmall.hasClass("shadow-bottom")) { // And if class has been added
                navSmall.removeClass("shadow-bottom"); // Remove it
            }
        }

        
    });


    $(".form-group").click(function(){
        $(this).css("border-color", "#1ca803");
    });

    // handle change between employer tab and job seeker tab
    $(".jobseeker-btn").click(function(){
        $(".employer-div").hide();
        $(".jobseeker-div").show();
    });

    $(".employer-btn").click(function(){
        $(".jobseeker-div").hide();
        $(".employer-div").show();
       
    });

})