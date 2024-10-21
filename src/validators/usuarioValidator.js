// usuarioValidator.js

// Validação do nome do usuário (mínimo 3 caracteres e máximo 50)
export function validarNome(nome) {
    if (!nome) {
        throw new Error("O nome é obrigatório.");
    }
    if (nome.length < 3) {
        throw new Error("O nome deve ter no mínimo 3 caracteres.");
    }
    if (nome.length > 50) {
        throw new Error("O nome deve ter no máximo 50 caracteres.");
    }
}

// Validação do e-mail
export function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        throw new Error("O e-mail é obrigatório.");
    }
    if (!emailRegex.test(email)) {
        throw new Error("E-mail inválido.");
    }
    if (email.length > 100) {
        throw new Error("O e-mail deve ter no máximo 100 caracteres.");
    }
}

// Validação da senha (mínimo 6 caracteres e máximo 20)
export function validarSenha(senha) {
    if (!senha) {
        throw new Error("A senha é obrigatória.");
    }
    if (senha.length < 6) {
        throw new Error("A senha deve ter no mínimo 6 caracteres.");
    }
    if (senha.length > 20) {
        throw new Error("A senha deve ter no máximo 20 caracteres.");
    }
}

// Validação do endereço (mínimo 5 caracteres e máximo 100)
export function validarEndereco(endereco) {
    if (!endereco) {
        throw new Error("O endereço é obrigatório.");
    }
    if (endereco.length < 5) {
        throw new Error("O endereço deve ter no mínimo 5 caracteres.");
    }
    if (endereco.length > 100) {
        throw new Error("O endereço deve ter no máximo 100 caracteres.");
    }
}

// Validação do bairro (mínimo 3 caracteres e máximo 50)
export function validarBairro(bairro) {
    if (!bairro) {
        throw new Error("O bairro é obrigatório.");
    }
    if (bairro.length < 3) {
        throw new Error("O bairro deve ter no mínimo 3 caracteres.");
    }
    if (bairro.length > 50) {
        throw new Error("O bairro deve ter no máximo 50 caracteres.");
    }
}

// Validação da cidade (mínimo 3 caracteres e máximo 50)
export function validarCidade(cidade) {
    if (!cidade) {
        throw new Error("A cidade é obrigatória.");
    }
    if (cidade.length < 3) {
        throw new Error("A cidade deve ter no mínimo 3 caracteres.");
    }
    if (cidade.length > 50) {
        throw new Error("A cidade deve ter no máximo 50 caracteres.");
    }
}

// Validação da UF (deve ter exatamente 2 caracteres)
export function validarUF(uf) {
    if (!uf) {
        throw new Error("O campo UF é obrigatório.");
    }
    if (uf.length !== 2) {
        throw new Error("UF inválido. Deve conter exatamente 2 caracteres.");
    }
}

// Validação do CEP (formato brasileiro)
export function validarCEP(cep) {
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    if (!cep) {
        throw new Error("O CEP é obrigatório.");
    }
    if (!cepRegex.test(cep)) {
        throw new Error("CEP inválido.");
    }
}
