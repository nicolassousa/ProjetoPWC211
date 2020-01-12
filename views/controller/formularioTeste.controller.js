window.onload = function() {
    //chama a função para atualizar os users //adicionar função de validação ao formulário
    validator();
    document.getElementById("formNewSponsor").reset();
}

function validator() {
    let validator = new Validator(document.querySelector('form[name="formNewSponsor"]'), function(err, res) {
        if (res) {
            saveSponsors();
        }
    });
}

function saveSponsors() {
    var data = {};
    data.Nome_Empresa = document.getElementById("name").value;
    data.Email = document.getElementById("email").value;
    data.Contacto = document.getElementById("phone").value;
    data.Valor = document.getElementById("value").value;
    data.Localizacao = document.getElementById("location").value;
    data.Logotipo = "https://www.facebook.com/";
    fetch('http://localhost:8080/patrocinadores/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            document.getElementById("formNewSponsor").reset();
            alert("Pedido com sucesso");
        }
    }).catch(function(err) {
        alert("Erro ao enviar dados");
        console.error(err);
    });

}