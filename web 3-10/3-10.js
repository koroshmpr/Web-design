document.body.style.backgroundColor = 'teal'
const form = document.getElementById('myform')
const link = document.getElementById('link')
const btn = document.getElementById('btn')
const linkUrl = document.getElementById('linkUrl')
const asn = document.getElementById('assign')
const type = document.getElementById('type')
linkUrl.setAttribute('href', "linkAddres")

form.onsubmit = function (evt) {
    evt.preventDefault()
    let linkAddres = link.value
    window.location = linkAddres
}
btn.onclick = function (e) {
    let linkAddres = link.value
    e.preventDefault()
    window.location = linkAddres
}
type.onclick = function(evtt){
    evtt.preventDefault()
    window.location ='#'
}