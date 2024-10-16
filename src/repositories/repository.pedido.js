import { execute } from "../database/sqlite.js";

async function Listar() {

    const sql = `select *
    from pedido p
    join empresa e on e.id = p.id_empresa
    order by p.id desc`;

    const pedidos = await execute(sql, []);

    return pedidos;
}

async function ListarId(id) {

    const sql = `select *
    from pedido p
    join empresa e on e.id = p.id_empresa
    where p.id = ?
    order by p.id desc`;

    const sqlItens = `select *
    from pedido_item i
    join produto p on p.id  = i.id_produto
    where i.id_pedido = ?
    order by i.id  desc`;

    const pedido = await execute(sql, [id]);
    const itens = await execute(sqlItens, [id]);

    pedido[0].itens = itens;

    return pedido[0];
}

export default { Listar, ListarId };