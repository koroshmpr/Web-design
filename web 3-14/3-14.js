  
$(".box").on("click",function(){
    if($(this).attr("mode")==="hide"){
        $(this).toggle(1000).toggle(1000)
        $(this).attr("mode","slide")
    }
    else if($(this).attr("mode")==="slide"){
        $(this).slideToggle(1000).slideToggle(1000)
        $(this).attr("mode","fade")
    }
    else if($(this).attr("mode")==="fade"){
        $(this).fadeToggle(1000).fadeToggle(1000)
        $(this).attr("mode","hide")
    }
})