window.onload = function() {
    // renderUtilizadores(); TABELA FOI MODIFICADA NA BASE DE DADOS
};



async function renderUtilizadores() {
    const conteudo = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    conteudo.innerHTML = "";
    const response = await fetch('http://localhost:8080/users/');
    const Utilizadores = await response.json();
    for (const Utilizador of Utilizadores) {
        if ( /*Utilizador.Ativo.data[0] == 1*/ true) {
            var newRow = conteudo.insertRow();
            newRow.innerHTML += "<th>" + Utilizador.id_user + "</th> ";
            newRow.innerHTML += "<td>" + Utilizador.primeiro_nome + Utilizador.ultimo_nome + "</td> ";
            newRow.innerHTML += "<td>" + Utilizador.pais + "</td> ";
            newRow.innerHTML += "<td>" + Utilizador.cidade + "</td> ";
            newRow.innerHTML += "<td>" + Utilizador.nif + "</td> ";
            newRow.innerHTML += "<td>" + Utilizador.email + "</td> ";
            newRow.innerHTML += "<td>" + Utilizador.data_nascimento.substring(0, 10) + "</td> ";
            newRow.innerHTML += "<td>" + Utilizador.classificacao_media + "</td> ";
            newRow.innerHTML += "<td>" + Utilizador.pontos + "</td> ";
            newRow.innerHTML += "<th><a href=\"#\" onclick=\"eliminar(" + Utilizador.id_user + ")\"> Eliminar</a></th> ";
        }
    }
}

function eliminar(id) {
    var confirmar = confirm("Tem a certeza que pretende eliminar este Utilizador ?");
    if (confirmar) {
        eliminarUtilizador(id);
    }
}


async function eliminarUtilizador(id) {
    var url = "http://localhost:8080/users/" + id;
    var alerta = "Utilizador Eliminado com sucesso";
    fetch(url, {
        method: 'DELETE'
    }).then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            alert(alerta);
            renderUtilizadores();
        }
    }).catch(function(err) {
        alert("Erro");
        console.error(err);
    });
}