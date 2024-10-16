import repositoryPedido from "../repositories/repository.pedido.js";

async function Listar() {    

    const pedidos = await repositoryPedido.Listar();

    return pedidos;
}    

async function ListarId(id) {    

    const pedido = await repositoryPedido.ListarId(id);

    return pedido;
}

export default { Listar, ListarId };