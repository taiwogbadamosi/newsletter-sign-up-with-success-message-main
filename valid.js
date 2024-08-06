const form = document.querySelector("form");
const error = document.querySelector("span");
const input = document.getElementById("email");
const p1 = document.getElementById("container");
const success = document.querySelector(".success");
const blue = document.querySelector(".blue");
const dismiss = document.getElementById("dismiss-button")

function main(e){
    let reg = /^\S+@\S+\.\S+$/
    let email = getEmail(e);
    if(reg.test(email)){
        p1.style.display = "none"
        success.style.display = "block"
        
    }
    else{
        //failure
        input.style.background = "pink"
        input.style.borderColor = "red"
        error.style.display = "inline"

    }
}
function getEmail(e){
    e.preventDefault(e);
    const data = new FormData(e.target);
    const emailObject = Object.fromEntries(data);
    return emailObject.email;
}
function revert(e){
    if(window.innerWidth > 800){
        p1.style.display = "flex"
        
    }
    else{
        p1.style.display = "block"
    }
    success.style.display = "none"
}
form.addEventListener("submit", main);
dismiss.addEventListener("click", revert);

//is string empty
//is it valid email
