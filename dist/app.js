window.hideBtn = (id) => {
    document.querySelector(`#${id}`).classList.replace(`inline-flex`, `hidden`);
}
window.showBtn = (id) => {
    document.querySelector(`#${id}`).classList.replace(`hidden`, `inline-flex`);
}
window.nav = (id) => {

    hideBtn('log-out-div')
    hideBtn('sm-log-out-div')
    let doc = Array.from(document.querySelectorAll(`#${id}`), inp => inp.classList);
    doc.map(inp => {
        inp.replace(`text-gray-50`, `text-blue-500`)
        inp.add(`border-b-4`)
    })
}
window.showNav = (id) => {
    document.querySelector(`#${id}`).classList.replace(`hidden`, `flex`);
}
window.hideNav = (id) => {
    document.querySelector(`#${id}`).classList.replace(`flex`, `hidden`);
}

window.logIn = (id, id2) => {
    hideBtn(id)
    showBtn(id2)
}
window.logOut = (id, id2) => {
    hideBtn(id)
    showBtn(id2)
}
window.valid = () => {
    let err = true;
    let name = document.querySelector(`#name`).value;
    let email = document.querySelector(`#email`).value;
    let msg = document.querySelector(`#message`).value;
    if (name == null || name.length < 4){
        document.querySelector(`#nameErr`).innerHTML = "Name field is emty";
        err = false;
    }
    if (!email.endsWith(`@gmail.com`)){
        document.querySelector(`#passErr`).innerHTML = "Password field is emty";
        err = false;
    }
    if (msg == null || msg.length < 5){
        document.querySelector(`#msgErr`).innerHTML = "No mwssae Written";
        err = false;
    }
    return err;
}
window.action = () => {
    showNav('sm-nav');
    let doc = Array.from(document.querySelectorAll(`#main`), inp => inp.classList);
    doc.map(inp => {
        inp.replace(`inline-flex`, `hidden`)
    })
}
window.reaction = () => {
    hideNav('sm-nav')
    let doc = Array.from(document.querySelectorAll(`#main`), inp => inp.classList);
    doc.map(inp => {
        inp.replace(`hidden`, `inline-flex`)
    })
}