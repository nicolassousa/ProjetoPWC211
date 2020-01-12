window.onload = function() {
    renderAdmins();
    //document.getElementById("email").reset();
};


async function renderAdmins() {
    const conteudo = document.getElementById("dados1");
    conteudo.innerHTML = "";
    const response = await fetch('http://localhost:8080/GestorAdmins/');
    const gestorAdmins = await response.json();
    for (const gestorAdmin of gestorAdmins) {
        if ((gestorAdmin.Tipo == 0 || gestorAdmin.Tipo == 1) && gestorAdmin.Ativo.data[0] == 1) {
            var newRow = conteudo.insertRow();
            newRow.innerHTML += "<td>" + gestorAdmin.Nome + "</td> ";
            newRow.innerHTML += "<td>" + gestorAdmin.Contacto + "</td> ";
            newRow.innerHTML += "<td>" + gestorAdmin.Email + "</td> ";
        }
    }
}
function adicionar() {
    var confirmar = confirm("Tem a certeza que pretende adicionar este Administrador ?");
    if (confirmar) {
        adicionarAdmin();
    }
}


async function adicionarAdmin() {
    var admin = {};
    admin.Nome = "Novo Admin"
    admin.Email = document.getElementById("email").value;
    admin.Contacto = 999999999;
    admin.Tipo = 1;
    admin.Resultado = 1;
    var url = "http://localhost:8080/GestorAdmins/";
    var alerta = "Administrador Adicionado com sucesso";
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(admin)
    }).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            alert(alerta);
            renderAdmins();
        }
    }).catch(function (err) {
        alert("Erro");
        console.error(err);
    });
}
    

