window.onload = function() {
    const id = getCookie("idC")
    const tipo = getCookie("tipoC")
    const email = this.document.getElementById('txtemail').value
    const btnSave = document.getElementById("btnSave");
    btnSave.onclick = function() {
        const nome = document.getElementById('txtNome').value.trim();
        const contacto = document.getElementById('txtContacto').value.trim();
        const pass1 = document.getElementById('txtPass1').value
        const pass2 = document.getElementById('txtPass2').value;
        nomePattern = /^[a-zA-Z\sа-яА-Яêãõêãâá\']+$/g
        var goodName = nomePattern.test(nome) && nome;
        var goodContacto = !isNaN(contacto) && contacto;
        var goodPass = (pass1 == pass2 && pass1 && pass2)
        if (goodName && goodContacto && goodPass) {
            Swal.fire({
                title: 'Tem a certeza que pretende alterar os seus dados?',
                text: "Terá que fazer login novamente!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#1A9B52',
                cancelButtonColor: '#B20000',
                confirmButtonText: 'Sim, quero alterar!',
                cancelButtonText: 'Não, quero voltar atrás!',
                width: "32rem"
            }).then((result) => {
                if (result.value) {
                    var data = {};
                    data.Email = email;
                    data.Nome = nome;
                    data.Password = pass1;
                    data.Contacto = contacto;
                    data.Ativo = 1;
                    data.Tipo = tipo;
                    fetch('http://localhost:8080/GestorAdmins/' + id, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'PUT',
                        body: JSON.stringify(data)
                    }).then(function(response) {
                        if (!response.ok) {
                            console.log(response)
                            Swal.fire("Dados inválidos", "error")
                        } else {
                            Swal.fire({
                                title: "Dados alterados com sucesso",
                                text: "Porfavor faça Login!",
                                icon: "success",
                                confirmButtonColor: "#1A9B52",
                                width: "28rem"
                            }).then(() => {
                                window.location.replace("logout")
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
                }
            })

        } else {
            Swal.fire({
                title: "Dados inválidos",
                text: "Porfavor verifique os campos!",
                icon: "error",
                width: "28rem"
            })
        }

    };
}

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}