$(document).ready(function() {
    $('.multiselectclass').multiselect({
        enableClickableOptGroups: true,
        enableCollapsibleOptGroups: true,
        collapseOptGroupsByDefault: false
    });

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap'
    });


    $(".addspec").click(function() {
        $(".addsuggestion > .row:last").append("<div class='col-xs-12 col-sm-6'><div class='form-group text' style='position:relative;'><i class='deletethis'></i><label class='mainlabel' for='text1'>أضف اقتراحك</label><input type='text' class='form-control' id='text1' placeholder='أضف اقتراحك'></div></div>");
    });

    $(".deletethis").click(function() {
        $(this).parent().remove();
    });

    $('body').on('click', '.deletethis', function() {
        $(this).parent().parent().remove();

    });

    $(".hidepassword").click(function() {

        $(this).toggleClass("checked-label");

    });

    $("#password").keyup(function() {
        var m = $(this).val();
        var n = m.length;

        // Function for checking
        check(n, m);
    });


});

function myFunction() {
    var x = document.getElementById("mysInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var percentage = 0;

function check(n, m) {
    if (n < 6) {
        percentage = 0;
        $(".progress-bar").css("background", "#dd4b39");
    } else if (n < 8) {
        percentage = 20;
        $(".progress-bar").css("background", "#9c27b0");
    } else if (n < 10) {
        percentage = 40;
        $(".progress-bar").css("background", "#ff9800");
    } else {
        percentage = 60;
        $(".progress-bar").css("background", "#4caf50");
    }

    // Check for the character-set constraints
    // and update percentage variable as needed.

    //Lowercase Words only
    if ((m.match(/[a-z]/) != null)) {
        percentage += 10;
    }

    //Uppercase Words only
    if ((m.match(/[A-Z]/) != null)) {
        percentage += 10;
    }

    //Digits only
    if ((m.match(/0|1|2|3|4|5|6|7|8|9/) != null)) {
        percentage += 10;
    }

    //Special characters
    if ((m.match(/\W/) != null) && (m.match(/\D/) != null)) {
        percentage += 10;
    }

    // Update the width of the progress bar
    $(".progress-bar").css("width", percentage + "%");
}