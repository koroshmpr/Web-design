const nameForm = document.getElementById('name');
const phoneFrom = document.getElementById('phone');
const mobileForm = document.getElementById('mobile');
const addressForm = document.getElementById('address');
const levelForm = document.getElementById('level');
const holdForm = document.getElementById('hold');
const btnSignUp = document.getElementById('signup-btn');
const formSignUp = document.getElementById('form-signup');
const res = document.getElementById('res');
const restart = function (e) {
    e.preventDefault();
    formSignUp.reset();
    while (inMsg.firstChild) {
        inMsg.removeChild(inMsg.firstChild)
    }
};
let success = function (e) {
    e.preventDefault();
    if (nameForm.value != '' && mobileForm.value != '' && phoneFrom.value != '' && addressForm.value != '' && holdForm.value != '' && levelForm.value != '') {
        while (inMsg.firstChild) {
            inMsg.removeChild(inMsg.firstChild)
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                fullName: nameForm.value,
                phoneNumber: phoneFrom.value,
                mobile: mobileForm.value,
                address: addressForm.value,
                level: levelForm.value,
                hold: holdForm.value,
            }),
            headers: { 'Content-type': 'application/json', },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        btnSignUp.setAttribute('data-target', '#modal-signup'),
            formSignUp.setAttribute('data-target', '#modal-signup'),
            formSignUp.reset()
    }
    else {
        while (inMsg.firstChild) {
            inMsg.removeChild(inMsg.firstChild)
        }
        let msg = document.createElement('p');
        msg.innerText = 'لطفا اطلاعات خود را وارد کنید';
        inMsg.prepend(msg);
        btnSignUp.setAttribute('data-target', '#');
        formSignUp.setAttribute('data-target', '#')
    }
};
btnSignUp.addEventListener('click', success);
formSignUp.addEventListener('submit', success);
res.addEventListener('click', restart);