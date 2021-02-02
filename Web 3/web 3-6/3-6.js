let x, i
let z = 20
let main = document.createElement('div')
document.body.append(main)
main.style.height = 1000 + "px"
document.body.style.backgroundColor = "teal"
main.style.marginLeft = 200 +"px"
main.style.backgroundColor = "teal"
main.style.display = "flex"
main.style.flexWrap = "wrap"
x = prompt('Enter Number of list ')
Number(x)
if (x !== isNaN && x < 11) {
    for (i = 0; i < x; i++) {
        let div = document.createElement('div')
        div.style.backgroundColor = 'rgb(' + z / 1.7 + ', ' + z / 1.7 + ', ' + z / 1.7 + ')'
        div.style.marginLeft = 10 + 'px'
        div.style.boxShadow = 0 +'px' + ' ' + 15 +'px' + ' ' + 20 +'px' + ' ' + 0 +'px' + ' ' + '#222'
        div.style.border = z/10 + "px" + ' ' +  'solid' + ' '+ '#222'
        div.style.marginTop = 70 + 'px'
        div.style.height = z + 'px';
        div.style.width = z + 'px';
        z = z * 2
        main.append(div)
    }
}
else if (x > 10) {
    alert("Can't show this Much");

}
else {
    x === isNaN;
    alert("wrong Value");
}

