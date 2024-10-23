import { execute } from "../database/sqlite.js";

async function Destaques(id) {

    const sql = `select
	case when uf.id is null then 'N' else 'S' end as favorito, e.*
    from destaque d
    join empresa e on e.id = d.id_empresa
    left join usuario_favorito uf on uf.id_empresa = e.id  
    and uf.id_usuario  = ?
    order by d.ordem`;

    const empresas = await execute(sql, [id]);

    return empresas;
}

async function Listar(id, busca) {

    let filtro = [id];

    let sql = `select
	case when uf.id is null then 'N' else 'S' end as favorito, e.*
    from empresa e
    left join usuario_favorito uf on uf.id_empresa = e.id
    and uf.id_usuario  = ?`;

    if (busca) {
        filtro = [id, `%${busca}%`];
        sql += ` where e.nome like ?`;
    }

    sql += ` order by e.nome`;

    const empresas = await execute(sql, filtro);

    return empresas;
}

async function Favoritar(id_usuario, id_empresa) {

    await  Desfavoritar(id_usuario, id_empresa);

    const sql = `insert into usuario_favorito (id_usuario, id_empresa) values (?, ?)`;    

    const result = await execute(sql, [id_usuario, id_empresa], 'run');

    const favoritar = { id: result.lastID };

    return favoritar;
}

async function Desfavoritar(id_usuario, id_empresa) {

    const sql = `delete from usuario_favorito where id_usuario = ? and id_empresa = ?`;    

    const result = await execute(sql, [id_usuario, id_empresa], 'run');

    const desfavoritar = { id: result.lastID };

    return desfavoritar;
}

async function Cardapio(id_usuario, id_empresa) {

    let sql = `select case when uf.id is null then 'N' else 'S' end as favorito, e.*
    from empresa e
    left join usuario_favorito uf on uf.id_empresa = e.id
    and uf.id_usuario  = ?
    where e.id = ?`;

    const empresa = await execute(sql, [id_usuario, id_empresa]);

    sql = `select p.* ,pc.categoria 
    from produto p 
    join produto_categoria pc on pc.id_empresa = p.id_empresa 
    and pc.id = p.id_categoria
    where p.id_empresa = ?
    order by pc.ordem , p.nome `;

    const itens = await execute(sql, [id_empresa]);

    let retorno = empresa[0];

    retorno.itens = itens;

    return retorno;
}

async function ListarProdutoId(id_produto, id) {    

    const sql = `select *
    from produto p
    where  p.id_empresa = ? and p.id = ?`;  

    const produto = await execute(sql, [id_produto, id]);

    return produto[0];
}

export default { Destaques, Listar, Favoritar, Desfavoritar, Cardapio, ListarProdutoId };