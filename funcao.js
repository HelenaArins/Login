$( "#btnLogin" ).click(function() {
    if(!(document.getElementById("login").value))
        $("label.erroLogin").text("Login field is mandatory");
    else if(document.getElementById("login").value.length<=3)
        $("label.erroLogin").text("Login field length should be bigger than 3");
    else
        $("label.erroLogin").text("");

    if(!(document.getElementById("pass").value))
        $("label.erroPass").text("Password field is mandatory");
    else if(document.getElementById("pass").value.length<=5)
        $("label.erroPass").text("Password field length should be bigger than 5");
    else
        $("label.erroPass").text("");

    if(document.getElementById("login").value.length>3 && document.getElementById("pass").value.length>5)
        $("label.sucesso").text("Login Successful!"); 
    else 
        $("label.sucesso").text(""); 
  });

$( "#btnBack" ).click(function() {
    $("#erroPass").text("");
    $("#sucesso").text("");
    $("#erroLogin").text("");
    $("#pass").val("");
    $("#login").val("");
});