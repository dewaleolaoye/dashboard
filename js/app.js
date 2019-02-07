$(document).ready(function(){
    $("#content").load("register.html"); 
    $("#register").click(function(){
        $("#content").load("register.html"); 
    });

    $("#password").click(function(){
        $("#content").load("password.html"); 
    });

    $("#credit").click(function(){
        $("#content").load("credit.html"); 
    });

    $("#user-info").click(function(){
        $("#content").load("info.html"); 
    });
});

