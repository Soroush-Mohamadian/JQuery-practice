

$('.btn').click(function () { ($('this').text() === 'hide') ? $('this').text() === 'more' : $('this').text() === 'hide' })
$('.btn').click(function (){('p.text').toggle()})

$(".palette ul li").on("click",function() {
    
    $currentCol = $('.pic').css("background-color");
    $color = $(this).css("background-color");
    $('.pic').css({"background-color": $color});
    $(this).css({"background-color": $currentCol})
})

$(".menu").on("click", function (){
    if ($(".leftSide").css({"width": "50rem"})) {
        $(".leftSide").css({"width": "10rem" , "height":"100vh"  })
        $(".rightSide").css({"width": "90rem" })
        
        
    } 
    
})