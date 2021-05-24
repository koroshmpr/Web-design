let box = $('.cell')
let reld = document.getElementById('reld')
// function x() {
//     $(this).innerText = 'X'
//     $(this).css('backgroundColor', 'red')
//     $(this).css('fontSize', '100px')
// }
// function o() {
//     $(this).innerText = 'X'
//     $(this).css('backgroundColor', 'teal')
//     $(this).css('fontSize', '100px')
// }
function rd(e) {
    e.preventDefault()
    location.reload()
}
reld.addEventListener('click', rd)
$('.cell').on("click", function () {
    if ($(this).attr("mode") === "white" & $(this).attr("Condition") !== "check") {
        $(this).css('backgroundColor', 'teal'),
        this.innerText ='X'
            $('.cell').attr("mode", "teal"),
            $(this).attr("Condition", "check")
    }
    else if ($(this).attr("mode") === "teal" & $(this).attr("Condition") !== "check") {
        $(this).css('backgroundColor', 'red'),
            $('.cell').attr("mode", "white"),
        this.innerText ='O'
            $(this).attr("Condition", "check")
    }
    // else if ($(this).attr("mode") === "red") {
    //     $(this).css('backgroundColor', 'teal'),
    //         $('.cell').attr("mode", "teal")
    // }

})
