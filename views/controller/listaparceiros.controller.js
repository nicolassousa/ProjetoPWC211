window.onload = function () {
    renderGestoresAtivos();
    renderGestoresRecusados();
    renderGestoresBloqueados();
}

async function renderGestoresAtivos() {
    const response = await fetch('http://localhost:8080/GestorAdmins/');
    const gestores = await response.json();
    const bodyTabela1 = document.getElementById("GestoresAtivos");
    bodyTabela1.innerHTML = "";

    for (gestor of gestores) {
        if (gestor.Ativo.data[0] == 1 && gestor.bloqueado.data[0] == 0 && gestor.Resultado == 1 && gestor.Tipo == 2) {
            var data = new Date(gestor.dataAplicacao);
            var newRow = bodyTabela1.insertRow();
            var mes = data.getMonth() + 1;
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Nome + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Email + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Contacto + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + data.getDate() + '/' + mes + '/' + data.getFullYear() + " </td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="btn btn-primary" onclick = renderModal("' + gestor.idGestor_Admin + '")>Ver Mais</button> <button type = "button" class="recusar-b" onclick = bloquear("' + gestor.idGestor_Admin + '")>Bloquear</button > <button type="button" class="recusar-b" onclick = eliminar("' + gestor.idGestor_Admin + '")>Eliminar</button>';
        }
    }
}

async function renderGestoresRecusados() {
    const response0 = await fetch('http://localhost:8080/GestorAdmins/');
    const gestores = await response0.json();
    const bodyTabela1 = document.getElementById("gestoresRecusados");
    bodyTabela1.innerHTML = "";

    for (gestor of gestores) {
        if (gestor.Ativo.data[0] == 1 && gestor.bloqueado.data[0] == 0 && gestor.Resultado == -1 && gestor.Tipo == 2) {
            var data = new Date(gestor.dataAplicacao);
            var newRow = bodyTabela1.insertRow();
            var mes = data.getMonth() + 1;
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Nome + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Email + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Contacto + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + data.getDate() + '/' + mes + '/' + data.getFullYear() + " </td> ";
      
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="btn btn-primary" onclick = renderModal("' + gestor.idGestor_Admin + '")>Ver Mais</button> <button type="button" class="recusar-b" onclick = eliminar("' + gestor.idGestor_Admin + '")>Eliminar</button>';
        }
    }
}

async function renderGestoresBloqueados() {
    const response = await fetch('http://localhost:8080/GestorAdmins/');
    const gestores = await response.json();
    const bodyTabela1 = document.getElementById("GestoresBloqueados");
    bodyTabela1.innerHTML = "";

    for (gestor of gestores) {
        if (gestor.Ativo.data[0] == 1 && gestor.bloqueado.data[0] == 1 && gestor.Resultado == 1 && gestor.Tipo == 2) {
            var data = new Date(gestor.dataAplicacao);
            var newRow = bodyTabela1.insertRow();
            var mes = data.getMonth() + 1;
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Nome + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Email + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + gestor.Contacto + "</td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false">' + data.getDate() + '/' + mes + '/' + data.getFullYear() + " </td> ";
            newRow.innerHTML += '<td class="pt-3-half" contenteditable="false"> <button type="button" class="btn btn-primary" onclick = renderModal("' + gestor.idGestor_Admin + '")>Ver Mais</button> <button type = "button" class="recusar-b" onclick = desbloquear("' + gestor.idGestor_Admin + '")>Desbloquear</button > <button type="button" class="recusar-b" onclick = eliminar("' + gestor.idGestor_Admin + '")>Eliminar</button>';
        }
    }
}

