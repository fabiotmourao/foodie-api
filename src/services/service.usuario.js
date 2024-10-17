import repositoryUsario from "../repositories/repository.usuario.js";

async function Favoritos(id) {

    const favoritos = await repositoryUsario.Favoritos(id);

    return favoritos;
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {

    const usuario = await repositoryUsario.Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep);

    return usuario;
}

export default { Favoritos, Inserir };