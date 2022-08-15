const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checklogged();

//Logar no sistema
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const senha = document.getElementById("password-input").value;
    const session = document.getElementById("session-check").checked;

    const account = getaccount(email);
    
    if(!account) {
        alert("verificar o usuário ou senha novamente.");
        return;
    }
    if(account) {
        if(account.password !== password) {
            alert("verificar o usuário ou senha novamente");
        }

        savessesion(email, session);

        window.localStorage.href= "home.html"
    }

});


//Criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const senha = document.getElementById("password-create-input").value;

    if(email.length <5) {
        alert("Preenchat o campo com e-mail válido.");
        return;
    }

    if(senha.length <4) {
        alert("Preenchat o campo com senha válida.");
        return;
    }

    saveaccount({
        login: email,
        password: senha,
        transaction: []
    });

    myModal.hide();

    alert("Conta criada com sucesso!");

});

function checklogged(){
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(logged) {
        savessesion(logged, session);

        window.location.href= "home.html";
    }

}

function saveaccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data) )

}

function savessesion(data, savessesion) {

    if(savesession) {
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

function getaccount(key) {
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);

    }
        return " nada";

}

