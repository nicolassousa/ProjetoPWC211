window.onload = function () {
    renderSponsors();
}


async function renderSponsors() {

    const bodyTabela1 = document.getElementById("bodyTabela");
    bodyTabela1.innerHTML = "";
    const response = await fetch('http://localhost:8080/patrocinadores/');
    const Patrocinadores = await response.json();
  
    for (const Patrocinador of Patrocinadores) {
        if (Patrocinador.Resultado == 0) {
            var newRow = bodyTabela1.insertRow();
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + Patrocinador.Nome_Empresa + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + Patrocinador.Email + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + Patrocinador.Contacto + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + Patrocinador.Valor + "€ </td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + Patrocinador.Localizacao + " </td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="btn btn-primary" onclick = aceitar("'+ Patrocinador.idPatrocinador +'")>Aceitar</button> <button type="button" class="recusar-b" onclick = recusar("'+ Patrocinador.idPatrocinador +'")>Recusar</button> </td>';
        }
    }
}

function aceitar(id) {
    var confirmar = confirm("Tem a certeza que pretende aceitar este Patrocinador ?");
    if (confirmar) {
        alterarResultado(id, true);
    }
}

function recusar(id) {
    var confirmar = confirm("Tem a certeza que pretende recusar este Patrocinador ?");
    if (confirmar) {
        alterarResultado(id, false);
    }
}

async function alterarResultado(id, value) {
    var url = "";
    var alerta = "";

    if (value) {
        url = "http://localhost:8080/patrocinadores/" + id + "/aceitar"
        alerta = "Patrocinador Aceite com sucesso";
    } else {
        url = "http://localhost:8080/patrocinadores/" + id + "/recusar"
        alerta = "Patrocinador Recusado com sucesso";
    }
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
    }).then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            alert(alerta);
            renderSponsors();
        }
    }).catch(function(err) {
        alert("Erro");
        console.error(err);
    });
}