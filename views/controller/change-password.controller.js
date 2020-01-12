window.onload = function() {

    const token = document.getElementById('txtToken')
    const pass1 = document.getElementById('txtPassword1')
    const pass2 = document.getElementById('txtPassword2')
    const btnLogin = document.getElementById("btnEnviar");
    const idCookie = getCookie('changeIdC')


    btnLogin.onclick = function trySend() {



        if (idCookie && token.value && pass1.value && pass2.value && (pass1.value == pass2.value)) {
            var data = { Token: token.value, Password: pass1.value };

            fetch('http://localhost:8080/GestorAdmins/pwd/' + idCookie, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify(data)
            }).then(function(response) {
                console.log(response);

                if (!response.ok) {
                    Swal.fire({
                        title: "Token inválida",
                        icon: "error",
                        width: "28rem"
                    })
                } else {
                    Swal.fire({
                        title: "Password mudada com sucesso",
                        text: "Por favor faça login",
                        icon: "success",
                        width: "28rem",
                        showConfirmButton: false,
                        timer: 3000
                    }).then(() => {
                        window.location.replace('logout')
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

        } else {
            if (!(token.value && pass1.value && pass2.value && idCookie))
                Swal.fire({
                    title: "Dados inválidos",
                    text: "Porfavor verifique os campos!",
                    icon: "error",
                    width: "28rem"
                })
            else
                Swal.fire({
                    title: "Passwords não coincidem",
                    text: "Porfavor corriga",
                    icon: "error",
                    width: "28rem"
                })
        }



    };
    token.value = ""
    pass1.value = ""
    pass2.value = ""
}

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}