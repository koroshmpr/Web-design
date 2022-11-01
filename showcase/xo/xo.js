const xsound = document.getElementById('xsound')
const osound = document.getElementById('osound')
const winsound = document.getElementById('winsound')
const draw = document.getElementById('draw')
const highScoreO = document.getElementById('scoreO')
const highScoreX = document.getElementById('scoreX')
const board = document.getElementById("board")
let box = $('.cell')
let reld = document.getElementById('reld')
let xWinScore = localStorage.getItem('xWins')
let oWinScore = localStorage.getItem('oWins')
let result = document.getElementById('result')
var scoreCheck = 0

window.onload = function () {
    highScoreO.append(oWinScore)
    highScoreX.append(xWinScore)
    setTimeout(function intro() {
        board.classList.remove("intro") 
        result.classList.remove("pulse") 
    } , 500)
}

function rd(e) {
    e.preventDefault()
    $('.cell').text( ' ')
    $('.cell').css('backgroundColor', 'white');
    $('.cell').attr("Condition", "rdy")
    $('.cell').attr("mode", "white")
    $('.cell').attr("place", " ")
    result.innerText = 'X turn ';
    scoreCheck = 0
    board.classList.add("intro") 
    result.classList.add("pulse") 
    setTimeout(function intro() {
        board.classList.remove("intro") 
        result.classList.remove("pulse") 
    } , 500)
    findScore
    // location.reload()
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
$('#result').attr("state", " ")
scoreCheck = 1
xWinScore = 0
oWinScore = 0
}


reld.addEventListener('click', rd)
$('.cell').on("click", function () {
    if ($(this).attr("mode") === "white" & $(this).attr("Condition") !== "checkx" & $(this).attr("Condition") !== "checko") {
        $(this).css('backgroundColor', 'teal'),
        $('.cell').attr("mode", "teal"),
            this.innerText = 'X'
            $(this).attr("Condition", "checkx"),
            $(this).attr("place", "used")
            $('#result').text('O')
        winner()
        xsound.play()
    }
    else if ($(this).attr("mode") === "teal" & $(this).attr("Condition") !== "checkx" & $(this).attr("Condition") !== "checko") {
        $(this).css('backgroundColor', 'red'),
            $('.cell').attr("mode", "white"),
            this.innerText = 'O'
        $(this).attr("Condition", "checko")
        $(this).attr("place", "used")
            $('#result').text('X')
        winner()
        osound.play()
    }
})

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
            $('#result').text('X win')
        $('.cell').attr("mode", "none")
        winsound.play()
        if(scoreCheck === 1) {
            localStorage.setItem("xWins", 1)
            highScoreX.innerText = 1
            scoreCheck = 0
        } else {
            localStorage.setItem("xWins", ++xWinScore)
            highScoreX.innerText = xWinScore
            scoreCheck = 0
            
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
            $('#result').text('O win')
        $('.cell').attr("mode", "none")
        winsound.play()
        if (scoreCheck === 1) {
            localStorage.setItem("oWins", 1)
            highScoreO.innerText = 1
            scoreCheck = 0
        } else {
            localStorage.setItem("oWins", ++oWinScore)
            highScoreO.innerText = oWinScore
            scoreCheck = 0
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
        scoreCheck = 0
       }
}
