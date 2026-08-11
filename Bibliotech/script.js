function login(event) {
    event.preventDefault();

    let usuario = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let mensagem = document.getElementById("mensagem");

    // Validação do nome
    if (usuario === "" || usuario.length < 2) {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Digite seu nome completo.";
        return;
    }

    // Validação do e-mail
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Digite um e-mail válido.";
        return;
    }

    // Validação da senha
    if (senha.length < 6) {
        mensagem.style.color = "red";
        mensagem.innerHTML = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    // Login
    const usuarioCorreto = "admin admin";
    const senhaCorreta = "123456";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        mensagem.style.color = "green";
        mensagem.innerHTML = "Login realizado com sucesso!";

        setTimeout(() => {
            window.location.href = "pag2.html";
        }, 1000);
    } else {
        mensagem.style.color = "red";
        mensagem.innerHTML = "Usuário ou senha incorretos.";
    }
}
