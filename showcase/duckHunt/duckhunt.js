let score = 0
let sco = document.getElementById('sco')
sco.append(score)
window.onload=function()
{
	setTimeout(func1, 7000);
	
};
const x = document.getElementById("myAudio")
function srd () {
    x.play();
    sco.removeChild(sco.childNodes[1]);
    score +=10
    sco.append(score)
}
$('#dk').click(srd)
function func1()
{
	$('#dk').css('visibility', 'visible');
}

const board = document.getElementById('brd')
function change() {
    var bodyWidth = board.clientWidth
    var bodyHeight = board.clientHeight;
    var randPosX = Math.floor((Math.random()*bodyWidth/1.2));
    var randPosY = Math.floor((Math.random()*bodyHeight/2));
    $('#dk').css('left', randPosX);
    $('#dk').css('top', randPosY);

  }
$('#dk').on('click', change);
setInterval(function(){ 
    change()
}, 3000);