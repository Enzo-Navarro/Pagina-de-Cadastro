function validarFormulario() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return false;
    }

    // Exemplo: Verificar a força da senha (mínimo de 8 caracteres, incluindo letras e números)
    const regexSenhaForte = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regexSenhaForte.test(senha)) {
        alert("A senha deve ter no mínimo 8 caracteres e incluir letras e números.");
        return false;
    }

    return true;
}