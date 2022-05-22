let score = 0
let find = 0
let num = 0
let i
let speed = 1000
let time = 2
let counter = localStorage.length
const heart = document.getElementById('hrt')
let sco = document.getElementById('sco')
let HighScore = document.getElementById('hsco')
const caught = document.getElementById('caught')
const ls = document.getElementById('ls')
const board = document.getElementById('brd')
const sce = document.getElementById('score')
const flap = document.getElementById('flapping')
const lose = document.getElementById('losing')
const bounce = document.getElementById('bounce')
sco.append(score)
$('#dk').css('transition', `${time}s`)
const allScore = []
window.onload = function () {
    setTimeout(function () { 
        $('#go').css('visibility', 'visible');
        $('#title').css('visibility', 'hidden');
    }, 6500);

    setTimeout(function () { 
        $('#go').css('visibility', 'hidden')
    }, 7000);

    setTimeout(func1, 7500);

     function allStorage() {
        for (let i = 0; i<localStorage.length; i++) {
            allScore[i] = localStorage.getItem(i);  }
        }
    allStorage();
    let findHigh = Number(Math.max(...allScore))
        HighScore.append(findHigh);
}

const x = document.getElementById("myAudio")
function srd() {
    $('#dk').toggleClass('scoreBounce')

    setTimeout(function () { 
        $('#dk').removeClass('scoreBounce');
    }, 700);
    x.play();
    sco.removeChild(sco.childNodes[1]);
    score += 10
    sco.append(score)
    if ((score === 100 && find > 0) || (score === 200 && find > 0 )|| (score === 300 && find > 0) || (score === 400 && find > 0) || (score === 500 && find > 0 )|| (score === 600 && find > 0) || (score === 600 && find > 0) || (score === 700 && find > 0) || (score === 800 && find > 0)) {
        heart.removeChild(heart.lastChild)
        sce.play();
        find--
        speed -= 100 
        time -= 0.1
        let hb = document.createElement('i');
        hb.classList = ('fas fa-heart');
        heart.prepend(hb)
    }
    else if ((score === 100 && find === 0)  || (score === 200 && find === 0) || 
    (score === 300 && find === 0) || (score === 400 && find === 0) || (score === 500 && find === 0) || 
    (score === 600) || (score === 700 && find === 0) || (score === 800 && find === 0) || (score === 900 && find === 0) ) {
        bounce.play()
        speed -= 100 
        score += 20
        time -= 0.1
    }
    }

function func1() {
    $('#dk').css('visibility', 'visible');
    flap.play();
}

function change() {
    var bodyWidth = board.clientWidth
    var bodyHeight = board.clientHeight;
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight / 2));
    $('#dk').css('left', randPosX);
    $('#dk').css('top', randPosY);
    if (randPosX < bodyWidth / 2) {
        num = 180
    }
    else if (randPosX > bodyWidth / 2) {
        num = 0
    };
    $('#dk').css('transform', `rotateY(${num}deg)`);
}
$('#dk').on('click', change);
setInterval(function () {
    change();
}, speed);

setTimeout(() => {
    $('#dk').click(srd);
    $('#losing').click(loser)
}, 7000);

function loser() {
    heart.removeChild(heart.firstChild)
    let ht = document.createElement('i');
    ht.classList = ('fas fa-heart-broken');
    heart.append(ht)
    find++
    $('#losing').toggleClass('loseHeat')

    setTimeout(function () { 
        $('#losing').removeClass('loseHeat');
    }, 500);
    caught.play()
    if (find === 3) {
        const tit = document.createElement('div')
        tit.innerText = 'YOU LOSE'
        tit.classList = "tit"
        ls.play()
        $('#go').css('visibility', 'hidden')
        board.append(tit)
        localStorage.setItem((counter), score)
        setTimeout(function () {
            location.reload()
        }, 2000)
    }
}