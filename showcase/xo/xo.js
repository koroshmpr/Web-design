const xsound = document.getElementById('xsound')
const osound = document.getElementById('osound')
const winsound = document.getElementById('winsound')
const draw = document.getElementById('draw')
const highScoreO = document.getElementById('scoreO')
const highScoreX = document.getElementById('scoreX')
let box = $('.cell')
let reld = document.getElementById('reld')
let xWinScore = localStorage.getItem('xWins')
let oWinScore = localStorage.getItem('oWins')
let scoreCheck = false
let base = 0
function rd(e) {
    e.preventDefault()
    location.reload()
}
function findScore () {
     if (!xWinScore) {
         highScoreX.append(0)
     }
     if (!oWinScore) {
         highScoreO.append(0)
     }
     if (xWinScore) {
         highScoreX.append(xWinScore)
     }
     if (oWinScore) {
         highScoreO.append(oWinScore)
     }
}
function reseter () {
highScoreO.innerText = 0
highScoreX.innerText = 0
localStorage.setItem("oWins", 0)
localStorage.setItem("xWins", 0)
scoreCheck = true
}


reld.addEventListener('click', rd)
$('.cell').on("click", function () {
    if ($(this).attr("mode") === "white" & $(this).attr("Condition") !== "checkx" & $(this).attr("Condition") !== "checko") {
        $(this).css('backgroundColor', 'teal'),
            this.innerText = 'X'
        $('.cell').attr("mode", "teal"),
            $(this).attr("Condition", "checkx"),
            $(this).attr("place", "used")
        winner()
        xsound.play()
    }
    else if ($(this).attr("mode") === "teal" & $(this).attr("Condition") !== "checkx" & $(this).attr("Condition") !== "checko") {
        $(this).css('backgroundColor', 'red'),
            $('.cell').attr("mode", "white"),
            this.innerText = 'O'
        $(this).attr("Condition", "checko")
        $(this).attr("place", "used")
        winner()
        osound.play()
    }
})
let result = document.getElementById('result')
function winner() {
    if ($('#one').attr('condition') === 'checkx' & $('#two').attr('condition') === 'checkx' & $('#three').attr('condition') === 'checkx' || 
        $('#one').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx' || 
        $('#one').attr('condition') === 'checkx' & $('#four').attr('condition') === 'checkx' & $('#seven').attr('condition') === 'checkx' ||
        $('#four').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#six').attr('condition') === 'checkx'||
        $('#seven').attr('condition') === 'checkx' & $('#eight').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx'||
        $('#seven').attr('condition') === 'checkx' & $('#eight').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx' || 
        $('#three').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#seven').attr('condition') === 'checkx'||
        $('#two').attr('condition') === 'checkx' & $('#five').attr('condition') === 'checkx' & $('#eight').attr('condition') === 'checkx'||
        $('#three').attr('condition') === 'checkx' & $('#six').attr('condition') === 'checkx' & $('#nine').attr('condition') === 'checkx')  {
        result.innerText = 'X Win'
        $('.cell').attr("mode", "none")
        winsound.play()
        if(scoreCheck) {
            localStorage.setItem("xWins", 1)
            highScoreX.innerText = 1
        } else {
            localStorage.setItem("xWins", ++xWinScore)
            highScoreX.innerText = xWinScore
            
            
        }
    }
  
    else if ($('#one').attr('condition') === 'checko' & $('#two').attr('condition') === 'checko' & $('#three').attr('condition') === 'checko' ||
             $('#one').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko' ||
             $('#one').attr('condition') === 'checko' & $('#four').attr('condition') === 'checko' & $('#seven').attr('condition') === 'checko' ||
             $('#four').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#six').attr('condition') === 'checko' ||
             $('#seven').attr('condition') === 'checko' & $('#eight').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko' ||
             $('#seven').attr('condition') === 'checko' & $('#eight').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko' ||
             $('#three').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#seven').attr('condition') === 'checko' ||
             $('#two').attr('condition') === 'checko' & $('#five').attr('condition') === 'checko' & $('#eight').attr('condition') === 'checko' ||
             $('#three').attr('condition') === 'checko' & $('#six').attr('condition') === 'checko' & $('#nine').attr('condition') === 'checko' ) {
        result.innerText = 'O Win'
        $('.cell').attr("mode", "none")
        winsound.play()
        if (scoreCheck) {
            localStorage.setItem("oWins", 1)
            highScoreO.innerText = 1
        } else {
            localStorage.setItem("oWins", ++oWinScore)
            highScoreO.innerText = oWinScore
        }
    }
 
    else if ($('#one').attr('place') === 'used' &
     $('#two').attr('place') === 'used' & $('#three').attr('place') === 'used' &
      $('#four').attr('place') === 'used' & $('#five').attr('place') === 'used' & 
      $('#six').attr('place') === 'used' & $('#seven').attr('place') === 'used' &
       $('#eight').attr('place') === 'used' & $('#nine').attr('place') === 'used') {
           result.innerText = 'Draw',
        $('.cell').attr("mode", "none"),
        draw.play()
       }
}
var min = document.getElementById('minutes');
var sec = document.getElementById('seconds');
var minutes = 0;
var seconds = 0;
function startTimer() {
    seconds++;

    if (seconds < 9) {
        sec.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
        sec.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        min.innerHTML = "0" + minutes;
        seconds = 0;
    }

    if (minutes > 9) {
        min.innerHTML = minutes;
    }

}
let Interval
function start() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 999);
}
$('.cell').click(start)
