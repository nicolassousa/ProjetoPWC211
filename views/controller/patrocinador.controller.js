window.onload = function() {
    renderSponsors();
};


async function renderSponsors() {
    const bodyTabela1 = document.getElementById("dados");
    const bodyTabela2 = document.getElementById("dadosn");
    const bodyTabela3 = document.getElementById("dadosn2");
    bodyTabela1.innerHTML = "";
    bodyTabela2.innerHTML = "";
    bodyTabela3.innerHTML = "";
    const response = await fetch('http://localhost:8080/patrocinadores/');
    const Patrocinadores = await response.json();

    for (const Patrocinador of Patrocinadores) {
        if (Patrocinador.Ativo.data[0] == 1) {
            if (Patrocinador.bloqueado.data[0] == 1) {
                var newRow = bodyTabela3.insertRow();
                newRow.innerHTML += "<td>" + Patrocinador.Nome_Empresa + "</td> ";
                newRow.innerHTML += "<td>" + Patrocinador.Localizacao + "</td> ";
                newRow.innerHTML += "<td>" + Patrocinador.Contacto + "</td> ";
                newRow.innerHTML += "<td>" + Patrocinador.Email + "</td> ";
                newRow.innerHTML += "<td>" + Patrocinador.Valor + "</td>";
                newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="btn btn-primary" onclick = editar("' + Patrocinador.idPatrocinador + '")>Editar</button> <button type="button" class="recusar-b" onclick = desbloquear("' + Patrocinador.idPatrocinador + '")>Desbloquear</button> <button type="button" class="recusar-b" onclick = eliminar("' + Patrocinador.idPatrocinador + '")>Eliminar</button> </td>';
            } else {
                switch (Patrocinador.Resultado) {
                    case 1:
                        var newRow = bodyTabela1.insertRow();
                        newRow.innerHTML += "<td>" + Patrocinador.Nome_Empresa + "</td> ";
                        newRow.innerHTML += "<td>" + Patrocinador.Localizacao + "</td> ";
                        newRow.innerHTML += "<td>" + Patrocinador.Contacto + "</td> ";
                        newRow.innerHTML += "<td>" + Patrocinador.Email + "</td> ";
                        newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="btn btn-primary" onclick = editar("' + Patrocinador.idPatrocinador + '")>Editar</button> <button type="button" class="recusar-b" onclick = bloquear("' + Patrocinador.idPatrocinador + '")>Bloquear</button> <button type="button" class="recusar-b" onclick = eliminar("' + Patrocinador.idPatrocinador + '")>Eliminar</button> </td>';
                        break;
                    case -1:
                        var newRow = bodyTabela2.insertRow();
                        newRow.innerHTML += "<td>" + Patrocinador.Nome_Empresa + "</td> ";
                        newRow.innerHTML += "<td>" + Patrocinador.Localizacao + "</td> ";
                        newRow.innerHTML += "<td>" + Patrocinador.Contacto + "</td> ";
                        newRow.innerHTML += "<td>" + Patrocinador.Email + "</td> ";
                        newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="btn btn-primary" onclick = editar("' + Patrocinador.idPatrocinador + '")>Editar</button> <button <type="button" class="recusar-b" onclick = eliminar("' + Patrocinador.idPatrocinador + '")>Eliminar</button></td>';
                        break;
                }
            }
        }
    }
};

async function editar(id) {
    //<div>
    //    <h4 class="panel-title">Logotipo</h4>
    //    <img id="logo">
    //</div>
    const response3 = await fetch('http://localhost:8080/patrocinadores/' + id);
    const patrocinador = await response3.json();
    dados = patrocinador[0];
    const modal = document.getElementById("modalBody");
    modal.innerHTML = "";

    modal.innerHTML += '<div class="table-responsive">' +
        '<div class="container bootstrap snippets">' +
        '<div class="row">' +
        '<div class="col-xs-12 col-sm-9">' +
        '<form class="form-horizontal" action="">' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
        '<h4 class="panel-title">Informa&ccedil&atildeo do Patrocinador</h4>' +
        '</div>' +
        '<div class="panel-body">' +
        '<div class="form-group">' +
        '<label class="col-sm-10 control-label">Nome</label>' +
        '<div class="col-sm-10">' +
        '<input type="text" id="Nome_Empresa" class="form-control" value="' + dados.Nome_Empresa + '">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="col-sm-10 control-label">Morada</label>' +
        '<div class="col-sm-10">' +
        '<input type="text" id="Localizacao" class="form-control" value="' + dados.Localizacao + '">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="col-sm-10 control-label">Contacto</label>' +
        '<div class="col-sm-10">' +
        '<input type="tel" id="Contacto" class="form-control" value="' + dados.Contacto + '">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="col-sm-10 control-label">E-mail</label>' +
        '<div class="col-sm-10">' +
        '<input type="text" id="Email" class="form-control" value="' + dados.Email + '">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="col-sm-10 control-label">Valor</label>' +
        '<div class="col-sm-10">' +
        '<input type="number" id="Valor" class="form-control" value="' + dados.Valor + '" id="valor">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="panel panel-default">' +
        '<div class="panel-body">' +
        '<div class="form-group">' +
        '<div class="col-sm-10 col-sm-offset-2">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-sm-10 col-sm-offset-2">' +
        '<button type="button" class="btn btn-primary" onclick=guardarAlteracoes("'+ dados.idPatrocinador +'")>Guardar</button>' +
        '  <button type="button" class="recusar-b" onclick=fechar()>Cancelar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    $("#ModalPatrocinadores").modal();
}

async function guardarAlteracoes(id) {
    var data = {};
    data.id = id;
    data.Nome_Empresa = document.getElementById("Nome_Empresa").value;
    data.Email = document.getElementById("Email").value;
    data.Contacto = document.getElementById("Contacto").value;
    data.Valor = document.getElementById("Valor").value;
    data.Localizacao = document.getElementById("Localizacao").value;

    var url = "http://localhost:8080/patrocinadores/" + id;
    var alerta = "Dados atualizados com sucesso";
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            renderSponsors();
            alert(alerta);
            $('#ModalPatrocinadores').modal('hide');
        }
    }).catch(function (err) {
        console.error(err);
        alert("Erro");
    });
}

function fechar() {
    $('#ModalPatrocinadores').modal('hide');
}

function eliminar(id) {
    var confirmar = confirm("Tem a certeza que pretende eliminar este Patrocinador?");
    if (confirmar) {
        eliminarPatrocinador(id);
    }
}

function bloquear(id) {
    var confirmar = confirm("Tem a certeza que pretende bloquear este Patrocinador?");
    if (confirmar) {
        bloquearPatrocinador(id);
    }
}

function desbloquear(id) {
    var confirmar = confirm("Tem a certeza que pretende desbloquear este Patrocinador?");
    if (confirmar) {
        desbloquearPatrocinador(id);
    }
}

async function eliminarPatrocinador(id) {
    var url = "http://localhost:8080/patrocinadores/del/" + id;
    var alerta = "Patrocinador Eliminado com sucesso";
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

async function bloquearPatrocinador(id) {
    var url = "http://localhost:8080/patrocinadores/bloq/" + id;
    var alerta = "Patrocinador Bloqueado com sucesso";
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
            renderSponsors();
        }
    }).catch(function (err) {
        alert("Erro");
        console.error(err);
    });
}

async function desbloquearPatrocinador(id) {
    var url = "http://localhost:8080/patrocinadores/desbloq/" + id;
    var alerta = "Patrocinador Desbloqueado com sucesso";
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
            renderSponsors();
        }
    }).catch(function (err) {
        alert("Erro");
        console.error(err);
    });
}