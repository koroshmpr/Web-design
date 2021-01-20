// Creating to do list //
document.body.style.backgroundColor = 'teal'
let form = document.getElementById("myform")
let input = document.getElementById("todolist")
form.style.marginLeft = '80px'
form.style.marginTop = '80px'
form.style.fontSize = '50px'
form.onsubmit = function (d) {
    d.preventDefault()
    let list = document.getElementById("lists")
    let task = document.createElement("li")
    task.innerText = input.value
    task.style.color = "white"
    task.style.fontSize = "30px"
    task.style.marginLeft = '30px'
    let btn = document.createElement("button")
    btn.style.backgroundColor = 'red'
    btn.style.borderRadius = "30px"
    btn.style.marginLeft = '15px'
    btn.style.cursor = "pointer"
    btn.style.padding = '0px ' +'7px '+'0px '+'7px '
    btn.style.fontSize = '15px'
    btn.innerText = "X"
    task.append(btn)
    list.append(task)
    btn.onclick = function (c) {
        btn.parentElement.remove()
    }
    document.contact-form.reset();
}
//end of to do list //

// moyse over Event //
let mylist = document.getElementById('lists')
mylist.onmouseover=function(){
    //include element and parent //
    console.log("checked ..")
}
// Mouse Enter Event //
form.onmouseenter=function(){
    console.log("Looking ..")
    //just element//
}
