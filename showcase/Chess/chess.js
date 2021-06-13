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
        blackls.append(ev.target.firstChild)
    }
    else if (mored  == 'sarwc' || mored == 'sarwa' ||
    mored == 'sarwb' || mored == 'sarwd' || mored == 'sarwe' ||
     mored == 'sarwf' || mored == 'sarwg' || mored == 'sarwh' ||
     mored == 'rokhwl' || mored == 'rokhwr' || 
      mored == 'asbwl' || mored == 'asbwr' || 
      mored == 'filwl' || mored == 'filwr' || 
      mored == 'qw'){
          whitels.append(ev.target.firstChild)
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