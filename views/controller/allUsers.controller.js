window.onload = function () {
    renderAllUsers();
};


async function renderAllUsers() {
    const conteudo = document.getElementById("info");
    const conteudo1 = document.getElementById("info1");
    conteudo.innerHTML = "";
    conteudo1.innerHTML = "";
    const response = await fetch('http://localhost:8080/users/');
    const users = await response.json();
    for (const utilizador of users) {
        var data1 = new Date(utilizador.data_nascimento);
        var data2 = new Date(utilizador.data_conta_criada);
        var mes1 = data1.getMonth() + 1;
        var mes2 = data2.getMonth() + 1;
        
        const response1 = await fetch('http://localhost:8080/users/nif/' + utilizador.id_user);
        const nif = await response1.json();

        if (utilizador.banido == 1) {
            var newRow = conteudo1.insertRow();
            newRow.innerHTML += "<td>" + utilizador.primeiro_nome + " " + utilizador.ultimo_nome + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.pais + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.localidade + "</td> ";
            newRow.innerHTML += "<td>" + nif.nif_decrypted + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.email + "</td> ";
            newRow.innerHTML += "<td>" + data1.getDate() + '/' + mes1 + '/' + data1.getFullYear() + "</td> ";
            newRow.innerHTML += "<td>" + data2.getDate() + '/' + mes2 + '/' + data2.getFullYear() + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.pontos + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="recusar-b" onclick = desbloquear("' + utilizador.id_user + '")>Desbloquear</button> </td>';
        }
        else {
            var newRow = conteudo.insertRow();
            newRow.innerHTML += "<td>" + utilizador.primeiro_nome + " " + utilizador.ultimo_nome + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.pais + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.localidade + "</td> ";
            newRow.innerHTML += "<td>" + nif.nif_decrypted + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.email + "</td> ";
            newRow.innerHTML += "<td>" + data1.getDate() + '/' + mes1 + '/' + data1.getFullYear() + "</td> ";
            newRow.innerHTML += "<td>" + data2.getDate() + '/' + mes2 + '/' + data2.getFullYear() + "</td> ";
            newRow.innerHTML += "<td>" + utilizador.pontos + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="recusar-b" onclick = bloquear("' + utilizador.id_user + '")>Bloquear</button> </td>';
        }
    }
}

function bloquear(id) {
    var confirmar = confirm("Tem a certeza que pretende bloquear este Utilizador?");
    if (confirmar) {
        bloquearUtilizador(id);
    }
}

async function bloquearUtilizador(id) {
    var url = "http://localhost:8080/users/bloq/" + id;
    var alerta = "Utilizador Bloqueado com sucesso";
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
    }).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            alert(alerta);
            renderAllUsers();
        }
    }).catch(function (err) {
        alert("Erro");
        console.error(err);
    });
}

function desbloquear(id) {
    var confirmar = confirm("Tem a certeza que pretende desbloquear este Utilizador?");
    if (confirmar) {
        desbloquearUtilizador(id);
    }
}

async function desbloquearUtilizador(id) {
    var url = "http://localhost:8080/users/desbloq/" + id;
    var alerta = "Utilizador Desbloqueado com sucesso";
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
    }).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            alert(alerta);
            renderAllUsers();
        }
    }).catch(function (err) {
        alert("Erro");
        console.error(err);
    });
}