const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);





//adicionar lançamento
document.getElementById("transaction-form").addEventListener("submit", function(e){
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input".value);
    const data = document.getElementById("data-input".value);
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type:type , description:description, data:date
    });

    savedata(data);
    e.target.reset();
    myModal.hide();
    
    gettransactions();


    alert("Lançamento  feito com SUCESSO!");


});

checkloged();

function checklogged(){
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(!logged) {
        window.location.href= "index.html";
    }

    const datauser = localStorage.getItem(logged);
    if(datauser) {
         data = JSON.parse(datauser);
    }

    gettransactions();
    
    

}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";

}

function gettransactions(){
    const transactions =data.transactions;
    const transactionsHtml = ``;

    if(transactions.length) {
        transactions.forEach((item) => {
            let type ="entrada";

            if(item.type ==="2") {
                type = "saída";
            }
            transactionsHtml = `
            <tr>
             <th scope="row">${item.date}</th>
             <td>${item.value.tofixed(2)}</td>
             <td>${type}</td>
             <td>${item.description}</td>
             </tr>
            `
        }); 
    }

    document.getElementById("transactions-list").innerHTML = transactionsHtml;
};

function savedata(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}