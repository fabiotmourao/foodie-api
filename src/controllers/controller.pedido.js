import servicePedido from "../services/service.pedido.js";

async function Listar(req, res) {
    try {
        const pedidos = await servicePedido.Listar();

        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function ListarId(req, res) {
    try {
        const { id } = req.params;
        const pedido = await servicePedido.ListarId(id);   

        res.status(200).json(pedido);        
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Inserir(req, res) {
    try {
        const id_usuario = req.userId || req.id;  
        const pedido = await servicePedido.Inserir(id_usuario, req.body);      

        res.status(201).json(pedido);        
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao processar o pedido" });
    }
}


export default { Listar, ListarId, Inserir };