import serviceUsuario from "../services/service.usuario.js";


async function Login(req, res) {
    const { email, senha } = req.body;

    const usuario = await serviceUsuario.Login(email, senha);    

    if (usuario.length == 0) {
        res.status(401).json({ error: "Usuário ou senha inválidos" });
    }else {
        res.status(200).json(usuario);
    }
}

async function Inserir(req, res) {
    try {
        const { nome, email, senha, endereco, complemento, bairro, cidade, uf, cep } = req.body;

        const usuario = await serviceUsuario.Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep);

        res.status(201).json(usuario);
    } catch (error) {
        console.error("Erro detalhado:", error); 
        res.status(500).json({ error: error.message || "Erro ao processar a requisição"});
    }
}

async function Favoritos(req, res) {
    try {
        const id = req.id;
        const favoritos = await serviceUsuario.Favoritos(id);
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Perfil(req, res) {
    try {
        const id = req.id;
        const usuario = await serviceUsuario.Perfil(id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Favoritos, Login, Inserir, Perfil };   