window.onload = function() {
    renderActv();
    renderActvC()
};

/*TABLE*/
async function renderActv() {
    const conteudo = document.getElementById("actvT");
    conteudo.innerHTML = "";
    const response = await fetch('http://localhost:8080/Atividades/');
    const atividades = await response.json();
    for (const atividade of atividades) {
            var response2 = await fetch('http://localhost:8080/espacos/' + atividade.idEspaco);
            var espaco = await response2.json();
            var data1 = new Date(atividade.Data);
            var newRow = conteudo.insertRow();
            newRow.innerHTML += "<td>" + espaco[0].Nome + "</td> ";
            newRow.innerHTML += "<td>" + espaco[0].Localizacao + "</td> ";
            newRow.innerHTML += "<td>" + atividade.Nome + "</td> ";
            newRow.innerHTML += "<td>" + data1.getDate() + '/' + data1.getMonth() + '/' + data1.getFullYear() + "</td> ";
            newRow.innerHTML += "<td>" + espaco[0].Preco + "</td> ";
    }
}

/* CARDS*/
async function renderActvC() {
    var container = document.getElementById("container");
    const response = await fetch('http://localhost:8080/Atividades/');
    const atividades = await response.json();
    for(const atividade of atividades){
        var response2 = await fetch('http://localhost:8080/espacos/' + atividade.idEspaco);
        var espaco = await response2.json();
        var data1 = new Date(atividade.Data);
        var el = document.createElement("div");
        el.className ="cardTable card-body";
        el.innerHTML = "";
        el.innerHTML += "<b>" + espaco[0].Nome.fontsize(5) + "</b>";
        el.innerHTML += "Localização: " + espaco[0].Localizacao + "<br>";
        el.innerHTML += "Atividade: " + atividade.Nome + "<br>";
        el.innerHTML += "Data: " + data1.getDate() + '/' + data1.getMonth() + '/' + data1.getFullYear() + "<br>";
        el.innerHTML += "Custo: " + espaco[0].Preco + "€";
        container.append(el);
    }
}