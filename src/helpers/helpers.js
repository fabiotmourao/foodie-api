// helpers.js

import bcrypt from 'bcrypt';

// Função para hash de senha
export async function hashSenha(senha) {
    const saltRounds = 10;
    return await bcrypt.hash(senha, saltRounds);
}

// Função para comparar senha com hash
export async function compararSenha(senha, hash) {
    return await bcrypt.compare(senha, hash);
}
