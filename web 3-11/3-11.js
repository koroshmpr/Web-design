// create browser name //
document.getElementById('exp')
exp.innerText = window.navigator.userAgent
//variable defining//
let i
let counter = localStorage.length
const form = document.getElementById("myform")
form.classList.add('formse')
const input = document.getElementById("todolist")
const list = document.getElementById("lists")
// create list of localStorages //
for (i = 0; i < localStorage.length; i++) {
    let lil = document.createElement('li')
    let btn2 = document.createElement("button")
    btn2.classList.add('cl')
    btn2.innerText = 'X'
    let inner = localStorage.getItem(i)
    lil.innerText = inner
    lil.classList.add('task')
    list.append(lil)
    lil.prepend(btn2)
    close = function (det) {
        det.preventDefault()
        btn2.parentElement.remove()
    }
    btn2.addEventListener('click', close)
}
//create toDolist //
const toDoList = function (e) {
    e.preventDefault()
    localStorage.setItem(counter, input.value)
    let flist = document.createElement('li')
    flist.innerText = localStorage.getItem(counter)
    flist.classList.add('task')
    let btn = document.createElement("button")
    btn.classList.add('cl')
    btn.innerText = "X"
    counter = counter + 1
    flist.prepend(btn)
    list.append(flist)
    // function for  closing list//
    close = function (c) {
        c.preventDefault()
        btn.parentElement.remove()
    }
    document.contact - form.reset();
    btn.addEventListener('click', close)
}
form.addEventListener('submit', toDoList)

