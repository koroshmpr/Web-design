const xsound= document.getElementById('xsound')
const osound= document.getElementById('osound')
const winsound = document.getElementById('winsound')
let box = $('.cell')
let reld = document.getElementById('reld')
function rd(e) {
    e.preventDefault()
    location.reload()
}
reld.addEventListener('click', rd)
$('.cell').on("click", function () {
    if ($(this).attr("mode") === "white" & $(this).attr("Condition") !== "checkx" & $(this).attr("Condition") !== "checko" ){
        $(this).css('backgroundColor', 'teal'),
        this.innerText ='X'
            $('.cell').attr("mode", "teal"),
            $(this).attr("Condition", "checkx")
            winner()
            xsound.play()
    }
    else if ($(this).attr("mode") === "teal" & $(this).attr("Condition") !== "checkx" & $(this).attr("Condition") !== "checko") {
        $(this).css('backgroundColor', 'red'),
            $('.cell').attr("mode", "white"),
        this.innerText ='O'
            $(this).attr("Condition", "checko")
            winner()
            osound.play()
    }
})
let result = document.getElementById('result')
function winner () {
    if ($('#one').attr('condition') === 'checkx' & $('#two').attr('condition') === 'checkx' & $('#three').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#one').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#one').attr('condition') === 'checkx' & $('#four').attr('condition') === 'checkx' & $('#seven').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#four').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#six').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#seven').attr('condition') === 'checkx' & $('#eight').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#seven').attr('condition') === 'checkx' & $('#eight').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#three').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#seven').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#two').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#eight').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#three').attr('condition') === 'checkx' & $('#six').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx') {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    
    else if ($('#one').attr('condition') === 'checko' & $('#two').attr('condition') === 'checko' & $('#three').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#one').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#one').attr('condition') === 'checko' & $('#four').attr('condition') === 'checko' & $('#seven').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#four').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#six').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#seven').attr('condition') === 'checko' & $('#eight').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#seven').attr('condition') === 'checko' & $('#eight').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#three').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#seven').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#two').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#eight').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
    }
    else if ($('#three').attr('condition') === 'checko' & $('#six').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko') {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
        
    }
}
var min = document.getElementById( 'minutes' );
 var sec = document.getElementById( 'seconds' );
 var minutes = 0;
 var seconds = 0;
 function startTimer() {
 seconds++;
 
 if( seconds < 9 ) {
 sec.innerHTML = "0" + seconds;
 }
 
 if( seconds > 9 ) {
 sec.innerHTML =  seconds;
 }
 
 if ( seconds > 59 ) {
 minutes++;
 min.innerHTML = "0" + minutes;
 seconds = 0;
 }
 
 if ( minutes > 9 ) {
 min.innerHTML = minutes;
 }
 
 }
 let Interval
 function start() {
    clearInterval( Interval );
    Interval = setInterval( startTimer, 999 );
    }
    $('.cell').click(start)
