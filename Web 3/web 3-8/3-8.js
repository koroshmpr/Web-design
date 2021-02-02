document.body.style.backgroundColor = "cyan"
const form = document.getElementById('form')
form.style.marginLeft = '400px'
const username = document.getElementById('username')
let main = document.getElementById("main")
main.style.display = "flex"
main.style.flexWrap = "wrap"
let z = 10
let i, x
let usernameValue
form.onsubmit = function aa (e) {
    e.preventDefault()
    usernameValue = username.value
    let j = Number(username.value)
    if (!Number.isNaN(j) && j > 0 && j < 11) {
        for (i = 1; i <= j; i++) {
            let div = document.createElement('div')
            div.style.backgroundColor = 'purple'
            div.style.marginLeft = '10px'
            div.style.border = "2px" + ' ' + 'solid' + ' ' + '#222'
            div.style.marginTop = '70px'
            div.style.height = z + 'px';
            div.style.width = z + 'px';
            z = z * 2
            main.append(div)
        }
    }
    else if (username.value === "teal") {
        let div = document.createElement('div')
        div.style.backgroundColor = 'teal'
        div.style.marginLeft = '100px'
        div.style.border = "5px " + 'solid ' + '#222'
        div.style.marginTop = '70px'
        div.style.height = '400px';
        div.style.width = '400px';
        main.append(div)

    }
    else if (j >= 11) {
        let p = document.createElement('p')
        p.style.fontSize = "100px"
        p.style.color = 'red'
        p.style.backgroundColor = 'white'
        p.style.marginTop = '50px'
        p.style.marginLeft = '300px'
        p.style.border = "5px " + 'solid ' + '#222'
        p.innerText = "cant show this much"
        main.append(p)
    }
    else {
        let p = document.createElement('p')
        p.style.fontSize = "100px"
        p.style.color = 'red'
        p.style.backgroundColor = 'white'
        p.style.marginTop = '50px'
        p.style.marginLeft = '300px'
        p.style.border = "5px " + 'solid ' + '#222'
        p.innerText = "Wrong Value"
        main.append(p)
    }
    document.contact - form.reset();

}
