$(".box").on("click",function(){
    if($(this).attr("mode")==="red"){
        $(this).css('backgroundColor','teal'),
        $(this).attr("mode","teal")
    }
    else if($(this).attr("mode")==="teal"){
        $(this).css('backgroundColor','rgb'+'(189, '+ '74, '+ '74)'),
        $(this).attr("mode","red")
    }
})
let i
let countera = 0
for(i=0; i<$('.box').lengh;i++){
        countera++
    }
    $('.countera').prepend(countera)