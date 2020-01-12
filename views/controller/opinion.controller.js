window.onload = function() {
    validator();
    document.getElementById("opinionForm").reset();
}

function validator() {
    let validator = new Validator(document.querySelector('form[name="opinionForm"]'), function (err, res) {
        if (res) {
            sendOpinion();
        }
    });
}

function sendOpinion() {
    var data = {};
    data.Nome = document.getElementById("nameO").value;
    data.Email = document.getElementById("emailO").value;
    data.Mensagem = document.getElementById("messageO").value;
    data.Tipo = 1;
    fetch('http://localhost:8080/mail', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        console.log(response)
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            document.getElementById("opinionForm").reset();
            alert("Pedido com sucesso");
        }
    }).catch(function (err) {

    }); 

}