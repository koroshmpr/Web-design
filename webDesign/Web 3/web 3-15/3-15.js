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
form.submit(toDoList);

//list of todo//
const rTable = $('#row-table');
let l, j;
let listT = [];
$.get('https://jsonplaceholder.typicode.com/todos', function (data) {
    for (j = 0; j < data.length; j++) {
        listT.push(data[j])
    }
    console.log(data)
    for (l = 0; l < 200; l = l + 20) {
        let tr = $('<tr></tr>');
        let td = $('<td></td>');
        td.text(listT[l].userId).addClass('primary', 'p-1');
        tr.append(td);
        let td2 = $('<td></td>')
        td2.addClass('primary', 'p-1').text(listT[l].title);
        tr.append(td2);
        let td4 = $('<td></td>')
        td4.addClass('primary', 'p-1').text(listT[l].completed);
        tr.append(td4);
        rTable.append(tr)
    }
})
