import token from "../token.js";
import serviceUsuario from "../services/service.usuario.js";
import jwt from "../token.js";


async function Login(req, res) {
    const { email, senha } = req.body;

    if (email == "teste@teste.com" && senha == "12345") {
        res.status(200).json({
            id: 123,
            email: "teste@teste.com",
            nome: "Heber Stein Mazutti",
            insta: "@devpoint.com.br",
            token: jwt.CreateJWT(123),
        });
    } else {
        res.status(401).json({ error: "E-mail ou senha inválida" });
    }
}

async function Inserir(req, res) {
    try {
        const { nome, email, senha, endereco, complemento, bairro, cidade, uf, cep } = req.body;

        const usuario = await serviceUsuario.Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep);

        usuario.token = jwt.CreateJWT(usuario.id);

        res.status(201).json(usuario);
    } catch (error) {
        console.error("Erro detalhado:", error); 
        res.status(500).json({ error: error.message || "Erro ao processar a requisição" });
    }
}


async function Favoritos(req, res) {
    try {
        const id = 1;
        const favoritos = await serviceUsuario.Favoritos(id);
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Favoritos, Login, Inserir };   