window.onload = function() {
    addVisit();
    renderVisits();
    renderGames();
    validator();
    document.getElementById("contactForm").reset();
}

function validator() {
    let validator = new Validator(document.querySelector('form[name="contactForm"]'), function (err, res) {
        if (res) {
            sendMessage();
        }
    });
}
function addVisit() {

    let response = fetch('http://localhost:8080/visitas/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
    }).catch(function(err) {
        console.error(err);
    });
}

var url = "localhost:8080";

//TOTAL DE VISITAS À PAGINA
async function renderVisits() {
    
    const visitasTotaisHTML = document.getElementById("visitasTotais");
    const response1 = await fetch('http://localhost:8080/visitas/');
    const visitas = await response1.json();
    var visitasTotais = 0;
    
    for (visits of visitas) {
        visitasTotais = visits;
        visitasTotaisHTML.innerHTML = visits;
    }
}

//TOTAL DE JOGOS
async function renderGames() {
    const jogosTotaisHTML = document.getElementById("jogosTotais");
    const response2 = await fetch('http://localhost:8080/atividades/');
    const jogos = await response2.json();
    var jogosTotais = 0;

    try {
        if (isIterable(jogos)) {
            for (jogo of jogos) {
                jogosTotais++;
            }
        }
    }
    catch(err){
        throw err
    }
    jogosTotaisHTML.innerHTML = jogosTotais;
}

//FORM CONTACTE-NOS
function sendMessage() {
    var data = {};
    data.Nome = document.getElementById("nameC").value;
    data.Email = document.getElementById("emailC").value;
    data.Mensagem = document.getElementById("messageC").value;
    data.Tipo = 0;
    fetch('http://localhost:8080/mail/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        console.log(response)
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            document.getElementById("contactForm").reset();
            alert("Pedido com sucesso");
        }
    }).catch(function (err) {

    }); 

}
//FUNÇOES AUXILIARES
function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}