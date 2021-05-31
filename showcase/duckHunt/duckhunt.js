
  const dk = document.getElementById('dk')
  window.onload=function()
{
	setTimeout(func1, 6000);
	
};
function func1()
{
	$('#dk').css('visibility', 'visible');
}

$('#dk').on('click',function() {
    var bodyWidth = document.body.clientWidth
    var bodyHeight = document.body.clientHeight;
    var randPosX = Math.floor((Math.random()*bodyWidth));
    var randPosY = Math.floor((Math.random()*bodyHeight));
    
    $('#dk').css('left', randPosX);
    $('#dk').css('top', randPosY);
  });