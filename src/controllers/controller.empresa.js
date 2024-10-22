import serviceEmpresa from "../services/service.empresa.js";

async function Destaques(req, res) {
    try {
        const id = req.id;
        const empresas = await serviceEmpresa.Destaques(id);

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Listar(req, res) {
    try {
        const id = req.id;
        const busca = req.query.busca;
        const empresas = await serviceEmpresa.Listar(id, busca);

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Favoritar(req, res) {
    try {
        const id_usuario = req.id;
        const id_empresa =req.params.id
        const favoritar = await serviceEmpresa.Favoritar(id_usuario, id_empresa);
        res.status(201).json(favoritar);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Desfavoritar(req, res) {
    try {
        const id_usuario = req.id;
        const id_empresa =req.params.id        
        const desfavoritar = await serviceEmpresa.Desfavoritar(id_usuario, id_empresa);
        res.status(200).json(desfavoritar);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Cardapio(req, res) {
    try {
        const id_usuario = req.id;
        const id_empresa =req.params.id
        const cardapio = await serviceEmpresa.Cardapio(id_usuario, id_empresa);
        res.status(200).json(cardapio);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Destaques, Listar, Favoritar, Desfavoritar, Cardapio };