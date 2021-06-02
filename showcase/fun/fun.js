let lista = document.createElement('li')
let listb = document.createElement('li')
let ula = document.getElementById('coua')
let ulb = document.getElementById('coub')
const click = document.getElementById('click')
let countera = 400
let counterb = 0
lista.innerText = countera
listb.innerText = counterb
ula.append(lista)
ulb.append(listb)
$(".box").on("click", function () {
    if ($(this).attr("mode") === "red") {
        $(this).css('backgroundColor', 'teal'),
            $(this).attr("mode", "teal"),
            ulb.removeChild(ulb.childNodes[1])
        ula.removeChild(ula.childNodes[1])
        let lista = document.createElement('li')
        let listb = document.createElement('li')
        countera -= 1
        lista.innerText = countera
        ula.append(lista)
        counterb += 1
        listb.innerText = counterb
        ulb.append(listb)
        click.play()
    }
    else if ($(this).attr("mode") === "teal") {
        $(this).css('backgroundColor', 'rgb(189, 74, 74)'),
        $(this).attr("mode", "red"),
            ulb.removeChild(ulb.childNodes[1])
        ula.removeChild(ula.childNodes[1])
        let lista = document.createElement('li')
        let listb = document.createElement('li')
        countera += 1
        lista.innerText = countera
        ula.append(lista)
        counterb -= 1
        listb.innerText = counterb
        ulb.append(listb)
        click.play()
    }
})