window.onload = function() {
    const btnLogin = document.getElementById("btnLogin");
    btnLogin.onclick = function tryLogIn() {
        const email = document.getElementById('txtEmail');
        const pass = document.getElementById('txtPass');
        var data = {};
        data.Email = email.value;
        data.Password = pass.value;

        fetch('http://localhost:8080/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                Swal.fire({
                    title: "Email ou Password errados",
                    text: "Porfavor confirme as suas credencias",
                    icon: "error",
                    width: "28rem"
                })
            } else {
                Swal.fire({
                    title: "Login com sucesso",
                    text: "Seja bem-vindo ao Press&Play",
                    icon: "success",
                    width: "28rem",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.replace('dashboard')
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