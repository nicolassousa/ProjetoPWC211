window.onload = function() {
    renderGestores();
};

async function renderGestores() {
    const response = await fetch('http://localhost:8080/Espacos/');
    const espacos = await response.json();
    const bodyTabela1 = document.getElementById("PedidosEspacos");
    bodyTabela1.innerHTML = "";
    for (const Espaco of Espacos) {
        var newRow = conteudo.insertRow();
        newRow.innerHTML += "<th>" + Espaco.idEspaco + "</th> ";
        newRow.innerHTML += "<td>" + Espaco.Nome + "</td> ";
        newRow.innerHTML += "<td>" + Espaco.Localizacao + "</td> ";
        newRow.innerHTML += "<td>" + Espaco.Estado + "</td> ";
        newRow.innerHTML += "<td>" + Espaco.Preco + " €</td> ";

        const response2 = await fetch('http://localhost:8080/gestorAdmins/' + Espaco.idGestor_Admin_FK9);
        const Gestores = await response2.json();
        for (Gestor of Gestores) {
            newRow.innerHTML += "<th>" + Gestor.idGestor_Admin + "</th> ";
            newRow.innerHTML += "<td>" + Gestor.Nome + "</td> ";
            newRow.innerHTML += "<td>" + Gestor.Email + "</td> ";
            newRow.innerHTML += "<td>" + Gestor.Contacto + "</td>";
        }
    }

    const conteudo2 = document.getElementById("tabela2").getElementsByTagName('tbody')[0];
    const response3 = await fetch('http://localhost:8080/gestorAdmins/');
    const gestorAdmins = await response3.json();
    for (const gestorAdmin of gestorAdmins) {
        if (gestorAdmin.Tipo == 1 && gestorAdmin.Ativo.data[0] == 1) {
            var newRow2 = conteudo2.insertRow();
            newRow2.innerHTML += "<th>" + gestorAdmin.idGestor_Admin + "</th> ";
            newRow2.innerHTML += "<td>" + gestorAdmin.Nome + "</td> ";
            newRow2.innerHTML += "<td>" + gestorAdmin.Email + "</td> ";
            newRow2.innerHTML += "<td>" + gestorAdmin.Contacto + "</td> ";
        }
    }
}