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
            let td4 = document.createElement('td')
            td4.classList.add('bg-warning', 'border', 'border-danger', 'p-2')
            let dl = document.createElement('button')
            let del = function (e) {
                e.preventDefault()
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'DELETE',
                });
                td4.parentElement.remove()
            }
            dl.addEventListener('click', del)
            dl.classList.add('rounded-circle', 'btn', 'btn-danger')
            let ic = document.createElement('i')
            ic.classList.add('fas', 'fa-trash-alt')
            dl.append(ic)
            td4.append(dl)
            let ed = document.createElement('button')
            ed.classList.add('rounded-circle', 'btn', 'btn-info')
            const edt = function (e) {
                e.preventDefault()
                tt.value = td2.innerText
                bd.value = td3.innerHTML
                ui.value = td.innerText
            }
            ed.addEventListener('click', edt)
            let ic2 = document.createElement('i')
            ic2.classList.add('fas', 'fa-edit')
            ed.append(ic2)
            td4.append(ed)
            tr.append(td4)
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
        let td4 = document.createElement('td')
        td4.classList.add('bg-warning', 'rounded-pill')
        let dl = document.createElement('button')
        let del = function (e) {
            e.preventDefault()
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE',
            });
            td4.parentElement.remove()
        }
        dl.addEventListener('click', del)
        dl.classList.add('rounded-circle', 'btn', 'btn-danger')
        let ic = document.createElement('i')
        ic.classList.add('fas', 'fa-trash-alt')
        dl.append(ic)
        td4.append(dl)
        let ed = document.createElement('button')
        ed.classList.add('rounded-circle', 'btn', 'btn-info')
        const edt = function (e) {
            e.preventDefault()
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            tt.value = td2.innerText
            bd.value = td3.innerHTML
            ui.value = td.innerText
        }
        ed.addEventListener('click', edt)
        let ic2 = document.createElement('i')
        ic2.classList.add('fas', 'fa-edit')
        ed.append(ic2)
        td4.append(ed)

        td.innerText = nt[i].userId
        td2.innerText = nt[i].title
        td3.innerText = nt[i].body

        tr.append(td)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        rTable.prepend(tr)
    }
}
// defindung buttons and form//
refresh.addEventListener('click', refresher)
form.addEventListener('submit', submit)
btn.addEventListener('click', submit)