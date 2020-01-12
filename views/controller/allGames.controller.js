window.onload = function() {
    renderAllGames();
};


async function renderAllGames() {
    const conteudo = document.getElementById("dados");
    conteudo.innerHTML = "";
    const response = await fetch('http://localhost:8080/Atividades/');
    const atividades = await response.json();
    for (const atividade of atividades) {
            var response2 = await fetch('http://localhost:8080/espacos/' + atividade.idEspaco);
            var espaco = await response2.json();
            var data1 = new Date(atividade.Data);
            var newRow = conteudo.insertRow();
            newRow.innerHTML += "<td>" + espaco[0].Nome + "</td> ";
            newRow.innerHTML += "<td>" + atividade.Nome + "</td> ";
            newRow.innerHTML += "<td>" + data1.getDate() + '/' + data1.getMonth() + '/' + data1.getFullYear() + "</td> ";
            newRow.innerHTML += "<td>" + espaco[0].Preco + "</td> ";
            newRow.innerHTML += "<td>" + espaco[0].Localizacao + "</td> ";
        }
    }