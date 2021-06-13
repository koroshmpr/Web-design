const blackls = document.getElementById('loserb')
const whitels = document.getElementById('loserw')
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.firstChild != null) {
        const mored = ev.target.firstChild.getAttribute('id')
        if (mored  == 'sarbc' || mored == 'sarba' ||
    mored == 'sarbb' || mored == 'sarbd' || mored == 'sarbe' ||
     mored == 'sarbf' || mored == 'sarbg' || mored == 'sarbh' ||
     mored == 'rokhbl' || mored == 'rokhbr' || 
     mored == 'asbbl' || mored == 'asbbr' || 
     mored == 'filbl' || mored == 'filbr' || 
     mored == 'qb'){
        let ja = document.createElement('div')
         ja.append(ev.target.firstChild)
          blackls.append(ja)
    }
    else if (mored  == 'sarwc' || mored == 'sarwa' ||
    mored == 'sarwb' || mored == 'sarwd' || mored == 'sarwe' ||
     mored == 'sarwf' || mored == 'sarwg' || mored == 'sarwh' ||
     mored == 'rokhwl' || mored == 'rokhwr' || 
      mored == 'asbwl' || mored == 'asbwr' || 
      mored == 'filwl' || mored == 'filwr' || 
      mored == 'qw'){
         let ja = document.createElement('div')
         ja.append(ev.target.firstChild)
          whitels.append(ja)
        }
    }
        ev.target.appendChild(document.getElementById(data));
    
}
$('.black').attr('ondrop', 'drop(event)')
$('.black').attr("ondragover", "allowDrop(event)")
$('.white').attr('ondrop', 'drop(event)')
$('.white').attr("ondragover", "allowDrop(event)")
$('.p1').attr('draggable', 'true')
$('.p1').attr('ondragstart', 'drag(event)')
$('.p2').attr('draggable', 'true')
$('.p2').attr('ondragstart', 'drag(event)')


$('.fas').on('click',function() {
    console.log(this.getAttribute('id') , this.parentElement.getAttribute('id'))
    if(this.getAttribute('id') == 'sarwd'){

        $('#d-five').css('backgroundColor' , 'khaki')
        $('#d-five').css('opacity' , '10%')
        $('#d-six').css('backgroundColor' , 'khaki')
        $('#d-six').css('opacity' , '10%')
    }
})