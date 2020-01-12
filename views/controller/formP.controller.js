window.onload = function () {
    //chama a função para atualizar os users //adicionar função de validação ao formulário
    validator();
    document.getElementById("formNewParceiro").reset();
}

function validator() {
    let validator = new Validator(document.querySelector('form[name="formNewParceiro"]'), function (err, res) {
        if (res) {
            savePartners();
        }
    });
}

async function savePartners() {
    
    var gestor = {};
    gestor.Nome = document.getElementById("nameO").value;
    gestor.Email = document.getElementById("email").value;
    gestor.Contacto = document.getElementById("phone").value;
    gestor.Tipo = 2;
    var erro = 0;
    var idGestor = 0;

    fetch('http://localhost:8080/GestorAdmins/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(gestor)
    }).then(async function (response) {
        if (!response.ok) {
            erro = response.status;
            throw Error(response.status);
        }
        else {


            idGestor = response.statusText;
            console.log(idGestor);
            var idEspaco = 0;
            var espaco = {}
            espaco.Nome_Espaco = document.getElementById("nameS").value;
            espaco.Preco = document.getElementById("price").value;
            espaco.Localizacao = document.getElementById("location").value;
            espaco.idGestor_Admin = idGestor;

            fetch('http://localhost:8080/espacos/gestor/' + idGestor, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(espaco)
            }).then(async function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    console.log(response);
                    idEspaco = response.statusText;
                    for (var i = 1; i <= 11; i++) {
                        var Comodidade = {};
                        Comodidade.idEspaco = idEspaco;
                        Comodidade.idComodidade = document.getElementById("Com" + i).value;
                        if (document.getElementById("Com" + i).checked) {
                            Comodidade.Possui = 1;
                        } else {
                            Comodidade.Possui = 0;
                        }
                        fetch('http://localhost:8080/comodidadesEspaco/', {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            method: 'POST',
                            body: JSON.stringify(Comodidade)
                        }).then(function (response) {
                            if (!response.ok) {
                                throw Error(response.statusText);
                            }
                        });
                    }

                    for (var i = 1; i <= 7; i++) {
                        if (document.getElementById("day" + i).checked) {
                            var data = {};
                            data.idEspaco = idEspaco;
                            data.Data = document.getElementById("day" + i).value;
                            data.Hora_abertura = document.getElementById("OpenTime").value;
                            data.Hora_encerramento = document.getElementById("CloseTime").value;

                            fetch('http://localhost:8080/Horario/', {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify(data)
                            }).then(function (response) {
                                if (!response.ok) {
                                    throw Error(response.statusText);
                                } else {
                                }
                            });
                        }
                    }
                    document.getElementById("formNewParceiro").reset();
                    alert("Formulario submetido com sucesso");
                }
            });
        }
    }).catch(function (err) {
        if (erro == 409) {
            alert("Email em utilização. Por favor introduze outro.");
        }
        else {
            alert("Erro ao enviar dados. Por favor contacte a administração.");
        }   
    });
}