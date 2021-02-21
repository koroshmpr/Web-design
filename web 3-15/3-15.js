//variable defining//
let i
let counter = localStorage.length
const form = $('#myform').addClass('formse')
const input = $('#todolist')
const list = $('#lists')
// create list of localStorages //
for (i = 0; i < localStorage.length; i++) {
    let lil = $('<li></li>').addClass('task').text(localStorage.getItem(i))
    const btn = $('<button></button>').text("X").addClass('cl')
    close = (e) => {
        e.preventDefault()
        btn.parent(this).remove()
    }
    lil.prepend(btn)
    list.append(lil)
    btn.click(close)
}
//create toDolist //
const toDoList = function (e) {
    e.preventDefault()
    localStorage.setItem(counter, input.val())
    let flist = $('<li></li>')
    flist.addClass('task').text(localStorage.getItem(counter))
    const btn = $('<button></button>').text("X").addClass('cl')
    close = (e) => {
        e.preventDefault()
        btn.parent(this).remove()
    }
    flist.prepend(btn)
    list.append(flist)
    counter = counter + 1
    btn.click(close)
    this.reset()
}
form.submit(toDoList)
