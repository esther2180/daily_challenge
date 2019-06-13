$("document").ready (function() {
    $("#but").click(function() {
        let username = [
            "robert",
            "alex",
            "wendy",
            "nathan",
            "maddy"
        ],
        password = [
            "robert123",
            "alex123",
            "wendy123",
            "nathan123",
            "maddy123"
        ],
    
        uName = $("#username").val(),
        uPassword = $("#password").val(),
        index = username.indexOf(uName),
        success = $("#success"),
        danger = $("#danger");
    
        if (password[index] === uPassword) {
            success.show();
            success.text(`Welcome ${uName}`)
            danger.hide();
        } else {
            success.hide();
            danger.show();
            danger.text("You're doing something wrong!")
        }
    })
     

    $("html").keypress(function(e) {
        if (e.which == 13) {
            $("#but").click();
        }
    }); 
});
