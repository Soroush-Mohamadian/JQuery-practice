

$('.btn').click(function () { ($('this').text() === 'hide') ? $('this').text() === 'more' : $('this').text() === 'hide' })
$('.btn').click(function () { $('p.text') }).toggle()

$(".palette ul li").on("click", function () {

    $currentCol = $('.pic').css("background-color");
    $color = $(this).css("background-color");
    $('.pic').css({ "background-color": $color });
    $(this).css({ "background-color": $currentCol })
})

$(".menu").on("click", function () {

    $(".leftSide").css({ "width": "10%", "height": "100vh" }).toggle()
    $(".rightSide").css({ "width": "90%" }).toggle()
    $(".yellow").css({ "position": "absolute", "margin-top": "-45rem", "width": '50px', "height": "50px" }).toggle()
    $(".green").css({ "position": "absolute", "margin-top": "-35rem", "width": '50px', "height": "50px" }).toggle()
    $(".blue").css({ "position": "absolute", "margin-top": "-25rem", "width": '50px', "height": "50px" }).toggle()
    $(".red").css({ "position": "absolute", "margin-top": "-15rem", "width": '50px', "height": "50px" }).toggle()



})

$('#submit').on("click", function isAlfaNumeric() {
    if ($('#username'.val() == /[0-9a-zA-Z]/)) {
        $('#username').css({ 'background-color': 'green' });
        alert("username is correct")
    } else {
        $('#username').css({ 'background-color': 'red' });
        alert("write an alfanumeric username")
    }
})

$('#submit').on("click", function isEmail() {
    if ($('#email'.val() == /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $('#email').css({ 'background-color': 'green' });
        alert("email is valid")
    } else {
        $('#email').css({ 'background-color': 'red' });
        alert("write a valid email")
    }
})


$('#submit').on("click", function isEmpty() {
    if ($('#email').length == 0 || $("#username").val() == "" || $("#password").val() == "" || $("#passwordRepeat").val() == "" || $("#country").val() == "") {
        alert('All fields are mandatory');
    }
})

$('#submit').on("click", function isMatch() {
    if ($('#password').val() == $('#passwordRepeat').val()) {
        $('#password').css({ 'background-color': 'green' })
        alert('passwords match')
    } else {
        $('#password').css({ 'background-color': 'red' });
        alert("passwords don't match")
    }
})