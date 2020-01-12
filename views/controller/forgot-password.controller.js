window.onload = function() {
    const btnLogin = document.getElementById("btnEnviar");
    btnLogin.onclick = function trySend() {
        const email = document.getElementById('txtEmail');
        var data = {};
        data.Email = email.value;

        fetch('http://localhost:8080/forgotpassword', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                Swal.fire({
                    title: "Este conta não existe",
                    icon: "error",
                    width: "28rem"
                })
            } else {
                Swal.fire({
                    title: "Email enviado com sucesso",
                    text: "Verifique o seu email",
                    icon: "success",
                    width: "28rem",
                    showConfirmButton: false,
                    timer: 3000
                }).then(() => {
                    window.location.replace('login')
                })
            }
        }).catch(function(err) {
            Swal.fire({
                title: "Erro ao enviar dados",
                text: err,
                icon: "error",
                width: "28rem"
            })
        });
    };
}