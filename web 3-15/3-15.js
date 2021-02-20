//variable defining//
let i
let counter = localStorage.length
const form = $("#myform")
form.attr('class', 'formse')
const input = $("#todolist")
const list = $("#lists")
// create list of localStorages //
for (i = 0; i < localStorage.length; i++) {
    $('<li id = "lil" class="task"></li>')
    $("<button id='btn2' class='cl'>X</button>")
    let inner = localStorage.getItem(i)
    $('#lil').innerText = inner
    $('#list').append($('#lil'))
    $('#lil').prepend($('#btn2'))
    close = function (det) {
        det.preventDefault()
        $('#btn2').parentElement.remove()
    }
    $('#btn2').click(close)
}
//create toDolist //
const toDoList = function (e) {
    e.preventDefault()
    localStorage.setItem(counter, input.value)
    $('<li id="flist" class="task"></li>')
    $('#flist').innerText = localStorage.getItem(counter)
    $("<button id='btn' class='cl'>X</button>")
    counter = counter + 1
    $('#flist').prepend($('#btn'))
    $('#list').append($('#flist'))
    // function for  closing list//
    close = function (c) {
        c.preventDefault()
        $('#btn').parentElement.remove()
    }
    $('#btn').click(close)
}
form.submit(toDoList);

