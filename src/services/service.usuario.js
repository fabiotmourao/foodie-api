import bcrypt from "bcrypt";
import * as helpers from "../helpers/helpers.js";
import * as usuarioValidator from '../validators/usuarioValidator.js';
import repositoryUsuario from "../repositories/repository.usuario.js";
import jwt from "../token.js";

async function Favoritos(id) {

    const favoritos = await repositoryUsuario.Favoritos(id);

    return favoritos;
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {

       // Validações específicas do usuário
       usuarioValidator.validarNome(nome);
       usuarioValidator.validarEmail(email);
       usuarioValidator.validarSenha(senha);
       usuarioValidator.validarEndereco(endereco);
       usuarioValidator.validarBairro(bairro);
       usuarioValidator.validarCidade(cidade);
       usuarioValidator.validarUF(uf);
       usuarioValidator.validarCEP(cep);
   
    const validarUsuario = await repositoryUsuario.ListarByEmail(email);

    if (validarUsuario.id) {
        throw new Error ("Já existe um usuário com esse e-mail");
    }

    const hashSenha = await helpers.hashSenha(senha);

    const usuario = await repositoryUsuario.Inserir(nome, email, hashSenha, endereco, complemento, bairro, cidade, uf, cep);

    usuario.token = jwt.CreateJWT(usuario.id);

    return usuario;
}

async function Login(email, senha) {
    const usuario = await repositoryUsuario.ListarByEmail(email);

    if (usuario.length == 0) {
        return [];
    } else {
        const senhaValida = await helpers.compararSenha(senha, usuario.senha);

        if (senhaValida) {
            delete usuario.senha;  
            usuario.token = jwt.CreateJWT(usuario.id);
            return usuario;
        } else {
            return [];
        }
    }
}

async function Perfil(id) {

    const usuario = await repositoryUsuario.ListarById(id);

    return usuario;
}

export default { Favoritos, Inserir, Login, Perfil };