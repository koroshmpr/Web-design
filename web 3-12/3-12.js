const tt = document.getElementById('title')
const bd = document.getElementById('body')
const ui = document.getElementById('userId')
const form = document.getElementById('myform')
const btn = document.getElementById('btn')
const rTable = document.getElementById('row-table')
const refresh = document.getElementById('refresh')
let i, j
let list = []
let nt = []
//calling resources from jsonplaceholder.com//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (result) {
        return result.json()
    })
    .then(function (result2) {
        for (j = 0; j < result2.length; j++) {
            list.push(result2[j])
        }
        for (i = 0; i < list.length; i++) {
            let td = document.createElement('td')
            let tr = document.createElement('tr')
            td.classList.add('bg-warning', 'border', 'border-danger')
            td.innerText = list[i].userId
            tr.append(td)
            let td2 = document.createElement('td')
            td2.classList.add('bg-warning', 'border', 'border-danger', 'font')
            td2.innerText = list[i].title
            tr.append(td2)
            let td3 = document.createElement('td')
            td3.classList.add('bg-warning', 'font', 'border', 'border-danger', 'p-2')
            td3.innerText = list[i].body
            tr.append(td3)
            rTable.append(tr)
        }
    })
//creating new source for jsonplaceholder.com//
const submit = function (e) {
    e.preventDefault()
    let payload = {
        title: tt.value,
        body: bd.value,
        userId: Number(ui.value),
    }
    // pushing form value in the nt array//
    nt.push(payload)
    //creating a resource in jasonplaceholder.com//
    let detail = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('https://jsonplaceholder.typicode.com/posts', detail)
        .then(function (result) {
            return result.json()
        })
    form.reset();
    console.log(payload)
}
//refreshing list for new input//
const refresher = function (e) {
    e.preventDefault()
    
    for (i = 0; i < nt.length; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.classList.add('bg-warning', 'rounded-pill')
        let td2 = document.createElement('td')
        td2.classList.add('bg-warning', 'rounded-pill')
        let td3 = document.createElement('td')
        td3.classList.add('bg-warning', 'rounded-pill')
        
        td.innerText = nt[i].userId
        td2.innerText = nt[i].title
        td3.innerText = nt[i].body

        tr.append(td)
        tr.append(td2)
        tr.append(td3)
        rTable.prepend(tr)
    }
}
// defindung buttons and form//
refresh.addEventListener('click', refresher)
form.addEventListener('submit', submit)
btn.addEventListener('click', submit)