document.body.style.backgroundColor = 'teal'
const form = document.getElementById('myform')
const link = document.getElementById('link')
const linkUrl = document.getElementById('linkUrl')
const src = document.getElementById('search')
const reload = document.getElementById('reload')
const sec = document.getElementById('sec')
linkUrl.setAttribute('href', "linkAddres")
function none(evvt) {
    evvt.preventDefault()
}


function search(evt) {
    evt.preventDefault()
    let linkAddres = link.value
    window.location = linkAddres
}
function ref(evtt) {
    evtt.preventDefault()
    location.reload()
}
function linker(et) {
    et.preventDefault()
    const btn = document.getElementById('bt1')
    sec.append(btn)
    btn.addEventListener('click', search)
    form.addEventListener('submit', search)
}
function refresher(ett) {
    ett.preventDefault()
    const btn2 = document.getElementById('bt1')
    sec.append(btn2)
    btn2.addEventListener('click', ref)
    form.addEventListener('submit', ref)
}
src.addEventListener('click', linker)
reload.addEventListener('click', refresher)
form.addEventListener('submit', none)
bt1.addEventListener('click', none)