async function renderModal(id) {
    const response1 = await fetch('http://localhost:8080/espacos/gestor/' + id);
    const espacos = await response1.json();
    const modal = document.getElementById("modalBody");
    modal.innerHTML = "";

    for (espaco of espacos) {

        modal.innerHTML += '<div class="car">';
        //'<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
        //'<div class="carousel-inner mt-0" role="listbox">';
        ////'<div class="carousel-item active" style="background-image: url(' + imagens / real.png + '); height: 250px; width:100%;"></div>';
        //            //    <div class="carousel-item" style="background-image: url('imagens/real1.png'); height: 250px; width:100%;">
        //            //    </div>
        //            //</div>
        //modal.innerHTML += '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
        //    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        //    '<span class="sr-only">Previous</span>' +
        //    '</a>' +
        //    '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
        //    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        //    '<span class="sr-only">Next</span>' +
        //    '</a>' +
        modal.innerHTML += '</div>' +
            '</div>' +
            '<div>' +
            '<h4 class="card-title"><p> <u>Informacoes e Contactos </u> </p></h4>' +
            '<span class="dados1"><i class="fas fa-signature"></i></i> </span> <b class="dados">' + espaco.Nome + '</b> <br>' +
            '<span class="dados1"><i class="fa fa-location-arrow" aria-hidden="true"></i></span> <b class="dados">' + espaco.Localizacao + '</b>' +
            '</div>' +
            '<div><h4 class="card-title"><p><u>Valor por Hora:</u> <span style="color: #0F552D;">' + espaco.Preco + '\u20AC</span> </p></h4> <br>' +
            '<h4 class="card-title"><p><u>Caracteristicas do Espa\u00e7o </u></p></h4 ></div>';
        var primeiraDiv = document.createElement('div');
        var segundaDiv = document.createElement('div');
        var terceiraDiv = document.createElement('div');
        var div1 = document.createElement('div');
        div1.innerHTML = "Wifi";
        div1.className = "vermelho";
        var div2 = document.createElement('div');
        div2.innerHTML = "Iluminacao";
        div2.className = "vermelho";
        var div3 = document.createElement('div');
        div3.innerHTML = "Balnearios";
        div3.className = "vermelho";
        var div4 = document.createElement('div');
        div4.innerHTML = "Cacifos";
        div4.className = "vermelho";
        var div5 = document.createElement('div');
        div5.innerHTML = "Chuveiros";
        div5.className = "vermelho";
        var div6 = document.createElement('div');
        div6.innerHTML = "Bolas";
        div6.className = "vermelho";
        var div7 = document.createElement('div');
        div7.innerHTML = "Coletes";
        div7.className = "vermelho";
        var div8 = document.createElement('div');
        div8.innerHTML = "Estacionamento";
        div8.className = "vermelho";
        var div9 = document.createElement('div');
        div9.innerHTML = "Bancada";
        div9.className = "vermelho";
        var div10 = document.createElement('div');
        div10.innerHTML = "Bar";
        div10.className = "vermelho";
        var div11 = document.createElement('div');
        div11.innerHTML = "Acesso";
        div11.className = "vermelho";

        const response2 = await fetch('http://localhost:8080/comodidadesEspaco/' + espaco.idEspaco);
        const comodidades = await response2.json();
        var id = 1;
        if (isIterable(comodidades)) {
            for (comodidade of comodidades) {
                if (comodidade.Possui.data[0] == 1) {
                    switch (comodidade.idComodidade_FK3) {
                        case 1:
                            div1.className = "verde";
                            break;
                        case 2:
                            div2.className = "verde";
                            break;
                        case 3:
                            div3.className = "verde";
                            break;
                        case 4:
                            div4.className = "verde";
                            break;
                        case 5:
                            div5.className = "verde";
                            break;
                        case 6:
                            div6.className = "verde";
                            break;
                        case 7:
                            div7.className = "verde";
                            break;
                        case 8:
                            div8.className = "verde";
                            break;
                        case 9:
                            div9.className = "verde";
                            break;
                        case 10:
                            div10.className = "verde";
                            break;
                        case 11:
                            div11.className = "verde";
                            break;
                    }
                }
            }
        }
        primeiraDiv.appendChild(div1);
        primeiraDiv.appendChild(div2);
        primeiraDiv.appendChild(div3);
        primeiraDiv.appendChild(div4);
        primeiraDiv.appendChild(div5);

        modal.appendChild(primeiraDiv);
        modal.innerHTML += '<br>';

        segundaDiv.appendChild(div6);
        segundaDiv.appendChild(div7);
        segundaDiv.appendChild(div8);
        segundaDiv.appendChild(div9);
        segundaDiv.appendChild(div10);

        modal.appendChild(segundaDiv);
        modal.innerHTML += '<br>';

        terceiraDiv.appendChild(div11);
        modal.appendChild(terceiraDiv);

        const response3 = await fetch('http://localhost:8080/Horario/' + espaco.idEspaco);
        const Horarios = await response3.json();
        var hora_abertura;
        var hora_encerramento;

        if (isIterable(Horarios)) {
            hora_abertura = Horarios[0].abertura;
            hora_encerramento = Horarios[0].encerramento;
        }
        else {
            hora_abertura = "Nao definida";
            hora_encerramento = "Nao definida"
        }


        modal.innerHTML += '<br><div>' +
            '<h4 class="card-title"><p><u> Horario </u></p></h4>' +
            '<b><span style="color: #0F552D;"> Abertura</span></b></span><b id="abertura">' + hora_abertura + '</b>' +
            '<br>' +
            '<b><span style="color: rgb(238, 32, 49);"> Encerramento</span></b> </span> <b id="encerramento">' + hora_encerramento + '</b><br><br>' +
            '</div>';

        var div = document.createElement('div');
        var div01 = document.createElement('div');
        var divsegunda = document.createElement('div');
        divsegunda.innerHTML = "Segunda";
        divsegunda.className = "vermelho";
        var divterca = document.createElement('div');
        divterca.innerHTML = "Ter\u00e7a";
        divterca.className = "vermelho";
        var divquarta = document.createElement('div');
        divquarta.innerHTML = "Quarta";
        divquarta.className = "vermelho";
        var divquinta = document.createElement('div');
        divquinta.innerHTML = "Quinta";
        divquinta.className = "vermelho";
        var divsexta = document.createElement('div');
        divsexta.innerHTML = "Sexta";
        divsexta.className = "vermelho";
        var divsabado = document.createElement('div');
        divsabado.innerHTML = "Sabado";
        divsabado.className = "vermelho";
        var divdomingo = document.createElement('div');
        divdomingo.innerHTML = "Domingo";
        divdomingo.className = "vermelho";

        if (isIterable(Horarios)) {
            for (horario of Horarios) {
                console.log(horario.diaSemana);
                switch (horario.diaSemana) {
                    case 1:
                        divsegunda.className = "verde";
                        break;
                    case 2:
                        divterca.className = "verde";
                        break;
                    case 3:
                        divquarta.className = "verde";
                        break;
                    case 4:
                        divquinta.className = "verde";
                        break;
                    case 5:
                        divsexta.className = "verde";
                        break;
                    case 6:
                        divsabado.className = "verde";
                        break;
                    case 7:
                        divdomingo.className = "verde";
                        break;
                }
            }
        }

        div.appendChild(divsegunda);
        div.appendChild(divterca);
        div.appendChild(divquarta);
        div.appendChild(divquinta);
        div.appendChild(divsexta);

        modal.appendChild(div);
        modal.innerHTML += '<br>';

        div01.appendChild(divsabado);
        div01.appendChild(divdomingo);

        modal.appendChild(div01);
        modal.innerHTML += '<br><br>';

        $("#basicModal").modal();
    }
}

