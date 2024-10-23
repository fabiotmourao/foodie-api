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

async function Inserir(id_usuario, dados) {
    let sql = `insert into pedido (
            id_usuario, 
            id_empresa, 
            vl_subtotal, 
            vl_taxa_entrega, 
            vl_total,
            status,
            created_at,
            updated_at
        ) values (
            ?, ?, ?, ?, ?, 'P', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
        )`;

    const result = await execute(sql, [id_usuario, dados.id_empresa, dados.vl_subtotal, dados.vl_taxa_entrega, dados.vl_total], 'run');

    const pedido = { id: result.lastID };

    dados.itens.forEach(async item => {
        sql = `insert into pedido_item (
            id_pedido, 
            id_produto, 
            obs,
            qtd,
            vl_unitario, 
            vl_total,
            created_at,
            updated_at
        ) values (
            ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
        )`;
        await execute(sql, [pedido.id, item.id_produto, item.obs, item.qtd, item.vl_unitario, item.vl_total], 'run');
    });

    return pedido;

}


export default { Listar, ListarId, Inserir };