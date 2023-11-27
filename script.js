function validarFormulario() {
    var nome = document.getElementById('nome').value;
    if (nome.length < 15) {
        alert('O campo Nome deve ter pelo menos 15 caracteres.');
        document.getElementById('nome').focus();
        return;
    }

       var email = document.getElementById('email').value;
    if (!validarEmail(email)) {
        alert('O campo E-mail deve ter pelo menos 10 caracteres e ser válido.');
        document.getElementById('email').focus();
        return;
    }

       var dataNascimento = document.getElementById('dataNascimento').value;
    if (!validarDataNascimento(dataNascimento)) {
        alert('O campo Data de Nascimento deve conter uma data válida.');
        document.getElementById('dataNascimento').focus();
        return;
    }

        var estadoCivil = document.getElementById('estadoCivil').value;
    if (estadoCivil === 'solteiro') {
        var idade = calcularIdade(dataNascimento);
        if (idade <= 15) {
            alert('Se escolher "Solteiro(a)", a pessoa deve ter mais de 15 anos.');
            document.getElementById('dataNascimento').focus();
            return;
        }
    }

       var areasInteresse = document.getElementById('areasInteresse').selectedOptions;
    if (areasInteresse.length === 0) {
        alert('Selecione pelo menos uma Área de Interesse.');
        document.getElementById('areasInteresse').focus();
        return;
    }

    // Se todas as validações passarem, exiba a mensagem de dados enviados
    alert('Dados enviados com sucesso!');
}

function validarEmail(email) {
       var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) && email.length >= 10;
}

function validarDataNascimento(data) {
    var dataNascimento = new Date(data);
    return !isNaN(dataNascimento.getTime());
}

function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var idade = hoje.getFullYear() - nascimento.getFullYear();
    var mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
