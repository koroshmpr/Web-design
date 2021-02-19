const fade = function () {
        $(this).fadeToggle(1000).fadeToggle(1000)
}
const slide = function () {
        $(this).slideUp(1000).slideDown(1000)
}
const hide = function () {
        $(this).hide(1000).show(1000)
}
const efects = [fade, slide, hide]
function random () { 
    let x = Math.floor((Math.random() * 3) + 0)
    return x
}
let value = random()
$('.box').on('click', efects[value])

console.log(value)