function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}


    function bloquear(id) {
        var confirmar = confirm("Tem a certeza que pretende bloquear este Parceiro?");
        if (confirmar) {
            alterarResultado(id, true);
        }
    }

    function desbloquear(id) {
        var confirmar = confirm("Tem a certeza que pretende desbloquear este Parceiro ?");
        if (confirmar) {
            alterarResultado(id, false);
        }
    }

    async function alterarResultado(id, value) {
        var url = "";
        var alerta = "";

        if (value) {
            url = "http://localhost:8080/GestorAdmins/" + id + "/bloquear"
            alerta = "Parceiro bloqueado com sucesso";
        } else {
            url = "http://localhost:8080/GestorAdmins/" + id + "/desbloquear"
            alerta = "Parceiro desbloqueado com sucesso";
        }
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
                renderGestoresBloqueados();
                renderGestoresAtivos();
                renderGestoresRecusados();

            }
        }).catch(function (err) {
            alert("Erro");
            console.error(err);
        });
}

function eliminar(id) {
    var confirmar = confirm("Tem a certeza que pretende eliminar este Patrocinador ?");
    if (confirmar) {
        eliminarParceiro(id);
    }
}

async function eliminarParceiro(id) {
    var url = "http://localhost:8080/GestorAdmins/del/" + id;
    var alerta = "Parceiro Eliminado com sucesso";
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
            renderGestoresAtivos();
            renderGestoresRecusados();
            renderGestoresBloqueados();
        }
    }).catch(function (err) {
        alert("Erro");
        console.error(err);
    });
}
